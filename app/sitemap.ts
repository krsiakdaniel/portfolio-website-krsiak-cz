import { MetadataRoute } from 'next'

// URLs
const BASE_URL = 'https://krsiak.cz'
const WORK_EXPERIENCE = '/work-experience'
const PERSONAL_PROJECTS = '/personal-projects'

export const URLS = {
  BASE: BASE_URL,
  ABOUT_ME: `${BASE_URL}/about-me`,
  WORK_EXPERIENCE: `${BASE_URL}${WORK_EXPERIENCE}`,
  PERSONAL_PROJECTS: `${BASE_URL}${PERSONAL_PROJECTS}`,
  STATUS_PAGE: `${BASE_URL}/status-page`,
  WORK_EXPERIENCE_DETAILS: {
    SMARTSUPP_DASHBOARD: `${BASE_URL}${WORK_EXPERIENCE}/smartsupp-dashboard`,
    KOMERCNI_BANKA: `${BASE_URL}${WORK_EXPERIENCE}/komercni-banka`,
    SMARTSUPP_WEB: `${BASE_URL}${WORK_EXPERIENCE}/smartsupp-web`,
    SMARTSUPP_HELP: `${BASE_URL}${WORK_EXPERIENCE}/smartsupp-help`,
    GROUPON: `${BASE_URL}${WORK_EXPERIENCE}/groupon`,
    MORAVIA: `${BASE_URL}${WORK_EXPERIENCE}/moravia`,
  },
  PERSONAL_PROJECTS_DETAILS: {
    KRSIAK: `${BASE_URL}${PERSONAL_PROJECTS}/krsiak`,
    CRYPTOMANIA: `${BASE_URL}${PERSONAL_PROJECTS}/cryptomania`,
  },
}

// change frequency
export const CHANGE_FREQUENCY_MONTHLY = 'monthly'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: URLS.BASE,
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQUENCY_MONTHLY,
      priority: 1,
    },
    {
      url: URLS.ABOUT_ME,
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQUENCY_MONTHLY,
      priority: 0.8,
    },
    {
      url: URLS.WORK_EXPERIENCE,
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQUENCY_MONTHLY,
      priority: 0.8,
    },
    {
      url: URLS.PERSONAL_PROJECTS,
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQUENCY_MONTHLY,
      priority: 0.8,
    },
    {
      url: URLS.WORK_EXPERIENCE_DETAILS.SMARTSUPP_DASHBOARD,
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQUENCY_MONTHLY,
      priority: 0.8,
    },
    {
      url: URLS.WORK_EXPERIENCE_DETAILS.KOMERCNI_BANKA,
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQUENCY_MONTHLY,
      priority: 0.8,
    },
    {
      url: URLS.WORK_EXPERIENCE_DETAILS.SMARTSUPP_WEB,
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQUENCY_MONTHLY,
      priority: 0.8,
    },
    {
      url: URLS.WORK_EXPERIENCE_DETAILS.SMARTSUPP_HELP,
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQUENCY_MONTHLY,
      priority: 0.8,
    },
    {
      url: URLS.WORK_EXPERIENCE_DETAILS.GROUPON,
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQUENCY_MONTHLY,
      priority: 0.8,
    },
    {
      url: URLS.WORK_EXPERIENCE_DETAILS.MORAVIA,
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQUENCY_MONTHLY,
      priority: 0.8,
    },
    {
      url: URLS.PERSONAL_PROJECTS_DETAILS.KRSIAK,
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQUENCY_MONTHLY,
      priority: 0.8,
    },
    {
      url: URLS.PERSONAL_PROJECTS_DETAILS.CRYPTOMANIA,
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQUENCY_MONTHLY,
      priority: 0.8,
    },
    {
      url: URLS.STATUS_PAGE,
      lastModified: new Date(),
      changeFrequency: CHANGE_FREQUENCY_MONTHLY,
      priority: 0.5,
    },
  ]
}
