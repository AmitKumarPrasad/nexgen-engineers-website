import { useEffect } from 'react';

const siteUrl = 'https://nexgenengineers.com';

export default function SEO({ title, description }) {
  useEffect(() => {
    document.title = title;

    const canonicalUrl = `${siteUrl}${window.location.pathname}`;
    const metadata = {
      description: { selector: 'meta[name="description"]', value: description },
      'og:title': { selector: 'meta[property="og:title"]', value: title },
      'og:description': { selector: 'meta[property="og:description"]', value: description },
      'og:url': { selector: 'meta[property="og:url"]', value: canonicalUrl },
      'twitter:title': { selector: 'meta[name="twitter:title"]', value: title },
      'twitter:description': { selector: 'meta[name="twitter:description"]', value: description },
    };

    Object.values(metadata).forEach(({ selector, value }) => {
      const tag = document.querySelector(selector);
      if (tag) tag.setAttribute('content', value);
    });

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', canonicalUrl);
  }, [title, description]);

  return null;
}
