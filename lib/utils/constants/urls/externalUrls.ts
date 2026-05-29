import { type ExternalURL } from '@/lib/types/interfaces'

export const EXTERNAL_URL: ExternalURL = {
  gitHub: 'https://github.com/krsiakdaniel/portfolio-website-krsiak-cz',
  linkedIn: 'https://www.linkedin.com/in/krsiakdaniel/',
  uptimeMonitorStatus: 'https://status.krsiak.cz',
  uptimeMonitorStatusExternal: 'https://krsiak.betteruptime.com/',
  graceChurch: 'https://www.gracechurch.org/about/gospel',
  bonyToBeastly: 'https://bonytobeastly.com/about',
} as const satisfies ExternalURL
