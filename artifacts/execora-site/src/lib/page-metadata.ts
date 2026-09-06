import { useEffect } from 'react';
import seoConfig from '../../seo.config.json';

type PageMetadata = {
  title: string;
  description: string;
};

const siteUrl = seoConfig.siteUrl.replace(/\/+$/, '');
const socialImageUrl = `${siteUrl}${seoConfig.socialImagePath}`;

const metadataByPath: Record<string, PageMetadata> = {
  '/': {
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
  },
  '/about': {
    title: 'About Execora | Senior-led strategic consulting',
    description: 'Meet Execora, a senior-led strategic consulting partner for leadership teams navigating change, growth and important decisions.',
  },
  '/services': {
    title: 'Our Services | B2B, ITDM, HealthCare and B2C | G2G Research',
    description: 'Explore G2G Research services across B2B, ITDM, HealthCare and B2C market research and data collection.',
  },
  '/panel': {
    title: 'Our panel | Experienced operators and strategists | Execora',
    description: 'Meet the experienced operators, strategists and specialists who bring the right perspective to each Execora engagement.',
  },
  '/contact': {
    title: 'Contact Execora | Start a strategic conversation',
    description: 'Bring Execora the decision or change you are navigating and start a thoughtful conversation with our consulting team.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | G2G Research',
    description: 'Read the G2G Research privacy policy and learn how information is handled across our website and research services.',
  },
  '/terms-and-conditions': {
    title: 'Terms and Conditions | G2G Research',
    description: 'Read the terms and conditions for using the G2G Research website and engaging with its market research services.',
  },
};

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

function setCanonical(href: string) {
  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = href;
}

function setJsonLd(id: string, data: unknown) {
  let script = document.head.querySelector<HTMLScriptElement>(`script#${id}`);
  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

export function usePageMetadata(pathname: string) {
  useEffect(() => {
    const normalizedPath = pathname.split('?')[0].replace(/\/+$/, '') || '/';
    const isKnownRoute = Boolean(metadataByPath[normalizedPath]);
    const metadata = metadataByPath[normalizedPath] ?? {
      title: 'Page not found | Execora',
      description: 'The page you are looking for could not be found. Return to Execora to continue exploring.',
    };
    const canonicalUrl = `${siteUrl}${normalizedPath === '/' ? '/' : normalizedPath}`;
    const robots = isKnownRoute ? 'index, follow' : 'noindex, nofollow';

    document.title = metadata.title;
    setMeta('name', 'description', metadata.description);
    setMeta('name', 'robots', robots);
    setMeta('name', 'googlebot', isKnownRoute ? 'index, follow, max-image-preview:large' : 'noindex, nofollow');
    setMeta('property', 'og:site_name', seoConfig.siteName);
    setMeta('property', 'og:title', metadata.title);
    setMeta('property', 'og:description', metadata.description);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:image', socialImageUrl);
     setMeta('property', 'og:image:alt', `${seoConfig.siteName} — market research and data collection`);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', metadata.title);
    setMeta('name', 'twitter:description', metadata.description);
    setMeta('name', 'twitter:image', socialImageUrl);
     setMeta('name', 'twitter:image:alt', `${seoConfig.siteName} — market research and data collection`);
    setCanonical(canonicalUrl);
    setJsonLd('execora-page-schema', {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': canonicalUrl,
      url: canonicalUrl,
      name: metadata.title,
      description: metadata.description,
      isPartOf: { '@id': `${siteUrl}/#website` },
    });
  }, [pathname]);
}