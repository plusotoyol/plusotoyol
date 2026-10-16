# Backend AI Kuralları

Kök [AGENTS.md](../AGENTS.md) geçerlidir; bu dosya `backend/` için ek kurallar ekler. Sahip: Ömer.

## Kapsam

- Yalnızca `backend/`, `data/`, `scripts/` ve `infrastructure/` içinde çalış. `frontend/` dosyalarına dokunma.
- Bir oturum = bir servis, algoritma, importer veya endpoint grubu.
- API sözleşmesi (`docs/contracts/`) değişikliği iki tarafın onayını ister; önce sözleşmeyi önerip onay bekle.

## Katman kuralları

- `routes/`: yalnızca yol tanımı ve controller bağlama. İş mantığı yok.
- `controllers/`: istek al, `validators/` ile doğrula, service çağır, yanıt dön. İnce kalmalı.
- `services/`: iş akışı. Veriye erişim burada veya model katmanında.
- `algorithms/`: saf fonksiyonlar. Girdi ve çıktısı net, yan etkisiz, birim testli.
- `integrations/`: dış servisler. Zaman aşımı, hata ve limit durumu ele alınır; yanıt doğrulanmadan güvenilmez.

## Teknik kurallar

- Express 5, zod (doğrulama), pino (loglama), vitest (test); bkz. `docs/architecture/decisions.md`.
- TypeScript strict, ESM (`"type": "module"`). Göreli import'larda `.js` uzantısı yazılır: `import { x } from './x.js'`.
- Ortam değişkenleri yalnızca `config/env.ts` içinde zod ile doğrulanarak okunur.
- Yeni bağımlılık eklemeden önce gerekçeyi açıkla ve onay al.
- Loglara parola, token ve gereksiz kişisel veri yazma.

## Veri kuralları

- Gerçek dünya verisi uydurma. Her kritik kayıtta kaynak, belge tarihi, geçerlilik ve alınma tarihi tutulur.
- `data/raw/` değiştirilmez veya üzerine yazılmaz; çıktı `data/processed/` altına gider.
- Importer hatalı satırı sessizce atmaz; doğrulama hatalarını raporlar.
- Eski tarife sürümleri silinmez; geçerlilik tarihleriyle saklanır.
- `scripts/database/reset.ts` gibi yıkıcı scriptler açık onay ve koruma olmadan yazılmaz.

## Test

- Kritik algoritmalar (ücret, akaryakıt, yol) test olmadan tamamlanmış sayılmaz.
- Boş test dosyası yeşil görünür ama hiçbir şey test etmez; "test var" demek için en az bir gerçek test gerekir.
- İş sonunda `npm run lint`, `npm run typecheck`, `npm run test` çalıştır; sonuçları ve kalan riskleri bildir.
