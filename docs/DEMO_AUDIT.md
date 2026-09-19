# Demo quality review — 19 September 2026

Scope: the static Ad Workspace demonstration. This is an engineering review, not WCAG certification, a penetration test, or a claim of compliance with all industry standards.

## Changes

- Added validation of persisted operations records, known roles/accounts, numeric bounds, allowed states and collection limits. Invalid records fall back to sample defaults.
- Tightened campaign budget/account validation and operational form handling.
- Restricted account connections and network settings to the administrator preview role; viewer mutations are blocked. Client-side restrictions remain demonstrative only.
- Prevented repeated media submissions while validation runs; cancellation releases the temporary file URL. Failed validation leaves the form usable.
- Added named/described dialogs, keyboard-accessible scrollable tables, column scopes, contextual account-action labels and decorative-icon hiding.
- Restored focus after filters redraw and dialogs close; added a mobile navigation focus loop and Escape return.
- Improved secondary-text colours, visible focus and target sizing, narrow-screen reflow and reduced-motion handling.
- Added a Content Security Policy in HTML and Render header configuration. No inline JavaScript is permitted. Inline CSS remains allowed because the existing views use style attributes.
- Restricted service-worker caching to known static files without query strings. Arbitrary same-origin responses are no longer cached.

## Verification performed

- `node tests/validation.cjs`: 17 passing checks covering malformed state, bounds, unknown roles/accounts, orphan groups, invalid ad/health states and valid approvals/schedules.
- JavaScript syntax checks: passed for all scripts.
- Nine views checked at 320 CSS pixels: no page-level horizontal overflow; no unlabelled form fields detected in the main views. Wide data tables scroll within their regions.
- Browser console: no errors during the nine-view pass.
- Viewer adding a member: blocked with feedback.
- Campaign status filter: focus and pressed state preserved after redraw.
- Campaign dialog: accessible name/description present; Escape closes it and returns focus to Create campaign.
- Mobile menu: focus enters navigation; Escape closes it and returns focus to the toggle.

## Remaining verification and production dependencies

- Full WCAG 2.2 AA conformance has NOT been established. A complete assistive-technology, contrast-in-every-state, zoom, media-caption and cross-browser audit remains necessary. User-uploaded media can lack captions or meaningful alternative descriptions.
- PWA installation/offline/update behaviour needs testing on actual supported iOS, Android and desktop browsers. A manifest/service worker does not establish universal PWA support.
- Render headers in `render.yaml` must be applied through a Blueprint or equivalent dashboard configuration. Committing this file does not prove an existing Render service applies them. Verify deployed response headers separately.
- Real authentication, server-side account isolation, MFA, encrypted token storage, audit integrity, live API/VPN connections, background scheduling, backups and monitoring are not implemented by this demo.
- Team account assignments and role selection remain a walkthrough, not a security boundary. Enter fictional data only; browser session storage is not a secure credential store.
- No load testing, independent penetration testing or legal/privacy certification was performed. No percentage-compliance claim is made.

References: https://www.w3.org/TR/WCAG22/ ; https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html
