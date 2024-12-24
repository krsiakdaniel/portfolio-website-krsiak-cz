import { MetadataRoute } from 'next'

// URLs
const BASE_URL = 'https://krsiak.cz'
const WORK_EXPERIENCE = '/work-experience'
const PERSONAL_PROJECTS = '/personal-projects'

export const URLS = {
  BASE: BASE_URL,
  ABOUT_ME: `${BASE_URL}/about-me`,
  RESUME: `${BASE_URL}/resume`,
  WORK_EXPERIENCE_OVERVIEW: `${BASE_URL}${WORK_EXPERIENCE}`,
  PERSONAL_PROJECTS_OVERVIEW: `${BASE_URL}${PERSONAL_PROJECTS}`,
  STATUS_PAGE: `${BASE_URL}/status-page`,
  WORK_EXPERIENCE: {
    SMARTSUPP_DASHBOARD: `${BASE_URL}${WORK_EXPERIENCE}/smartsupp-dashboard`,
    KOMERCNI_BANKA: `${BASE_URL}${WORK_EXPERIENCE}/komercni-banka`,
    SMARTSUPP_WEB: `${BASE_URL}${WORK_EXPERIENCE}/smartsupp-web`,
    SMARTSUPP_HELP: `${BASE_URL}${WORK_EXPERIENCE}/smartsupp-help`,
    GROUPON: `${BASE_URL}${WORK_EXPERIENCE}/groupon`,
    MORAVIA: `${BASE_URL}${WORK_EXPERIENCE}/moravia`,
    KOOPERATIVA: `${BASE_URL}${WORK_EXPERIENCE}/kooperativa`,
  },
  PERSONAL_PROJECTS: {
    KRSIAK: `${BASE_URL}${PERSONAL_PROJECTS}/krsiak`,
    CRYPTOMANIA: `${BASE_URL}${PERSONAL_PROJECTS}/cryptomania`,
  },
}

// change frequency
export const CHANGE_FREQUENCY_MONTHLY = 'monthly'

const sitemapEntries = [
  { url: URLS.BASE, priority: 1 },
  { url: URLS.ABOUT_ME, priority: 0.8 },
  { url: URLS.RESUME, priority: 0.8 },
  { url: URLS.WORK_EXPERIENCE_OVERVIEW, priority: 0.8 },
  { url: URLS.PERSONAL_PROJECTS_OVERVIEW, priority: 0.8 },
  { url: URLS.WORK_EXPERIENCE.SMARTSUPP_DASHBOARD, priority: 0.8 },
  { url: URLS.WORK_EXPERIENCE.KOMERCNI_BANKA, priority: 0.8 },
  { url: URLS.WORK_EXPERIENCE.SMARTSUPP_WEB, priority: 0.8 },
  { url: URLS.WORK_EXPERIENCE.SMARTSUPP_HELP, priority: 0.8 },
  { url: URLS.WORK_EXPERIENCE.GROUPON, priority: 0.8 },
  { url: URLS.WORK_EXPERIENCE.MORAVIA, priority: 0.8 },
  { url: URLS.WORK_EXPERIENCE.KOOPERATIVA, priority: 0.8 },
  { url: URLS.PERSONAL_PROJECTS.KRSIAK, priority: 0.8 },
  { url: URLS.PERSONAL_PROJECTS.CRYPTOMANIA, priority: 0.8 },
  { url: URLS.STATUS_PAGE, priority: 0.5 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapEntries.map((entry) => ({
    url: entry.url,
    lastModified: new Date(),
    changeFrequency: CHANGE_FREQUENCY_MONTHLY,
    priority: entry.priority,
  }))
}
