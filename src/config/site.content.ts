import type { TaskKey } from '@/lib/site-config'

export const siteContent = {
  navbar: {
    tagline: 'Global Press Distribution',
  },
  footer: {
    tagline: 'Newsroom-grade press release publishing and distribution',
  },
  hero: {
    badge: 'Latest updates',
    title: ['Clear publishing, simple reading, no extra noise.'],
    description:
      'A minimal article-style publishing template built for regular updates, announcements, and media distribution posts.',
    primaryCta: {
      label: 'Browse latest posts',
      href: '/updates',
    },
    secondaryCta: {
      label: 'Contact us',
      href: '/contact',
    },
    searchPlaceholder: 'Search posts',
    focusLabel: 'Latest',
    featureCardBadge: 'editor note',
    featureCardTitle: 'Recent updates appear directly on the homepage.',
    featureCardDescription:
      'The homepage works as a clean front page so new posts stay visible without decorative sections getting in the way.',
  },
  home: {
    metadata: {
      title: 'Press releases and latest business news',
      description:
        'Publish and read high-impact press releases, product launches, and media stories built for visibility and reach.',
      openGraphTitle: 'Press releases and latest business news',
      openGraphDescription:
        'A media-first platform for launch announcements, company updates, and distribution-ready stories.',
      keywords: ['press release distribution', 'latest business news', 'media publishing', 'company announcements'],
    },
    introBadge: 'About',
    introTitle: 'A media release platform built for trust and visibility.',
    introParagraphs: [
      'bestprnews24.com is designed for brands that need fast, credible, and highly readable distribution of official updates.',
      'The experience prioritizes impact-oriented page structure, strong social proof, and clear conversion pathways for submission.',
      'Every major section supports publishing confidence while keeping browsing and reading efficient.',
    ],
    sideBadge: 'What it prioritizes',
    sidePoints: [
      'Submission-first navigation with clear launch intent.',
      'High-contrast visual hierarchy for release discoverability.',
      'Credibility cues across testimonials, reviews, and trust badges.',
      'Fast scan layouts for latest news and detail pages.',
    ],
    primaryLink: {
      label: 'Open archive',
      href: '/updates',
    },
    secondaryLink: {
      label: 'Contact desk',
      href: '/contact',
    },
  },
  cta: {
    badge: 'Get in touch',
    title: 'Turn announcements into high-visibility media moments.',
    description:
      'Use bestprnews24.com to launch news, product stories, and strategic updates with confidence.',
    primaryCta: {
      label: 'Contact us',
      href: '/contact',
    },
    secondaryCta: {
      label: 'View archive',
      href: '/updates',
    },
  },
  taskSectionHeading: 'Latest releases',
  taskSectionDescriptionSuffix: 'Read newly published press releases and updates.',
} as const

export const taskPageMetadata: Record<Exclude<TaskKey, 'comment' | 'org' | 'social'>, { title: string; description: string }> = {
  article: {
    title: 'Articles',
    description: 'Read the latest posts and long-form updates.',
  },
  listing: {
    title: 'Listings',
    description: 'Explore listings and directory-style entries.',
  },
  classified: {
    title: 'Classifieds',
    description: 'Browse classifieds and short-form notices.',
  },
  image: {
    title: 'Images',
    description: 'Browse image-led updates and visual posts.',
  },
  profile: {
    title: 'Profiles',
    description: 'View profile pages and public identities.',
  },
  sbm: {
    title: 'Bookmarks',
    description: 'Browse curated resources and saved links.',
  },
  pdf: {
    title: 'Resources',
    description: 'Open PDFs and downloadable files.',
  },
  mediaDistribution: {
    title: 'Latest news',
    description: 'Browse recent press releases and media-ready updates.',
  },
}

export const taskIntroCopy: Record<
  TaskKey,
  { title: string; paragraphs: string[]; links: { label: string; href: string }[] }
> = {
  listing: { title: 'Listings', paragraphs: ['Directory entries and service pages.'], links: [{ label: 'Home', href: '/' }] },
  article: { title: 'Articles', paragraphs: ['General long-form article feed.'], links: [{ label: 'Home', href: '/' }] },
  classified: { title: 'Classifieds', paragraphs: ['Short-form posts and notices.'], links: [{ label: 'Home', href: '/' }] },
  image: { title: 'Images', paragraphs: ['Image-first posts and galleries.'], links: [{ label: 'Home', href: '/' }] },
  profile: { title: 'Profiles', paragraphs: ['Profile pages and identity surfaces.'], links: [{ label: 'Home', href: '/' }] },
  sbm: { title: 'Bookmarks', paragraphs: ['Curated saved links and references.'], links: [{ label: 'Home', href: '/' }] },
  pdf: { title: 'Resources', paragraphs: ['Downloadable files and documents.'], links: [{ label: 'Home', href: '/' }] },
  social: { title: 'Social', paragraphs: ['Short updates and activity.'], links: [{ label: 'Home', href: '/' }] },
  comment: { title: 'Comments', paragraphs: ['Commentary and response posts.'], links: [{ label: 'Home', href: '/' }] },
  org: { title: 'Organizations', paragraphs: ['Organization pages and entities.'], links: [{ label: 'Home', href: '/' }] },
  mediaDistribution: {
    title: 'Latest news',
    paragraphs: [
      'This archive is designed for release-first publishing: company announcements, launch stories, and media coverage in a clean scan-friendly layout.',
      'Use filters and search to quickly move from broad discovery to specific press stories while preserving reading comfort.',
    ],
    links: [
      { label: 'Home', href: '/' },
      { label: 'Contact', href: '/contact' },
    ],
  },
}
