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

`vercel.json` provides the SPA fallback and baseline response headers.

### Netlify

Connect the GitHub repository and use:

- Build command: `npm run build`
- Publish directory: `dist`

`public/_redirects` provides the React Router fallback.

## Production verification

After deployment, verify:

1. Home, About, Services, Technologies, Portfolio and Contact load directly.
2. `/privacy` and `/terms` load directly.
3. An unknown URL displays the 404 page.
4. Browser refresh works on nested routes.
5. Contact form opens the configured email client with encoded project details.
6. Production build completes successfully with `npm run build`.

## Environment variables

The current website does not require client-side environment variables. Keep future secrets out of the frontend bundle; server-side integrations should be added through a backend or serverless function.
