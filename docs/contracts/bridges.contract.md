# Köprüler ve Tüneller Sözleşmesi

**Durum:** Taslak. Burak ve Ömer onayı bekliyor. Ortak kurallar için [common.contract.md](common.contract.md).

Köprü ve tüneller tek modülde ele alınır; ayrım `kind` alanıyla yapılır (`bridge` | `tunnel`). Frontend'deki tek liste sayfası (`/kopruler-ve-tuneller`) ve tek detay şablonu (`/kopruler-ve-tuneller/[slug]`) bununla örtüşür. Tipler dosyada `Structure*` adıyla geçer.

## Uç noktalar

| Metot | Yol | Amaç |
|---|---|---|
| GET | `/api/v1/bridges` | Köprü ve tünel listesi |
| GET | `/api/v1/bridges/:slug` | Tek yapının detayı ve ücretleri |

### `GET /api/v1/bridges`

| Parametre | Tip | Varsayılan | Açıklama |
|---|---|---|---|
| `kind` | `bridge` \| `tunnel` | hepsi | Türe göre filtre |
| `province` | string (slug) | hepsi | İle göre filtre |
| `page` | tamsayı ≥ 1 | 1 | Sayfa |
| `pageSize` | tamsayı 1-100 | 20 | Sayfa boyutu |

Sıralama sabit: ada göre, Türkçe harf sırasıyla. Yanıt: `{ data: StructureSummary[], meta }`. Listede ücret ve kaynak bilgisi **yoktur**; ücret detayda gelir.

### `GET /api/v1/bridges/:slug`

| Parametre | Tip | Varsayılan | Açıklama |
|---|---|---|---|
| `date` | `YYYY-MM-DD` | bugün (`Europe/Istanbul`) | Hangi tarihte geçerli ücretler istendiği |

Yanıt: `{ data: StructureDetail }`. Bilinmeyen slug için `404 NOT_FOUND`. Geçersiz `date` veya `kind` için `400 VALIDATION_ERROR`.

## Alanlar

### `StructureSummary`

| Alan | Tip | Zorunlu | Not |
|---|---|---|---|
| `slug` | string | Evet | Benzersiz, kalıcı |
| `kind` | `bridge` \| `tunnel` | Evet | |
| `name` | string | Evet | |
| `provinces` | string[] | Evet | İl adları (boş olamaz) |
| `tollStatus` | `toll` \| `free` \| `unknown` | Evet | Kaynakta ücret durumu doğrulanmadıysa `unknown`; tahmin edilmez |

### `StructureDetail` (Summary alanlarına ek olarak)

| Alan | Tip | Zorunlu | Not |
|---|---|---|---|
| `operator` | string \| null | Evet | İşleten kurum; bilinmiyorsa `null` |
| `coordinates` | `{ latitude, longitude }` \| null | Evet | Kaynaklı değilse `null` |
| `lengthMeters` | number \| null | Evet | |
| `openedYear` | number \| null | Evet | |
| `description` | string \| null | Evet | Kaynaklı, editoryal açıklama |
| `rateDate` | `YYYY-MM-DD` | Evet | `rates` hangi tarihe göre seçildi |
| `rates` | `StructureRate[]` | Evet | O tarihte geçerli ücretler; yoksa boş dizi |
| `source` | `SourceInfo` \| null | Evet | Ücret verisinin kaynağı; `rates` doluysa `null` olamaz |

### `StructureRate`

| Alan | Tip | Not |
|---|---|---|
| `vehicleClass` | string | KGM tablosundaki sınıf kodu. Sınıf listesi gerçek KGM tablosu incelendikten sonra `tolls.contract.md` içinde sabitlenecek |
| `price` | `Money` | `{ amountMinor, currency }`, bkz. common |
| `validFrom` | `YYYY-MM-DD` | |
| `validUntil` | `YYYY-MM-DD` \| null | `null` = hâlâ geçerli |

## Kurallar

1.  **Tahmin yok.** Ücret bulunamazsa `rates: []` döner; `tollStatus` kaynakta doğrulanmadıysa `unknown` kalır. Frontend "ücret bilgisi bulunamadı" gösterir, fiyat uydurmaz.
2.  **`tollStatus: "free"`** yalnızca kaynak ücretsizliği açıkça belirtiyorsa kullanılır. `rates` boş diye `free` denmez.
3.  **Tarih seçimi:** `rates`, `date` günü için `validFrom <= date` ve (`validUntil` boş veya `date <= validUntil`) koşulunu sağlayan kayıtlardır. Aynı `vehicleClass` için tarih aralıkları çakışan iki kayıt hatalı veridir. Bu durum içe aktarma doğrulamasında (importer `validator`) reddedilip raporlanmalıdır. Çalışma zamanında yine de karşılaşılırsa backend yanlış fiyat göstermek yerine loglayıp `500 INTERNAL_ERROR` döner; kayıt sessizce atlanmaz. Her iki davranış `toll.algorithm` ve importer testlerinde kapsanmalıdır.
4.  **Geçmiş korunur:** eski tarifeler silinmez; yalnızca `date` ile erişilir.
5.  `slug` bir kez yayınlandıktan sonra değişmez.

## Örnek yanıt

> **ÖRNEK, gerçek veri değildir.** İsim, tutar ve kaynak biçimi göstermek içindir.

```json
{
  "data": {
    "slug": "ornek-kopru",
    "kind": "bridge",
    "name": "Örnek Köprü",
    "provinces": ["Örnek İl"],
    "tollStatus": "toll",
    "operator": "ÖRNEK İŞLETMECİ",
    "coordinates": null,
    "lengthMeters": null,
    "openedYear": null,
    "description": null,
    "rateDate": "2026-10-16",
    "rates": [
      {
        "vehicleClass": "ORNEK-1",
        "price": { "amountMinor": 1000, "currency": "TRY" },
        "validFrom": "2026-01-01",
        "validUntil": null
      }
    ],
    "source": {
      "sourceName": "ÖRNEK KAYNAK",
      "sourceUrl": null,
      "documentDate": null,
      "validFrom": "2026-01-01",
      "validUntil": null,
      "retrievedAt": "2026-10-16T09:30:00Z",
      "lastVerifiedAt": "2026-10-16T09:30:00Z"
    }
  }
}
```

## Veri kaynağı (uygulama notu)

İlk sürümde backend `data/processed/kgm/bridges.json`, `tunnels.json` ve `toll-rates.json` dosyalarından okur (karar K-04). Bu dosyalardaki gerçek kayıtlar yalnızca resmî kaynaktan, kaynak ve tarih bilgisiyle eklenir.

## Açık sorular

-   Araç sınıfı kodlarının listesi (KGM tablosu incelenince `tolls.contract.md`'de).
-   Köprü/tünel işletmecisi KGM dışındaysa ücret kaynağı ve gösterimi.
-   Yön bazlı ücret (geliş/gidiş) var mı? Varsa `StructureRate`'e `direction` alanı eklenir.
-   `province` filtresi için il listesi nereden gelecek (sabit liste mi, veriden mi).
