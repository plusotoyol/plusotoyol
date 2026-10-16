# Frontend AI Kuralları

Kök [AGENTS.md](../AGENTS.md) geçerlidir; bu dosya `frontend/` için ek kurallar ekler. Sahip: Burak.

## Kapsam

- Yalnızca `frontend/` içinde çalış. `backend/`, `data/`, `scripts/` ve `docs/contracts/` dosyalarına dokunma.
- Bir oturum = bir sayfa veya bir bileşen.
- İş mantığı (ücret hesabı, veri doğrulama) frontend'e yazılmaz; API'den gelen sonuç gösterilir.

## Teknik kurallar

- Next.js App Router, React, TypeScript strict. `any` kullanma.
- Backend ile iletişim yalnızca `lib/api.ts` üzerinden.
- Yeni bileşen oluşturmadan önce `components/common/` ve ilgili özellik klasörünü incele; benzer bileşeni çoğaltma.
- Stil: düz CSS (`app/globals.css`). Yeni stil kütüphanesi eklemek için onay al (docs/architecture/decisions.md, K-13).
- Yeni bağımlılık eklemeden önce gerekçeyi açıkla ve onay al.
- `NEXT_PUBLIC_` ile başlayan değişkenler tarayıcıya gider; gizli değer koyma.

## Veri gösterimi

- Her ücret, akaryakıt ve haber kaydında kaynak ve tarih bilgisi görünür olmalı (`SourceInfo`, bkz. `docs/contracts/common.contract.md`).
- Veri yoksa tahmin gösterme; `EmptyState` veya net bir "veri bulunamadı" mesajı kullan.
- Backend hazır değilken kullanılan örnek veri açıkça "test verisi" olarak etiketlenir ve gerçek veriymiş gibi gösterilmez.

## Kalite

- Başlık hiyerarşisi, form etiketleri, klavye erişimi, kontrast, mobil görünüm.
- Her sayfaya anlamlı `title` ve `description` metadata.
- İş sonunda `npm run lint` ve `npm run typecheck` çalıştır; sonuçları bildir.
- `next build` boş sayfa dosyaları yüzünden şu an başarısızdır; sayfalar yazıldıkça yeşile döner.
