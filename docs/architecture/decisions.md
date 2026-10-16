# Teknik Karar Kaydı

Durum etiketleri: **Önerildi** (Claude'un önerisi, ekip onayı bekliyor), **Ertelendi** (bilinçli olarak sonraya bırakıldı), **Kabul** (iki taraf onayladı).

Aşağıdaki kararlar 2026-10-16 tarihinde, proje sahibinin "en doğru şekilde ayarla" yetkisiyle önerilmiştir. Hiçbiri henüz iki kişinin ortak onayıyla "Kabul" edilmemiştir. İtiraz eden olursa ilgili kayıt güncellenir.

| No | Konu | Karar | Durum |
|---|---|---|---|
| K-01 | Backend framework | Express 5 + zod + pino + helmet + express-rate-limit + cors | Önerildi |
| K-02 | Test aracı | Vitest | Önerildi |
| K-03 | Frontend/backend tip paylaşımı | Sözleşme dokümanı tek doğruluk kaynağı; tipler iki tarafta ayrı tutulur | Önerildi |
| K-04 | Veri tabanı ve ORM | Ertelendi; ilk dilimler `data/processed/*.json` okur | Ertelendi |
| K-05 | Test konumları | Birim/servis testleri uygulamanın içinde; çapraz testler kökte | Önerildi |
| K-06 | KGM importer konumu | Mantık `backend/src/data/kgm/`; `scripts/data/` yalnızca ince CLI girişi | Önerildi |
| K-07 | Haber/makale içerik kaynağı | Dosya tabanlı JSON, `data/processed/news` ve `articles`, PR ile yayın | Önerildi |
| K-08 | OSRM / rota | Ertelendi | Ertelendi |
| K-09 | Yönetim paneli / CMS | Ertelendi | Ertelendi |
| K-10 | `facility` (tesis) | Kapsam dışı, tip dosyası silinmez | Önerildi |
| K-11 | Ücretlerin gösterimi | Ayrı `/ucretler` rotası yok; ücret yol ve köprü/tünel detayında | Önerildi |
| K-12 | `route.algorithm.ts` | Rezerve, boş kalır | Önerildi |
| K-13 | Frontend stil | Düz CSS; Tailwind veya UI kütüphanesi yok | Önerildi |
| K-14 | Araç zinciri | npm workspaces, Node 24, TypeScript 6 strict, ESLint, Prettier | Önerildi |

## K-01: Backend framework

Express 5. Mevcut iskelet (`middleware/*.middleware.ts`, `routes/`, `controllers/`) Express kalıbına birebir uyar. Express 5 async hata yakalamayı yerleşik yapar. Doğrulama için zod, loglama için pino (`config/logger.ts`), güvenlik başlıkları için helmet, istek sınırı için express-rate-limit kullanılır.

*Alternatif:* Fastify. Daha hızlı ve şema odaklı, ama mevcut `middleware/` yapısını yeniden düşünmeyi gerektirir. *Risk:* Express'in tip desteği Fastify kadar sıkı değil; zod ile telafi edilir.

## K-02: Test aracı

Vitest. TypeScript ve ESM ile ek ayar gerektirmez. Not: Vitest 5, Node 22.12+, 24 veya 26+ ister. Yerelde Node 25 uyarı verir; `.nvmrc` Node 24'ü işaret eder.

## K-03: Tip paylaşımı

Kısa vade: `docs/contracts/*.contract.md` tek doğruluk kaynağıdır. `frontend/types/` ve `backend/src/types/` ayrı tutulur. Sözleşme değişen her PR iki tip klasörünü birlikte günceller ve CODEOWNERS gereği iki kişi onaylar. Orta vade: sözleşmeler oturunca OpenAPI'den tip üretimi değerlendirilir.

*Neden ortak paket değil:* yeni üst düzey klasör ve yeni bir yapı anlamına gelir; mevcut mimariyi korumak için ertelendi. *Risk:* tipler zamanla ayrışabilir; PR şablonundaki kontrol maddesi bunu azaltır.

## K-04: Veri tabanı

PostgreSQL hedefi değişmedi, ancak şema ve ORM kararı ilk dilimlerden sonraya bırakıldı. Şu an `database.ts`, `migrations/`, `schema/` boş kalır. İlk dilimlerde backend, `data/processed/` JSON dosyalarını okur. Böylece yanlış bir ORM kararıyla erkenden bağlanılmaz.

## K-05: Test konumları

- `backend/tests/`: algoritma, servis, route testleri (Ömer).
- `frontend/tests/`: bileşen ve sayfa testleri (Burak), ihtiyaç doğunca oluşturulur.
- Kök `tests/`: yalnızca iki tarafı birden ilgilendiren entegrasyon, e2e ve ortak `fixtures/`.

## K-06: KGM importer

Gerçek mantık `backend/src/data/kgm/importer/` altında kalır (test edilebilir kütüphane). `scripts/data/import-kgm.ts` ve `process-kgm.ts` yalnızca komut satırından bu fonksiyonları çağıran ince girişlerdir. Mantık scripts içine yazılmaz.

## K-07: Haber ve makale içeriği

Yönetim paneli olmadan, içerik JSON dosyaları olarak `data/processed/news/` ve `data/processed/articles/` altında tutulur ve PR ile yayınlanır. Her kayıtta kaynak, yayın tarihi ve güncelleme tarihi zorunludur. Backend bu dosyaları servis eder. Haber sıklığı artarsa K-09 yeniden değerlendirilir.

## K-09: Yönetim paneli

Ertelendi. Tarife verisi panelden "düzenle/sil" ile değil, yeni geçerlilik tarihli sürüm olarak eklenmelidir. Panel kapsama alınırsa kimlik doğrulama, rol, audit log ve KVKK etkisi birlikte ele alınır.

## K-10: `facility`

`frontend/types/facility.ts` korunur (silme onay ister), ancak backend modeli, sayfa ve bileşen yoktur. Kullanıcıya açık sayfa listesinde de yer almaz.

## K-11: Ücret gösterimi

Rehberdeki sayfa listesinde yeni rota eklemek onay ister. Bu yüzden ücretler yol detayında (`/yollar/[slug]`) ve köprü/tünel detayında (`/kopruler-ve-tuneller/[slug]`) gösterilir. Ayrı bir ücret sorgulama sayfası istenirse rehberin sayfa listesine eklenmeli.

## K-13: Frontend stil

Tasarım sistemi henüz yok. Bağımlılık eklememek için düz CSS ile başlanır. Burak tasarım sistemini (`docs/design/design-system.md`) oluştururken Tailwind gibi bir araç isterse bu karar güncellenir.

## K-14: Araç zinciri

npm workspaces (`frontend`, `backend`). Node 24 (`.nvmrc`). TypeScript 6.x: `typescript-eslint` henüz TypeScript 7'yi desteklemediği için 7'ye çıkılmadı. Backend ESM + NodeNext olduğundan göreli import'larda `.js` uzantısı yazılır.

## Bilinen eksikler ve riskler

- `LICENSE` boş. Lisans seçimi hukuki karardır, ekip belirlemeli.
- `frontend/public/logos/*.svg` boş (0 byte); gerçek marka varlığı gelene kadar kullanılmamalı.
- `.github/CODEOWNERS` içindeki `@BURAK_GITHUB` ve `@OMER_GITHUB` gerçek kullanıcı adlarıyla değiştirilmeli.
- Boş test dosyaları Vitest'te "geçti" sayılır; gerçek test yazılana kadar yeşil çıktı güvence vermez.
- `next build` boş sayfa dosyaları yüzünden başarısız; CI'da frontend build bu yüzden yok.
- `npm audit`: `eslint-config-next` zincirindeki `braces` paketi için 5 yüksek seviyeli uyarı var. Yalnızca geliştirme (lint) zincirinde, üretim bağımlılıklarında uyarı yok. Önerilen düzeltme eski sürüme düşmeyi gerektirdiği için uygulanmadı.
- `contact` modülü (controller, service, validator, sözleşme) tanımsız; form veri saklama kararı ve KVKK etkisi netleşmeden yazılmamalı.
- Docker, Nginx ve `docker-compose.yml` bilerek boş; veri tabanı kararı (K-04) ile birlikte doldurulacak.
