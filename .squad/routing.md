# Work Routing

How to decide who handles what.

## Routing Table

| Work Type | Route To | Examples |
|-----------|----------|---------|
| Architecture, structure, decisions | Jerry | Page layout, section order, technology choices |
| HTML / CSS / JavaScript implementation | Trey | Building components, responsive layout, interactions |
| Site copy, messaging, domain content | Page | Hero text, service descriptions, value props, CTAs |
| Visual design, brand, UX | Fish | Color palette, typography, spacing, component look-and-feel |
| QA, testing, accessibility | Mike | Cross-browser checks, responsive testing, a11y audit |
| Code review, approval | Jerry | Review Trey's implementation before Mike tests |
| Final sign-off | Jerry | Architecture and quality gate before ship |
| Session logging | Scribe | Automatic — never needs routing |
| RAI review | Rai | Content safety, bias checks, credential detection, ethical review |

## Issue Routing

| Label | Action | Who |
|-------|--------|-----|
| `squad` | Triage: analyze issue, assign `squad:{member}` label | Jerry |
| `squad:jerry` | Architecture, review, decisions | Jerry |
| `squad:trey` | Frontend implementation | Trey |
| `squad:page` | Content and copy | Page |
| `squad:fish` | Design and UX | Fish |
| `squad:mike` | QA and testing | Mike |

## Rules

1. **Eager by default** — spawn all agents who could usefully start work, including anticipatory downstream work.
2. **Scribe always runs** after substantial work, always as `mode: "background"`. Never blocks.
3. **Quick facts → coordinator answers directly.** Don't spawn an agent for "what font does the site use?"
4. **When two agents could handle it**, pick the one whose domain is the primary concern.
5. **"Team, ..." → fan-out.** Spawn all relevant agents in parallel as `mode: "background"`.
6. **Anticipate downstream work.** If Trey is building a section, spawn Page to draft that section's copy simultaneously.
7. **No CDN rule** — any work touching external dependencies gets flagged; Trey must vendor locally or use system fonts.

