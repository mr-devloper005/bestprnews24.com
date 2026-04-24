export const siteTaskDefinitions = [
  {
    key: 'mediaDistribution',
    label: 'Latest News',
    route: '/updates',
    description: 'Press releases, company announcements, and newsroom coverage.',
    contentType: 'mediaDistribution',
    enabled: true,
  },
] as const

export const siteTaskViews = {
  mediaDistribution: '/updates',
} as const
