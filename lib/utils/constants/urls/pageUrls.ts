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
  home: '/',
  resume: '/resume',
  work: {
    mainUrl: '/work-experience',
    kooperativa: getUrlWorkExperience('kooperativa'),
    smartsupp: {
      dashboard: getUrlWorkExperience('smartsupp-dashboard'),
      web: getUrlWorkExperience('smartsupp-web'),
      help: getUrlWorkExperience('smartsupp-help'),
    },
    komercniBanka: getUrlWorkExperience('komercni-banka'),
    groupon: getUrlWorkExperience('groupon'),
    moravia: getUrlWorkExperience('moravia'),
  },
  personal: {
    mainUrl: '/personal-projects',
    krsiak: getUrlPersonalProject('krsiak'),
    cryptoMania: getUrlPersonalProject('cryptomania'),
  },
  testimonials: '/testimonials',
  status: '/status',
} as const satisfies PageUrls

/**
 * Flattened URLs for sitemap generation.
 */
export const SITEMAP_URLS: SitemapUrls = {
  home: PAGES_URL.home,
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
} as const satisfies SitemapUrls
