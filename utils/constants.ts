// TODO: refactor into better structure
export const LINK_LINKEDIN = 'https://www.linkedin.com/in/krsiakdaniel/'
export const LINK_GITHUB = 'https://github.com/krsiakdaniel/'
export const LINK_RESUME = 'https://drive.google.com/file/d/1x0LWu8I_3aqW34TJbxkciqNGX642bdvF/view?usp=sharing'

export const PHONE_HREF = 'tel:+420734496308'
export const PHONE_TEXT = '(+420) 734 496 308'

export const EMAIL_HREF = 'mailto:krsiak.daniel@gmail.com'
export const EMAIL_TEXT = 'krsiak.daniel@gmail.com'

export const ID_HOMEPAGE = 'homepage'
export const ID_HERO = 'hero'
export const ID_SKILLS = 'skills'
export const ID_SKILLS_MAIN = 'skills-main'
export const ID_SERVICES = 'services'
export const ID_ABOUT = 'about'
export const ID_PROJECTS_WORK = 'work'
export const ID_PROJECTS_PERSONAL = 'personal'
export const ID_CONTACT = 'contact'
export const ID_FOOTER = 'footer'

// IDs for work and personal sections
export const ID_SECTION_REACT = 'react'
export const ID_SECTION_FRONT_END = 'front-end'
export const ID_SECTION_WORDPRESS = 'wordpress'
export const ID_SECTION_QA = 'qa-automation-testing'
export const ID_SECTION_LOCALIZATION = 'localization'
export const ID_SECTION_NEXT = 'next'
export const ID_SECTION_VUE = 'vue'

// error pages
export const ID_ERROR_404 = 'error-404'
export const ID_ERROR = 'error'
export const ID_ERROR_GLOBAL = 'error-global'

// project pages URLs
const URL_WORK_EXPERIENCE = '/work-experience'
const URL_PERSONAL_PROJECTS = '/personal-projects'

export const projectPages = {
  work: {
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
    krsiak: `${URL_PERSONAL_PROJECTS}/krsiak`,
    eshop: `${URL_PERSONAL_PROJECTS}/eshop`,
    cryptoMania: `${URL_PERSONAL_PROJECTS}/cryptomania`,
  },
}

// project pages IDs
export const projectIDs = {
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

// header
export const TEXTS = {
  logo: 'krsiak.cz',
  aboutMe: '👨‍💻 About Me',
  workExperience: '🖥️ Work Experience',
  personalProjects: '🚀 Personal Projects',
}

export const URLS = {
  home: '/',
  aboutMe: '/about-me',
  workExperience: '/work-experience',
  personalProjects: '/personal-projects',
}

export const MENU_MOBILE_ID = 'menu-mobile'
export const MENU_DESKTOP_ID = 'menu-desktop'
export const MENU_TOGGLE_ID = 'menu-toggle'
