# Launch Checklist

## Pre-deployment
- [ ] Confirm production domain points to the hosting provider.
- [ ] Configure build command: `npm run build`.
- [ ] Configure output directory: `dist`.
- [ ] Configure optional `VITE_CONTACT_ENDPOINT`.
- [ ] Configure optional `VITE_GA_MEASUREMENT_ID`.
- [ ] Configure optional `VITE_MONITORING_ENDPOINT`.
- [ ] Keep secrets out of all `VITE_` variables.

## Production smoke test
- [ ] Home loads.
- [ ] All primary navigation routes load directly.
- [ ] Privacy and Terms load directly.
- [ ] Unknown route displays 404.
- [ ] Browser refresh works on nested routes.
- [ ] Contact form works and mailto fallback works when no API endpoint is configured.
- [ ] `/robots.txt` loads.
- [ ] `/sitemap.xml` loads.
- [ ] `/health.txt` loads.
- [ ] HTTPS is active.
- [ ] Security response headers are present.
- [ ] Mobile and desktop layouts are usable.
- [ ] Production analytics/monitoring work if enabled.

## SEO
- [ ] Verify canonical URLs use `https://nexgenengineers.com`.
- [ ] Submit `https://nexgenengineers.com/sitemap.xml` to Google Search Console.
- [ ] Confirm the preferred domain and indexing settings.

## Rollback
If a deployment fails, redeploy the last known-good production deployment from the hosting provider and investigate the failing commit before retrying.
