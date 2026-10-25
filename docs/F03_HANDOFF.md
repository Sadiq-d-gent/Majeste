# F03 — Studio foundation
**Status: Implemented in source; pending automated and visual QA.**

## Delivered
- Separate organizer workspace and mobile-responsive navigation
- Progressive event draft with only name, date and location
- Overview and step-by-step setup checklist
- Guest add/edit/delete in in-memory React state, duplicate email warning
- Simple CSV paste/preview with row validation and 500-row preview limit
- Curated invitation concept selection and navigation to live design preview
- RSVP overview and explicit unavailable admission preparation screen
- Honest demo banners and disabled actions where real services do not exist

## Non-negotiable limitations
- In-memory only: reload resets all data; no authentication or authorization, persistence, real RSVP, invitations, email, pass or Gate.
- CSV parser is deliberately restricted to simple comma-separated lines; it is NOT a production CSV importer. Full RFC-compliant parsing, safe export, formula-injection protection and security tests remain required.
- No live admission allocation or credential is generated.
- Backend must implement all 45 locked decisions, including least privilege, atomic capacity, cancellation, retention, recovery, and fail-closed Gate.

## Pending acceptance
- TypeScript, ESLint, Next production build and GitHub CI
- Browser interactions and responsive/keyboard/screen-reader QA
- Product and visual review against approved brand assets
- Full Studio coverage and backend handoff contracts

F03 is an initial implementation, **not the entire complete Studio milestone**.
