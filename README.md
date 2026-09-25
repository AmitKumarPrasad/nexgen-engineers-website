# NexGen Engineers Website

Modern company website built with React, Vite and Bootstrap 5.

## Development
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
```

## CI
Every push and pull request targeting `main` runs the production build through GitHub Actions.

## Production analytics, monitoring and contact API
Analytics, error monitoring and the optional contact API are environment-controlled:

- `VITE_GA_MEASUREMENT_ID` enables Google Analytics page-view tracking in production.
- `VITE_MONITORING_ENDPOINT` enables browser error reporting to a server-side monitoring endpoint.
- `VITE_CONTACT_ENDPOINT` enables JSON POST submission to the production contact service.
- Neither variable is required for local development.
- If `VITE_CONTACT_ENDPOINT` is not configured or the endpoint fails, the contact form falls back to the user's email client.
- The contact endpoint should validate input, apply rate limiting and spam protection, and send/store enquiries server-side.
- Never place private API keys or secrets in `VITE_` variables because Vite exposes them to the browser bundle.

Expected contact API payload:
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "service": "Custom Software",
  "timeline": "1–3 months",
  "details": "Project requirements...",
  "source": "nexgen-engineers-website"
}
```

## Website sections
- Home
- About
- Services
- Technologies
- Portfolio
- Contact
- Privacy Policy
- Terms of Use
- 404 fallback

## Stack
React 19 • Vite • Bootstrap 5 • Bootstrap Icons • React Router
