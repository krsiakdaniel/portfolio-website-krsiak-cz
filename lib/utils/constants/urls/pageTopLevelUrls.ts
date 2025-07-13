import {
  PageTopLevelUrls,
  ProjectsPersonalTopLevelUrls,
  ProjectsWorkTopLevelUrls,
} from '@/lib/utils/typeDefinitions/interfaces'

// This file serves for preventing circular dependencies in some of the application files
export const PAGE_TOP_LEVEL_URLS: PageTopLevelUrls = {
  home: '/',
  whoIAm: '/who-i-am',
  workExperience: '/work-experience',
  resume: '/resume',
  personalProjects: '/personal-projects',
  testimonials: '/testimonials',
  status: '/status',
  blog: '/blog',
}

// page urls names - personal projects
export const PROJECTS_PERSONAL_TOP_LEVEL_URLS: ProjectsPersonalTopLevelUrls = {
  krsiak: 'krsiak',
  cryptoMania: 'cryptomania',
}

// page urls names - work projects
export const PROJECTS_WORK_TOP_LEVEL_URLS: ProjectsWorkTopLevelUrls = {
  kooperativa: 'kooperativa',
  smartsupp: {
    dashboard: 'smartsupp-dashboard',
    web: 'smartsupp-web',
    help: 'smartsupp-help',
  },
  komercniBanka: 'komercni-banka',
  groupon: 'groupon',
  moravia: 'moravia',
}
