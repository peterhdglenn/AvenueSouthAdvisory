# Squad Decisions

## Active Decisions

### 2026-06-25: Project Stack
**By:** peterhdglenn (Peter) via Squad setup
**Decision:** Pure static HTML / CSS / JavaScript. No backend, no database, no CDN dependencies. All assets vendored or generated at build time. Everything ships with the repo.
**Rationale:** Simple, fast, secure, zero infrastructure cost for a single-page consulting site.

### 2026-06-25: Team Casting
**By:** peterhdglenn (Peter)
**Decision:** Squad members named after Phish (Trey, Page, Fish, Mike) with Jerry (Lead) named after Jerry Garcia per owner request.
**Rationale:** Owner preference. Names do not affect site professionalism.

### 2026-06-25: No External Fonts or Icons via CDN
**By:** Jerry (Lead)
**Decision:** Typography must use system font stack or fonts vendored locally in the repo. No Google Fonts CDN or similar external calls at runtime.
**Rationale:** Self-contained requirement; also improves page performance and privacy.

## Governance

- All meaningful architectural or content decisions must be recorded here
- Jerry records technical/structural decisions
- Page records content and messaging decisions
- Fish records design system decisions
- Scribe merges inbox entries here after each work session
- Keep history focused on work, decisions focused on direction
