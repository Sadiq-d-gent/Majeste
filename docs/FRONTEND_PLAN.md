# MAJESTÉ — Frontend execution plan
**Status:** Proposed implementation sequence; 45 product decisions remain closed.

## Quality bar
Luxury should be communicated through disciplined visual craft, not feature density: exceptional typography, generous whitespace, calibrated motion, realistic editorial composition, high-quality original/appropriately licensed imagery, mobile-first performance, keyboard access, reduced-motion support, and WCAG 2.2 AA-oriented interaction patterns.

## Technical foundation
- Next.js App Router + TypeScript strict mode.
- Modular UI domains: `marketing`, `collections`, `studio`, `invitations`, `rsvp`, `pass`, `gate`, `admin`.
- Design tokens, shared accessible primitives, responsive shell, error/empty/loading states, test fixtures, typed API boundary.
- A **clearly marked demo mode** for frontend evaluation. Mocked scans must never appear as authoritative admissions.
- Automated lint/type checks, component tests, browser journey tests, and visual QA at mobile/tablet/desktop sizes.
- No backend credentials or real guest information in the frontend fixtures.

## Sequence and acceptance gates
### F00 — Documentation & experience architecture
Read all 18 PDFs and 45 decisions; create route inventory, UX flows, content/asset register, risk and source-precedence register. Reconcile the difference between approved policy and unresolved engineering contracts.

### F01 — Brand foundation and public website
Typography, tokens, navigation, motion system, landing, brand story, private inquiry, Journal previews with clearly labeled conceptual content. Visual review and responsive/a11y pass.

### F02 — Collections & invitation showcase
Curated template browsing, detail/preview, approved variations, event and guest personalization, no drag-and-drop editor.

### F03 — Studio essentials
Demo auth boundary; organizer overview, fast event draft creation (name/date/location), progressive checklist, guest CRUD and CSV import preview, RSVP and admission summaries, contextual settings.

### F04 — Guest-facing journey
Secure-link UI simulation, invitation reveal, RSVP submission/revision, per-entitlement pass view, sharing affordances and explicit simulated delivery labels.

### F05 — Gate and event operations
Assigned-attendant UI simulation, scan camera/manual fallback UI, clear Granted/Rejected/Unavailable presentation, entry history, revoke/reissue and recovery views for authorized personas. **No mock result may be labeled as verified real admission.**

### F06 — Cohesion and release candidate
Complete route coverage, transitions, empty/loading/error/offline states, accessibility audit, performance budget, visual regression, E2E journeys, documentation update, and staged preview deployment.

## Explicitly out of MVP
Photographer directory/gallery/reviews (MJT-FUT-001), Venues, complex team/admin screens, full design editor, native mobile, real payments, offline QR success, complex integrated messaging.

## Non-negotiable backend handoff
Real Gate redemption is server-authoritative, event-scoped, atomic, single-use, idempotent and fails closed. Frontend cannot guarantee these properties. Authorization, retention, privacy deletion, audit, token secrecy, and delivery evidence must be enforced in backend contracts and verified independently.

## Delivery discipline
Each phase: implement → lint/typecheck → test → responsive/keyboard review → reviewable commit → report limitations. Main receives only reviewed milestones; do not silently claim unrun tests passed.
