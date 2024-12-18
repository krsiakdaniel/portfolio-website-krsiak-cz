import { generateUrlPersonalProject, generateUrlWorkExperience } from '@/utils/helpers/generateUrls'

export const URL_WORK_EXPERIENCE = '/work-experience'
export const URL_PERSONAL_PROJECTS = '/personal-projects'

export const PAGES_URL = {
  localhost: 'http://localhost:3000',
  home: '/',
  aboutMe: '/about-me',
  resume: '/resume',
  work: {
    mainUrl: URL_WORK_EXPERIENCE,
    kooperativa: generateUrlWorkExperience('kooperativa'),
    smartsupp: {
      dashboard: generateUrlWorkExperience('smartsupp-dashboard'),
      web: generateUrlWorkExperience('smartsupp-web'),
      help: generateUrlWorkExperience('smartsupp-help'),
    },
    komercniBanka: generateUrlWorkExperience('komercni-banka'),
    groupon: generateUrlWorkExperience('groupon'),
    moravia: generateUrlWorkExperience('moravia'),
  },
  personal: {
    mainUrl: URL_PERSONAL_PROJECTS,
    krsiak: generateUrlPersonalProject('krsiak'),
    cryptoMania: generateUrlPersonalProject('cryptomania'),
  },
}
