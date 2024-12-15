import { generateUrlPersonalProject, generateUrlWorkExperience } from './generateUrls'

export const YEARS = {
  javascript: 6,
  typescript: 5,
  react: 5,
  redux: 2,
  tailwind: 2,
  next: 1,
  webDeveloper: 1,
  qaAutomation: 1,
  localizationManager: 2,
  localizationTester: 3,
  webCoder: 1,
}

// TODO: refactor into files folders if needed + update all in code + add new IDs here from JSX
export const PROJECT_ID = {
  work: {
    kooperativa: 'link-project-work-kooperativa',
    smartsupp: {
      dashboard: 'link-project-work-smartsupp-dashboard',
      web: 'link-project-work-smartsupp-web',
      help: 'link-project-work-smartsupp-help',
    },
    komercniBanka: 'link-project-work-komercni-banka',
    groupon: 'link-project-work-groupon',
    moravia: 'link-project-work-moravia',
  },
  personal: {
    krsiak: 'link-project-personal-krsiak',
    cryptoMania: 'link-project-personal-cryptomania',
  },
}

export const ID = {
  homepage: 'homepage',
  hero: 'hero',
  skills: 'skills',
  skillsMain: 'skills-main',
  about: 'about',
  projects: {
    work: 'work',
    personal: 'personal',
  },
  footer: 'footer',
  section: {
    react: 'react',
    frontEnd: 'front-end',
    wordpress: 'wordpress',
    qa: 'qa-automation-testing',
    localization: 'localization',
    next: 'next',
  },
  error: {
    err404: 'error-404',
    errGeneral: 'error',
    errGlobal: 'error-global',
  },
  menu: {
    mobile: 'menu-mobile',
    desktop: 'menu-desktop',
    toggle: 'menu-toggle',
  },
}

const RESUME_GOOGLE_DRIVE_URL = 'https://drive.google.com/file/d/1NBBJJaK_zsvqtNiiF388kygQ4gqi0mLD'

export const EXTERNAL_URL = {
  linkedin: 'https://www.linkedin.com/in/krsiakdaniel/',
  github: 'https://github.com/krsiakdaniel/',
  resume: {
    resumeViewPDF: `${RESUME_GOOGLE_DRIVE_URL}/view`,
    resumeEmbedPreviewPDF: `${RESUME_GOOGLE_DRIVE_URL}/preview`,
  },
}

// URLs for pages
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
