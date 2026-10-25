# F03 — Studio frontend review
**Status: Expanded implementation committed to main. QA NOT COMPLETE.**

## Implemented local demonstration journeys
1. Create an event draft with name, date, and location.
2. View an overview, contextual next-step checklist, and local guest counts.
3. Edit event draft details; changes remain in browser memory.
4. Add, edit and remove guests; duplicate-email checks and confirmation before removal.
5. Paste a simple two-column CSV, review errors and import a maximum of 500 rows locally. Complex quoted CSV is explicitly unsupported.
6. Select a curated invitation concept and navigate to a separate live design preview.
7. Change illustrative RSVP statuses in the organizer demo to evaluate summaries. **These are NOT real guest-submitted responses.**
8. Inspect admission preparation with unavailable live operations and no fake QR credentials.

## Scope and integrity
- All state is in-memory; reload resets it.
- No authentication, authorization, persistent database, actual RSVP, invitation distribution, Gate verification, exports, retention enforcement, or audit log.
- The local demo must not imply a successful invitation send, confirmed delivery, or real guest admission.
- RSVP state and admission entitlements remain separate in the real product.
- The locked 45 decisions, privacy policy and luxury charter remain the authoritative requirements.
- MJT-FUT-001 photographer features remain excluded from MVP.

## Acceptance gates still required
- [ ] Install and run TypeScript checks, lint and production build
- [ ] Browser test create/edit/guest/CSV/RSVP flows and reload behavior
- [ ] Responsive testing at 375/768/1440px
- [ ] Accessibility: keyboard, screen reader, focus, contrast, reduced motion
- [ ] Full RFC-compliant CSV import, duplication policy and malicious data testing for production
- [ ] Final approved emblem, original/licensed assets and typography
- [ ] Real API contracts and backend security tests before production

**Conclusion:** This is an expanded, interactive F03 frontend prototype, not an accepted production-complete Studio.
