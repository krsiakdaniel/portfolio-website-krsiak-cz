import { EnvUrls, PageUrls } from '@/lib/utils/typeDefinitions/interfaces'

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

// Single source of truth for all page URLs
export const PAGES_URL = {
  // Top-level pages
  home: '/',
  whoIAm: '/who-i-am',
  workExperience: '/work-experience',
  resume: '/resume',
  personalProjects: '/personal-projects',
  testimonials: '/testimonials',
  status: '/status',

  // Work experience pages
  workKooperativa: '/work-experience/kooperativa',
  workSmartsuppDashboard: '/work-experience/smartsupp-dashboard',
  workSmartsuppWeb: '/work-experience/smartsupp-web',
  workSmartsuppHelp: '/work-experience/smartsupp-help',
  workKomercniBanka: '/work-experience/komercni-banka',
  workGroupon: '/work-experience/groupon',
  workMoravia: '/work-experience/moravia',

  // Personal project pages
  personalKrsiak: '/personal-projects/krsiak',
  personalCryptoMania: '/personal-projects/cryptomania',
} as const satisfies PageUrls
