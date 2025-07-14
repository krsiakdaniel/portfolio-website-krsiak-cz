import {
  PAGE_TOP_LEVEL_URLS,
  PROJECTS_PERSONAL_TOP_LEVEL_URLS,
  PROJECTS_WORK_TOP_LEVEL_URLS,
} from '@/lib/utils/constants/urls/pageTopLevelUrls'
import { getUrlPersonalProject, getUrlWorkExperience } from '@/lib/utils/helpers/urls/getPageUrls'
import { EnvUrls, PageUrls, SitemapUrls } from '@/lib/utils/typeDefinitions/interfaces'

/**
 * Environment URLs.
 * This object is immutable and satisfies the EnvUrls interface.
 *
 * Type is { readonly production: "https://krsiak.cz", readonly localhost: "http://localhost:3000" }
 * Cannot be modified.
 * Validates against EnvUrls interface.
 */
export const ENV_URLS = {
  production: 'https://krsiak.cz',
  localhost: 'http://localhost:3000',
} as const satisfies EnvUrls

/**
 * Website page URLs.
 * This object is immutable and satisfies the PageUrls interface.
 *
 * Type is { readonly home: "/", readonly about: "/about" }
 * Cannot be modified.
 * Validates against PageUrls interface.
 */
export const PAGES_URL: PageUrls = {
  home: PAGE_TOP_LEVEL_URLS.home,
  whoIAm: PAGE_TOP_LEVEL_URLS.whoIAm,
  resume: PAGE_TOP_LEVEL_URLS.resume,
  work: {
    mainUrl: PAGE_TOP_LEVEL_URLS.workExperience,
    kooperativa: getUrlWorkExperience(PROJECTS_WORK_TOP_LEVEL_URLS.kooperativa),
    smartsupp: {
      dashboard: getUrlWorkExperience(PROJECTS_WORK_TOP_LEVEL_URLS.smartsupp.dashboard),
      web: getUrlWorkExperience(PROJECTS_WORK_TOP_LEVEL_URLS.smartsupp.web),
      help: getUrlWorkExperience(PROJECTS_WORK_TOP_LEVEL_URLS.smartsupp.help),
    },
    komercniBanka: getUrlWorkExperience(PROJECTS_WORK_TOP_LEVEL_URLS.komercniBanka),
    groupon: getUrlWorkExperience(PROJECTS_WORK_TOP_LEVEL_URLS.groupon),
    moravia: getUrlWorkExperience(PROJECTS_WORK_TOP_LEVEL_URLS.moravia),
  },
  personal: {
    mainUrl: PAGE_TOP_LEVEL_URLS.personalProjects,
    krsiak: getUrlPersonalProject(PROJECTS_PERSONAL_TOP_LEVEL_URLS.krsiak),
    cryptoMania: getUrlPersonalProject(PROJECTS_PERSONAL_TOP_LEVEL_URLS.cryptoMania),
  },
  testimonials: PAGE_TOP_LEVEL_URLS.testimonials,
  status: PAGE_TOP_LEVEL_URLS.status,
  blog: PAGE_TOP_LEVEL_URLS.blog,
} as const satisfies PageUrls

/**
 * Flattened URLs for sitemap generation.
 */
export const SITEMAP_URLS: SitemapUrls = {
  home: PAGES_URL.home,
  whoIAm: PAGES_URL.whoIAm,
  resume: PAGES_URL.resume,
  workExperience: PAGES_URL.work.mainUrl,
  workKooperativa: PAGES_URL.work.kooperativa,
  workSmartsuppDashboard: PAGES_URL.work.smartsupp.dashboard,
  workSmartsuppWeb: PAGES_URL.work.smartsupp.web,
  workSmartsuppHelp: PAGES_URL.work.smartsupp.help,
  workKomercniBanka: PAGES_URL.work.komercniBanka,
  workGroupon: PAGES_URL.work.groupon,
  workMoravia: PAGES_URL.work.moravia,
  personalProjects: PAGES_URL.personal.mainUrl,
  personalKrsiak: PAGES_URL.personal.krsiak,
  personalCryptoMania: PAGES_URL.personal.cryptoMania,
  testimonials: PAGES_URL.testimonials,
  status: PAGES_URL.status,
  blog: PAGES_URL.blog,
} as const satisfies SitemapUrls
