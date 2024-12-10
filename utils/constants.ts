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
  contactVcard: 'contact-vcard',
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

const RESUME_BASE_URL = 'https://drive.google.com/file/d/1NBBJJaK_zsvqtNiiF388kygQ4gqi0mLD'

export const EXTERNAL_URL = {
  linkedin: 'https://www.linkedin.com/in/krsiakdaniel/',
  github: 'https://github.com/krsiakdaniel/',
  resume: {
    resumeViewPDF: `${RESUME_BASE_URL}/view`,
    resumeEmbedPreviewPDF: `${RESUME_BASE_URL}/preview`,
  },
}

// URLs for pages
const URL_WORK_EXPERIENCE = '/work-experience'
const URL_PERSONAL_PROJECTS = '/personal-projects'

const generateUrlWorkExperience = (company: string) => {
  return `${URL_WORK_EXPERIENCE}/${company}`
}

export const PAGES_URL = {
  home: '/',
  aboutMe: '/about-me',
  resume: '/resume',
  work: {
    main: URL_WORK_EXPERIENCE,
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
    main: URL_PERSONAL_PROJECTS,
    krsiak: `${URL_PERSONAL_PROJECTS}/krsiak`,
    cryptoMania: `${URL_PERSONAL_PROJECTS}/cryptomania`,
  },
}
