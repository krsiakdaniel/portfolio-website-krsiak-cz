export const YEARS = {
  javascript: 6,
  typescript: 5,
  react: 5,
  redux: 2,
  webDeveloper: 1,
  qaAutomation: 1,
  localizationManager: 2,
  localizationTester: 3,
  webCoder: 1,
}

export const CONTACT = {
  phone: {
    href: 'tel:+420734496308',
    text: '(+420) 734 496 308',
  },
  email: {
    href: 'mailto:krsiak.daniel@gmail.com',
    text: 'krsiak.daniel@gmail.com',
  },
}

export const PROJECT_ID = {
  work: {
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
    eshop: 'link-project-personal-eshop',
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
    vue: 'vue',
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

export const EXTERNAL_URL = {
  linkedin: 'https://www.linkedin.com/in/krsiakdaniel/',
  github: 'https://github.com/krsiakdaniel/',
  resume: 'https://drive.google.com/file/d/1b-PWUOauMnFecRuYX7K85xZnwFRMWFR5/view?usp=sharing',
}

// URLs for pages
const URL_WORK_EXPERIENCE = '/work-experience'
const URL_PERSONAL_PROJECTS = '/personal-projects'

export const PAGES_URL = {
  home: '/',
  aboutMe: '/about-me',
  work: {
    main: URL_WORK_EXPERIENCE,
    smartsupp: {
      dashboard: `${URL_WORK_EXPERIENCE}/smartsupp-dashboard`,
      web: `${URL_WORK_EXPERIENCE}/smartsupp-web`,
      help: `${URL_WORK_EXPERIENCE}/smartsupp-help`,
    },
    komercniBanka: `${URL_WORK_EXPERIENCE}/komercni-banka`,
    groupon: `${URL_WORK_EXPERIENCE}/groupon`,
    moravia: `${URL_WORK_EXPERIENCE}/moravia`,
  },
  personal: {
    main: URL_PERSONAL_PROJECTS,
    krsiak: `${URL_PERSONAL_PROJECTS}/krsiak`,
    eshop: `${URL_PERSONAL_PROJECTS}/eshop`,
    cryptoMania: `${URL_PERSONAL_PROJECTS}/cryptomania`,
  },
}
