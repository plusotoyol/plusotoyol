# Push Rehberi (AI ajanları için)

Bu dosya, bir iş bittiğinde yapılanları güvenli şekilde GitHub'a göndermek için adım adım talimattır. Kullanıcı sana "docs/PUSH-REHBERI.md dosyasına bak ve yaptıklarımı push at" dediğinde bu adımları sırayla uygula. Kökteki `AGENTS.md` kuralları da geçerlidir.

Komutları **tek tek ayrı satırlarda** çalıştır; `&&` kullanma (Windows PowerShell 5 desteklemez).

## 0. Dur ve sor: bu durumlardan biri varsa devam etme

- Doğrulama (lint, typecheck, test) başarısız.
- Değişen dosyalar iki kişinin alanına birden giriyor (aşağıdaki sahiplik tablosu).
- `.env`, anahtar, token, parola veya kişisel veri içeren dosya stage'de.
- Görevle ilgisi olmayan dosya değişmiş.
- Yeni bağımlılık eklenmiş ve kullanıcı bunu onaylamamış.
- Push kimlik doğrulama hatası veriyor.
- Rebase çakışması çıktı.

Bu durumlarda hiçbir şeyi commit/push etme; durumu kullanıcıya anlat ve ne yapılacağını sor.

## 1. Durumu incele

```text
git status
git branch --show-current
git diff --stat
```

Ne değiştiğini, hangi branch'te olduğunu ve commit'lenmemiş neler olduğunu not et.

## 2. Branch'i kontrol et

- Branch `main` veya `develop` ise **commit atma**. Önce yeni branch aç:
  - `git checkout -b feature/<kısa-iş-adı>`
  - Ön ekler: `feature/` (özellik), `fix/` (hata), `docs/` (doküman), `chore/` (altyapı), `data/` (veri).
  - Ad küçük harf, tire ile, işi anlatan 2-4 kelime: `feature/frontend-design-tokens`, `data/kgm-bridges-raw`.
- Zaten bir `feature/...`, `fix/...`, `docs/...`, `chore/...` veya `data/...` branch'indeysen aynı branch'te devam et. Bir iş = bir branch = bir PR.

## 3. Kapsamı kontrol et

Değişen dosyaları sahiplik tablosuyla karşılaştır:

| Alan | Sahip |
|---|---|
| `frontend/`, `docs/design/`, `frontend/tests/` | Burak |
| `backend/`, `data/`, `scripts/`, `infrastructure/`, `docs/api/`, `docs/algorithms/`, `docs/data/` | Ömer |
| `docs/contracts/`, `docs/architecture/`, `docs/legal/`, `AGENTS.md`, kök dosyalar | Ortak (iki onay) |

- Tüm değişiklikler tek kişinin alanındaysa devam et.
- Ortak alana dokunulduysa devam et ama PR açıklamasında "iki onay gerekir" diye belirt.
- İki kişinin alanı birden değiştiyse **dur ve sor**.

## 4. Doğrula

Kök dizinden, sırayla çalıştır:

```text
npm run lint
npm run typecheck
npm run test
npm run format:check
```

- Hepsi geçmeli. Biri başarısızsa düzeltmeye çalışma (kapsam dışıysa) ve push etme; hatayı raporla.
- Yalnızca `.md` değiştiyse de `format:check` ve `lint` çalıştır.
- Bilinen durum: `next build` boş sayfa dosyaları yüzünden şu an başarısızdır, bunu çalıştırma.
- Boş test dosyaları "geçti" görünür; bu gerçek test anlamına gelmez, raporda belirt.

## 5. Gizli bilgi ve kapsam kontrolü

Stage etmeden önce:

```text
git status --short
```

- `.env`, `.env.local`, `*.pem`, `*.key`, token veya parola içeren dosya var mı? Varsa **dur**.
- `package.json` değiştiyse yeni bağımlılığın gerekçesi var mı? `package-lock.json` yalnızca bağımlılık değiştiyse commit'e girer.
- `node_modules/`, `dist/`, `.next/` gibi derleme çıktıları commit'e girmemeli (`.gitignore` engeller; görünürse dur).

## 6. Stage et: dosyaları tek tek

```text
git add <dosya-yolu-1>
git add <dosya-yolu-2>
```

- `git add .` ve `git add -A` **yasak**.
- Sonra kontrol et: `git diff --cached --stat`. Listede görevle ilgisiz dosya varsa `git reset <dosya>` ile çıkar.

## 7. Commit

```text
git commit -m "<önek>: <ne yapıldı, kısa ve net>"
```

- Önekler: `feat:`, `fix:`, `docs:`, `chore:`, `test:`, `data:`.
- Mesaj İngilizce, emir kipinde, tek satır, 72 karakter altında: `feat: add design tokens and base layout`.
- Araç commit'e kendi yazar/ortak yazar satırını ekliyorsa kalsın.
- Birden fazla ayrı mantıksal değişiklik varsa ayrı commit'lere böl.

## 8. Push

```text
git push --set-upstream origin <branch-adı>
```

(Bu branch daha önce push edildiyse sadece `git push`.)

- **Asla** `--force` kullanma. `--force-with-lease` yalnızca kendi feature branch'inde, rebase sonrası ve ancak gerekli olduğunda.
- Kimlik doğrulama hatası (`could not read Username`, `Authentication failed`): **dur**, kullanıcıya `gh auth login` komutunu çalıştırmasını söyle.
- Push reddedilirse (`rejected`, `fetch first`):
  1. `git fetch`
  2. `git rebase origin/main`
  3. Çakışma çıkarsa `git rebase --abort` ve kullanıcıya bildir; çakışmayı kendi başına çözme.
  4. Temiz geçerse yeniden push et.

## 9. Pull request

- Merge **etme**, branch silme.
- `gh` kuruluysa: `gh pr create --base main --fill`. Kurulu değilse push çıktısındaki veya şu adresteki linki ver: `https://github.com/plusotoyol/plusotoyol/pull/new/<branch-adı>`
- PR açıklamasında kök `.github/PULL_REQUEST_TEMPLATE.md` kontrol listesini doldur. `docs/contracts/` veya `docs/architecture/` değiştiyse "diğer kişinin onayı gerekir" diye belirt.

## 10. Rapor et

İşin sonunda kullanıcıya şunu yaz:

```text
Branch: <ad>
Commit: <kısa hash> <mesaj>
Değişen dosyalar: <liste>
Doğrulama: lint ✓/✗, typecheck ✓/✗, test ✓/✗, format ✓/✗
PR linki: <link>
Riskler / notlar: <varsa>
```

Başarısız olan veya atlanan her adımı açıkça söyle; "çalıştı" deme, çalıştırmadıysan "çalıştırmadım" de.
