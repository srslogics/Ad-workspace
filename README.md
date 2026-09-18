# Ad Workspace by SRS Logics

A static, responsive advertising management PWA demonstration. All accounts, metrics, campaigns, creative concepts, publishing actions and outbound routes are illustrative. No advertising APIs, VPNs or credentials are connected.

Six views: Overview, Campaigns, Ad accounts, Creative library, Network profiles and Reports. Create drafts, review and simulate publishing, pause/resume, edit budgets, keywords/audiences and schedules, configure sample network assignments, and export CSV reports. State is saved in session storage for the current browser tab. Reset restores the original sample workspace.

Serve `dist` through an HTTP server. The application uses hash navigation. The manifest and service worker support PWA installation on compatible browsers and offline demo assets; Google Fonts require a connection. Real publishing and scheduling are not implemented.

## Login and VPN walkthrough

The entry screen is a presentation-only login gate. Use `demo@example.com` / `DemoAccess!`, select an illustrative network profile, and run the simulated connection check. The unavailable-connection option keeps the sample workspace hidden until a successful retry. Sign out clears the in-memory demo session; reload requires signing in again. No password is saved or transmitted, and no real authentication, VPN, proxy or IP change occurs. This frontend gate must not be used to protect real data. Production login and gateway verification require server-side implementation.

## Client walkthrough

The refined demo includes a client portfolio selector, performance chart with revenue/spend switching, channel mix, a three-step campaign builder with creative review, draft duplication, approval simulation and a session activity history. CSV exports follow the selected portfolio. Mobile navigation, keyboard focus and reduced-motion preferences are supported.

Suggested presentation: sign in → simulate the network check → review portfolio performance → create a campaign → preview creative and budget → send for review → simulate approval → export a report. Use Reset sample data before presenting.

## Render

Create a Static Site connected to this repository. Use the `main` branch, leave Root Directory empty, set Build Command to `echo "Static demo ready"`, and Publish Directory to `dist`. No environment variables or server are needed for the demonstration.

## Simulated account authorization

Ad accounts → Connect account provides an interactive authorization walkthrough for Meta, Google, LinkedIn and TikTok. Review illustrative permissions, approve or decline, select existing sample accounts, and see the connected-demo status. Manage account allows disconnecting. Connection status persists in the current tab and Reset sample data clears it. This is not a provider login screen, does not request passwords or tokens, and makes no provider API calls. Other listed platforms retain explanatory previews. Permission selection illustrates the authorization contract; it does not restrict the separate sample campaign sandbox.

## Extended demo workflows

Team & access includes sample members, account assignments and a role preview. Role controls limit demo mutations; member account assignments are illustrative and do not isolate the shared sample dataset. Campaign details include editable ad sets/groups and ads, with a simulated approval state. Creative library accepts local JPG/PNG/WebP/MP4 files up to 20 MB, checks media readability and dimensions, and allows assigning the filename to a sample ad. Media stays local and clears on reload.

Budget changes enter a queue; a different preview role must approve them. Settings controls the sample-spend alert threshold. Reports offers three deterministic sample date ranges and local schedules with pause/resume; no email is sent. Account health supports simulated expiration, sync failure and retry; expired connections must complete the existing connection walkthrough before retrying. Reset sample data clears these additions. These are presentation workflows, not production authorization, background jobs or platform-specific validation.
