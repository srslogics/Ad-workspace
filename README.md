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
