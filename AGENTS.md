# PLUS OTOYOL — AI DEVELOPMENT RULES

## General

- Existing architecture must be preserved.
- Do not create unnecessary files.
- Do not delete existing files without explicit approval.
- Do not modify unrelated files.
- Do not introduce dependencies without justification.
- Do not expose secrets or API keys.
- TypeScript strict mode is required.
- Keep frontend and backend responsibilities separated.

## Frontend

- Follow the existing component architecture.
- Reuse existing components.
- Do not create duplicate UI components.
- Keep page-specific logic inside the relevant feature.
- Do not modify backend code when working on frontend pages unless explicitly required.
- Maintain consistent design language.

## Backend

- Controllers must remain thin.
- Business logic belongs in services and algorithms.
- Database access must follow the database architecture.
- External data must be validated before being stored.
- Critical algorithms require tests.
- Do not put business logic directly inside route definitions.

## Data

- Never invent real-world data.
- Every critical external data item must have a source.
- Preserve source information.
- Preserve update dates.
- Raw data must remain separate from processed data.
- Official data sources should be preferred for official information.
- Historical tariff/data versions must not be unnecessarily overwritten.

## AI Workflow

1. Inspect the existing architecture before making changes.
2. Identify the files relevant to the requested task.
3. Explain the planned changes when the task is complex.
4. Modify only the required scope.
5. Do not rewrite unrelated files.
6. Run appropriate validation after implementation.
7. Report changed files.
8. Report potential risks.
9. Do not introduce unnecessary dependencies.
10. Do not change architecture without explicit approval.

## Git Workflow (automatic commit and push)

When a task is finished and validation passes, the agent commits and pushes without being asked again. The pull request is the human review gate.

- Work only on a feature branch (`feature/...`, `chore/...`, `docs/...`, `data/...`). Never commit or push to `main` or `develop`. If the current branch is `main`, create a branch first.
- One task = one branch = one pull request. Do not mix unrelated changes.
- Run lint, type-check and the relevant tests before committing. If they fail, do not commit; report the failure.
- Stage files explicitly by path. Never use `git add .` or `git add -A`.
- Before committing, review the staged diff. Do not commit `.env` files, keys, tokens, passwords or files outside the task scope. If anything suspicious is staged, stop and report it.
- Commit messages use a prefix: `feat:`, `fix:`, `docs:`, `chore:`, `test:`, `data:`.
- Push the branch with `git push --set-upstream origin <branch>`. Never use `--force`; `--force-with-lease` only on the agent's own feature branch and only after a rebase.
- Do not merge pull requests, delete branches, rewrite history on shared branches, or change git configuration.
- After pushing, report the branch name, the commit hash, the changed files, the validation results and the link to open a pull request.
- Changes to `docs/contracts/`, `docs/architecture/` and `AGENTS.md` still need approval from both Burak and Ömer in the pull request.

## Scoped Vibe Coding

Each AI session should have a clearly defined responsibility.

Examples:

- One page design.
- One component.
- One service.
- One algorithm.
- One data importer.
- One API endpoint group.

Do not treat the entire project as one implementation task.

## Human Approval

Architecture, business rules, data models, legal requirements and major technical decisions require human approval.

AI assists with implementation but does not independently redefine the project architecture.
