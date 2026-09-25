import { useEffect } from 'react';

export default function SEO({ title, description }) {
  useEffect(() => {
    document.title = title;
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) descriptionTag.setAttribute('content', description);

    const metadata = {
      'og:title': title,
      'og:description': description,
      'twitter:title': title,
      'twitter:description': description
    };

    Object.entries(metadata).forEach(([name, content]) => {
      const selector = `meta[property="${name}"], meta[name="${name}"]`;
      const tag = document.querySelector(selector);
      if (tag) tag.setAttribute('content', content);
    });
  }, [title, description]);

  return null;
}
