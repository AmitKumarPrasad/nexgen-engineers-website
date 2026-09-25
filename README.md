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

## Production analytics and monitoring
Analytics and error monitoring are optional and environment-controlled:

- `VITE_GA_MEASUREMENT_ID` enables Google Analytics page-view tracking in production.
- `VITE_MONITORING_ENDPOINT` enables browser error reporting to a server-side monitoring endpoint.
- Neither variable is required for local development.
- Never place private API keys or secrets in `VITE_` variables because Vite exposes them to the browser bundle.

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
