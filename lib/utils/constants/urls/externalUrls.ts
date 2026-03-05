import { ExternalURL } from '@/lib/utils/typeDefinitions/interfaces'

export const EXTERNAL_URL: ExternalURL = {
  gitHub: 'https://github.com/krsiakdaniel/portfolio-website-krsiak-cz',
  linkedIn: 'https://www.linkedin.com/in/krsiakdaniel/',
  resumeViewPDF: 'https://drive.google.com/file/d/1OPlDjxqHdSYAGrEtnLusd1qRAf4PRvY3/view',
  resumeViewDOCX: 'https://docs.google.com/document/d/1wH4aG0Dyv7XJ_Ux2G07magO5b-sTuyv8',
  uptimeMonitorStatus: 'https://status.krsiak.cz',
  uptimeMonitorStatusExternal: 'https://krsiak.betteruptime.com/',
  graceChurch: 'https://www.gracechurch.org/about/gospel',
  bonyToBeastly: 'https://bonytobeastly.com/about',
} as const satisfies ExternalURL
