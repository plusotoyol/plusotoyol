# Katkı Rehberi

Ayrıntılı kurallar için [PLUS-OTOYOL-PROJE-REHBERI.md](PLUS-OTOYOL-PROJE-REHBERI.md) ve [AGENTS.md](AGENTS.md) dosyalarına bakın. Bu sayfa kısa özettir.

## Kurulum

```bash
nvm use            # Node 24 (.nvmrc)
npm install        # kökten, iki workspace'i de kurar
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env.local
```

## Komutlar

| Komut | Ne yapar |
|---|---|
| `npm run dev:frontend` | Next.js geliştirme sunucusu |
| `npm run dev:backend` | Backend geliştirme sunucusu |
| `npm run lint` | ESLint (her iki workspace) |
| `npm run typecheck` | TypeScript strict kontrolü |
| `npm run test` | Testler |
| `npm run format:check` / `npm run format` | Prettier |

## Çalışma düzeni

- `main` üzerine doğrudan push yapılmaz; her iş için `feature/...` branch ve PR açılır.
- Klasör sahipliği [CODEOWNERS](.github/CODEOWNERS) dosyasındadır. Başkasının klasöründe değişiklik gerekiyorsa PR yorumu veya issue ile bildirin.
- `docs/contracts/` veya `docs/architecture/` değişikliği için diğer kişinin onayı gerekir.
- Commit mesajları: `feat:`, `fix:`, `docs:`, `chore:`, `test:` önekleriyle.
- Push öncesi `git status` ve `git diff` kontrol edilir; `.env` ve anahtarlar commit edilmez.
