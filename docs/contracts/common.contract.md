# Ortak API Sözleşmesi

**Durum:** Taslak. Burak ve Ömer onayı bekliyor. Modül sözleşmeleri (`roads`, `tolls`, `bridges`, `fuel`, `news`, `articles`) bu kuralları temel alır.

## Temel kurallar

- Temel yol: `/api/v1`
- İçerik tipi: `application/json; charset=utf-8`
- Alan adları: `camelCase`
- Dil: kullanıcıya dönen metinler Türkçe; kodlar ve alan adları İngilizce
- Tarihler: gün için `YYYY-MM-DD`, an için UTC ISO 8601 (`2026-10-16T09:30:00Z`)
- Slug: küçük harf ASCII, Türkçe karakterler dönüştürülür (ç→c, ğ→g, ı→i, ö→o, ş→s, ü→u), boşluk `-`

## Başarılı yanıt

Tek kayıt:

```json
{ "data": { } }
```

Liste:

```json
{
  "data": [ ],
  "meta": { "page": 1, "pageSize": 20, "total": 134 }
}
```

## Hata yanıtı

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Geçersiz istek.",
    "details": [ { "field": "vehicleClass", "issue": "Bilinmeyen araç sınıfı" } ]
  }
}
```

| HTTP | `code` | Ne zaman |
|---|---|---|
| 400 | `VALIDATION_ERROR` | Girdi doğrulaması başarısız |
| 404 | `NOT_FOUND` | Kayıt yok |
| 404 | `RATE_NOT_FOUND` | İstenen ücret kaydı yok (tahmin üretilmez) |
| 429 | `RATE_LIMITED` | İstek sınırı aşıldı |
| 500 | `INTERNAL_ERROR` | Beklenmeyen hata. Hassas sistem ayrıntısı döndürülmez |
| 502 | `UPSTREAM_ERROR` | Dış servis hatası |

## `SourceInfo`

Kritik verisi olan her kayıt (ücret, akaryakıt, haber, makale) kaynak bilgisini taşır.

```json
{
  "sourceName": "Karayolları Genel Müdürlüğü",
  "sourceUrl": "https://...",
  "documentDate": "2026-01-01",
  "validFrom": "2026-01-01",
  "validUntil": null,
  "retrievedAt": "2026-10-16T09:30:00Z",
  "lastVerifiedAt": "2026-10-16T09:30:00Z"
}
```

| Alan | Zorunlu | Not |
|---|---|---|
| `sourceName` | Evet | Kaynağın adı |
| `sourceUrl` | Hayır | Belge veya sayfa adresi; yoksa `null` |
| `documentDate` | Hayır | Kaynak belgenin tarihi |
| `validFrom` | Ücretler için evet | Geçerlilik başlangıcı |
| `validUntil` | Hayır | `null` = hâlâ geçerli |
| `retrievedAt` | Evet | Verinin alındığı an |
| `lastVerifiedAt` | Evet | Son doğrulama anı |

Kaynak bilgisi eksikse bu durum yanıtta görünür kalır (alan `null`); frontend bunu gizlemez, "kaynak belirtilmemiş" olarak gösterir.

## Para

Tutar küsurat hatası olmaması için en küçük birim (kuruş) cinsinden tam sayı olarak taşınır:

```json
{ "amountMinor": 12550, "currency": "TRY" }
```

`12550` = 125,50 TL. Biçimlendirme frontend'in işidir.

## Eksik veri ilkesi

Veri bulunamazsa tahmini değer üretilmez. Ücret yoksa `404 RATE_NOT_FOUND`; kaynak veya tarih eksikse `SourceInfo` alanları `null` döner.

## Değişiklik süreci

Bu dosya veya bir modül sözleşmesi değişirse: 1) önce sözleşme PR'ı açılır, 2) iki kişi onaylar, 3) `frontend/types/` ve `backend/src/types/` aynı PR'da güncellenir.
