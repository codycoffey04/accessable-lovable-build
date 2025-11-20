// Schema.org JSON-LD generators for SEO

interface BreadcrumbItem {
  name: string;
  url: string;
}

export const generateBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const generateProductSchema = (product: any) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: product.node.title,
  image: product.node.images.edges.map((img: any) => img.node.url),
  description: product.node.description,
  sku: product.node.variants.edges[0]?.node.id || '',
  brand: {
    '@type': 'Brand',
    name: 'AccessAble',
  },
  offers: {
    '@type': 'Offer',
    price: product.node.priceRange.minVariantPrice.amount,
    priceCurrency: product.node.priceRange.minVariantPrice.currencyCode,
    availability: product.node.variants.edges[0]?.node.availableForSale
      ? 'https://schema.org/InStock'
      : 'https://schema.org/OutOfStock',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    reviewCount: '500',
  },
});

interface FAQ {
  question: string;
  answer: string;
}

export const generateFAQSchema = (faqs: FAQ[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

interface Article {
  headline: string;
  author?: string;
  datePublished: string;
  image: string;
  description: string;
}

export const generateArticleSchema = (article: Article) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.headline,
  author: {
    '@type': 'Person',
    name: article.author || 'AccessAble Team',
  },
  datePublished: article.datePublished,
  image: article.image,
  description: article.description,
  publisher: {
    '@type': 'Organization',
    name: 'AccessAble',
    logo: {
      '@type': 'ImageObject',
      url: `${window.location.origin}/images/logo-main.jpeg`,
    },
  },
});

export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AccessAble',
  url: 'https://accessable.com',
  logo: `${window.location.origin}/images/logo-main.jpeg`,
  sameAs: [
    'https://facebook.com/accessible',
    'https://instagram.com/accessible',
    'https://twitter.com/accessible',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-800-XXX-XXXX',
    contactType: 'customer service',
    availableLanguage: 'en',
  },
});

interface Video {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string;
  contentUrl?: string;
}

export const generateVideoSchema = (video: Video) => ({
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: video.name,
  description: video.description,
  thumbnailUrl: video.thumbnailUrl,
  uploadDate: video.uploadDate,
  duration: video.duration,
  contentUrl: video.contentUrl,
});

interface Collection {
  name: string;
  description: string;
  url: string;
}

export const generateCollectionSchema = (collection: Collection) => ({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: collection.name,
  description: collection.description,
  url: collection.url,
});

export const generateBlogSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'AccessAble Learn Hub',
  description: 'Expert guides for independent living, mobility, compression, and everyday comfort.',
  url: `${window.location.origin}/learn`,
  publisher: {
    '@type': 'Organization',
    name: 'AccessAble',
    logo: {
      '@type': 'ImageObject',
      url: 'https://accessable.com/logo.png',
    },
  },
  blogPost: [], // Can be populated with individual article schemas if needed
});

export const generateAboutPageSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About AccessAble',
  description: 'Purpose-built compression and mobility aids designed for independence, dignity, and real-world use.',
  url: `${window.location.origin}/about`,
  mainEntity: {
    '@type': 'Organization',
    name: 'AccessAble',
    url: 'https://accessable.com',
    logo: `${window.location.origin}/images/logo-main.jpeg`,
  },
});
