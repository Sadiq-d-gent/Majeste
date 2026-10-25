# F02 — Curated Collections & Invitation Personalization
**Status: Source implementation submitted for review. Not accepted until CI and browser QA pass.**

## Routes
- /collections — three curated collection previews
- /collections/sovereign — collection detail
- /collections/etoile — collection detail
- /collections/heritage — collection detail
- /collections/[slug]/personalize — live preview with constrained, approved composition variations

## Approved boundaries
- MJT-DEC-044: no drag-and-drop editor; curated templates with simple personalization and preview.
- Names, occasion, date, time, venue, guest name and a short message can be edited in the preview.
- Live preview is client-side state only. No account, persistence, guest list, invitation link, message delivery, or QR pass is created.
- Sample names and dates are fictional and explicitly described as illustrative.
- No pricing, photographer directory, reviews, or future modules added.

## Review gates still outstanding
- npm install, TypeScript check, lint and production build
- mobile/tablet/desktop visual QA and overflow checks
- keyboard, screen-reader, contrast and reduced-motion audit
- real approved brand emblem and original/licensed editorial assets
- template review by product owner; date and localization formatting before real distribution
- Studio integration and backend data contracts in later phases

The current work is an interactive frontend concept, not a deployable invitation service.
