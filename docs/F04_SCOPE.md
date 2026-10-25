# F04 — Guest invitation, RSVP & Pass experience

Status: **Implementation in progress; not accepted.**

## Scope
- Accountless invitation presentation, with clear host, event, date, location and named guest.
- RSVP interaction, including accept and decline preview states.
- Digital Pass presentation and explicit non-admission state.
- Responsive and accessible guest-facing pages.
- Backend-ready integration contract to be completed before acceptance.

## Locked safeguards
- Guest invitation links are high-entropy, revocable bearer credentials; the current preview generates **none**.
- RSVP does not automatically change admission allocations.
- Pass issuance requires server-authoritative, capacity-aware allocation; the current preview generates **no QR**.
- Gate verification must be atomic, online, single-use and fail-closed; not implemented in F04.
- No sharing, delivery, identity proof, or persistence is claimed.

## Acceptance remaining
- Automated browser tests of invitation, response and pass states.
- Responsive and accessibility review on mobile and desktop.
- Typecheck, lint, production build and route smoke tests.
- Typed service contracts for backend integration and error states.
