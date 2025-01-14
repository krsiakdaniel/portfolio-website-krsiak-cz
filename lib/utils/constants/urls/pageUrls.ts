import { getUrlPersonalProject, getUrlWorkExperience } from '@/lib/utils/helpers/urls/getPageUrls'

export const PAGES_URL = {
  websiteProduction: 'https://krsiak.cz',
  localhost: 'http://localhost:3000',
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
  statusPage: '/status-page',
}
