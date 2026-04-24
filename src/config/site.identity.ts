export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || '00y43amk68',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'bestprnews24.com',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Media Press Release Distribution',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'Launch press releases, news coverage, and media stories with distribution-focused publishing built for modern brands.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'bestprnews24.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://bestprnews24.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || '',
} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/placeholder.svg?height=80&width=80',
} as const
