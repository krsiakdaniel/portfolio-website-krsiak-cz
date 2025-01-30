import { MetadataRoute } from 'next'

// URLs
const BASE_URL = 'https://krsiak.cz'
const WORK_EXPERIENCE = `${BASE_URL}/work-experience`
const PERSONAL_PROJECTS = `${BASE_URL}/personal-projects`

export const URLS = {
  HOME: BASE_URL,
  RESUME: `${BASE_URL}/resume`,
  WORK_EXPERIENCE: {
    OVERVIEW_PAGE: `${WORK_EXPERIENCE}`,
    SMARTSUPP_DASHBOARD: `${WORK_EXPERIENCE}/smartsupp-dashboard`,
    KOOPERATIVA: `${WORK_EXPERIENCE}/kooperativa`,
    KOMERCNI_BANKA: `${WORK_EXPERIENCE}/komercni-banka`,
    SMARTSUPP_WEB: `${WORK_EXPERIENCE}/smartsupp-web`,
    SMARTSUPP_HELP: `${WORK_EXPERIENCE}/smartsupp-help`,
    GROUPON: `${WORK_EXPERIENCE}/groupon`,
    MORAVIA: `${WORK_EXPERIENCE}/moravia`,
  },
  PERSONAL_PROJECTS: {
    OVERVIEW_PAGE: `${PERSONAL_PROJECTS}`,
    KRSIAK: `${PERSONAL_PROJECTS}/krsiak`,
    CRYPTOMANIA: `${PERSONAL_PROJECTS}/cryptomania`,
  },
  TESTIMONIALS: `${BASE_URL}/testimonials`,
  STATUS: `${BASE_URL}/status`,
  STATUS_MONITOR: 'https://status.krsiak.cz/',
}

// change frequency
export const CHANGE_FREQUENCY_MONTHLY = 'monthly'

const sitemapEntries = [
  { url: URLS.HOME, priority: 1 },
  { url: URLS.RESUME, priority: 0.8 },
  { url: URLS.WORK_EXPERIENCE.OVERVIEW_PAGE, priority: 0.8 },
  { url: URLS.WORK_EXPERIENCE.SMARTSUPP_DASHBOARD, priority: 0.8 },
  { url: URLS.WORK_EXPERIENCE.KOOPERATIVA, priority: 0.8 },
  { url: URLS.WORK_EXPERIENCE.KOMERCNI_BANKA, priority: 0.8 },
  { url: URLS.WORK_EXPERIENCE.SMARTSUPP_WEB, priority: 0.8 },
  { url: URLS.WORK_EXPERIENCE.SMARTSUPP_HELP, priority: 0.8 },
  { url: URLS.WORK_EXPERIENCE.GROUPON, priority: 0.8 },
  { url: URLS.WORK_EXPERIENCE.MORAVIA, priority: 0.8 },
  { url: URLS.PERSONAL_PROJECTS.OVERVIEW_PAGE, priority: 0.8 },
  { url: URLS.PERSONAL_PROJECTS.KRSIAK, priority: 0.8 },
  { url: URLS.PERSONAL_PROJECTS.CRYPTOMANIA, priority: 0.8 },
  { url: URLS.TESTIMONIALS, priority: 0.4 },
  { url: URLS.STATUS, priority: 0.2 },
  { url: URLS.STATUS_MONITOR, priority: 0.2 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapEntries.map((entry) => ({
    url: entry.url,
    lastModified: new Date(),
    changeFrequency: CHANGE_FREQUENCY_MONTHLY,
    priority: entry.priority,
  }))
}
