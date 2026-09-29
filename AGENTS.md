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
