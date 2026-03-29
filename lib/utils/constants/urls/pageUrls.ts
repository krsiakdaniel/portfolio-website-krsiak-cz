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
  workExperience: '/work-experience',
  resume: '/resume',
  personalProjects: '/personal-projects',
  whoIAm: '/who-i-am',
  testimonials: '/testimonials',
  status: '/status',

  // Work experience pages
  workO2itsAiPoweredChatDashboard: '/work-experience/o2its-ai-powered-chat-dashboard',
  workSmartsuppDashboard: '/work-experience/smartsupp-dashboard',
  workKomercniBanka: '/work-experience/komercni-banka',
  workKooperativa: '/work-experience/kooperativa',
  workSmartsuppWeb: '/work-experience/smartsupp-web',
  workSmartsuppHelp: '/work-experience/smartsupp-help',
  workGroupon: '/work-experience/groupon',
  workMoravia: '/work-experience/moravia',

  // Personal project pages
  personalKoreanEasy: '/personal-projects/korean-easy',
  personalKrsiak: '/personal-projects/krsiak',
} as const satisfies PageUrls
