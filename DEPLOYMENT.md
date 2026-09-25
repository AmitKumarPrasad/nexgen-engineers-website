# Production Deployment

NexGen Engineers is a Vite single-page application. The production artifact is generated in `dist/`.

## Build

```bash
npm install
npm run build
```

## Deploy

The site can be deployed to any static host that supports SPA routing.

### Vercel

Connect the GitHub repository and use:

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

`vercel.json` provides the SPA fallback, caching and baseline security response headers.

### Netlify

Connect the GitHub repository and use:

- Build command: `npm run build`
- Publish directory: `dist`

`public/_redirects` provides the React Router fallback.

## Production analytics and monitoring

Optional environment variables can be configured in the hosting provider:

| Variable | Purpose |
| --- | --- |
| `VITE_GA_MEASUREMENT_ID` | Enables Google Analytics 4 page-view tracking in production. |
| `VITE_MONITORING_ENDPOINT` | Sends uncaught React render errors to a server-side monitoring endpoint. |

Analytics is not initialized during local development. Monitoring falls back to browser console reporting when no endpoint is configured.

Because `VITE_` values are public client-side configuration, do not store secrets in them. Use a backend/serverless endpoint for authenticated or sensitive monitoring integrations.

After enabling analytics, review the Privacy Policy and configure the analytics provider according to applicable privacy and consent requirements.

## Security headers

Vercel responses include:

- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `X-Frame-Options: SAMEORIGIN`
- `Permissions-Policy` disabling unused camera, microphone, geolocation and payment capabilities.
- `Cross-Origin-Opener-Policy: same-origin`

A Content Security Policy is intentionally not hard-coded yet because the optional Google Analytics integration and future third-party integrations require an explicit allowlist. Add a CSP after the production resource inventory is finalized and tested.

## SEO and crawlability

The production build publishes:

- `/robots.txt` with a public crawl policy.
- `/sitemap.xml` containing the canonical public routes.

The sitemap uses the production canonical domain `https://nexgenengineers.com`. Keep it synchronized when public routes are added or removed.

## Production verification

After deployment, verify:

1. Home, About, Services, Technologies, Portfolio and Contact load directly.
2. `/privacy` and `/terms` load directly.
3. An unknown URL displays the 404 page.
4. Browser refresh works on nested routes.
5. `/robots.txt` is reachable and references the sitemap.
6. `/sitemap.xml` is reachable and contains the intended canonical routes.
7. Contact form opens the configured email client with encoded project details.
8. Production build completes successfully with `npm run build`.
9. Security headers are present in the production response.
10. If analytics is configured, page-view events appear in the analytics provider.
11. If monitoring is configured, a controlled staging test confirms error delivery before production use.

## Environment variables

The website does not require client-side environment variables for its core functionality. Optional analytics/monitoring variables are documented above. Keep future secrets out of the frontend bundle; server-side integrations should be added through a backend or serverless function.