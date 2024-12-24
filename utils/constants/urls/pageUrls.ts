import { getUrlPersonalProject, getUrlWorkExperience } from '@/utils/helpers/getPageUrls'

export const URL_WORK_EXPERIENCE = '/work-experience'
export const URL_PERSONAL_PROJECTS = '/personal-projects'

export const PAGES_URL = {
  localhost: 'http://localhost:3000',
  home: '/',
  aboutMe: '/about-me',
  resume: '/resume',
  work: {
    mainUrl: URL_WORK_EXPERIENCE,
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
    mainUrl: URL_PERSONAL_PROJECTS,
    krsiak: getUrlPersonalProject('krsiak'),
    cryptoMania: getUrlPersonalProject('cryptomania'),
  },
  statusPage: '/status-page',
}
