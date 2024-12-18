const NAVIGATION = {
  NEXT: 'page-navigation-next',
  PREVIOUS: 'page-navigation-previous',
}

const SECTIONS = {
  PERSONAL_PROJECTS: 'personal-projects',
  WORK_EXPERIENCE: 'work-experience',
  HERO_LINK: 'hero-link',
}

const LINKS = {
  LINKEDIN: 'linkedin',
  RESUME: 'resume',
  GITHUB: 'github',
  HOMEPAGE: 'homepage',
  ABOUT_ME: 'about-me',
  KRSIAK: 'krsiak',
  CRYPTOMANIA: 'cryptomania',
  KOMERCNI_BANKA: 'komercni-banka',
  SMARTSUPP_WEB: 'smartsupp-web',
  SMARTSUPP_HELP: 'smartsupp-help',
  MORAVIA: 'moravia',
  GROUPON: 'groupon',
  KOOPERATIVA: 'kooperativa',
}

const FOOTER = {
  scrollToTopButton: 'scroll-to-top-button',
  copyright: 'footer-copyright',
  link: 'footer-link',
  statusPage: 'footer-link-status-page',
}

const MENU = {
  mobile: {
    component: 'menu-mobile',
    links: {
      aboutMe: 'mobile-about-me-link',
      resume: 'mobile-resume-link',
      workExperience: 'mobile-work-experience-link',
      personalProjects: 'mobile-personal-projects-link',
    },
  },
  desktop: {
    component: 'menu-desktop',
    links: {
      aboutMe: 'desktop-about-me-link',
      resume: 'desktop-resume-link',
      workExperience: 'desktop-work-experience-link',
      personalProjects: 'desktop-personal-projects-link',
    },
  },
  toggle: {
    component: 'menu-toggle',
  },
}

const HERO = {
  heading: 'hero-heading',
  linkLinkedIn: `${SECTIONS.HERO_LINK}-${LINKS.LINKEDIN}`,
  linkResume: `${SECTIONS.HERO_LINK}-${LINKS.RESUME}`,
  linkGitHub: `${SECTIONS.HERO_LINK}-${LINKS.GITHUB}`,
  paragraph: 'hero-paragraph',
}

const PAGE = {
  home: {
    previous: '',
    next: `${NAVIGATION.NEXT}-${LINKS.ABOUT_ME}`,
  },
  aboutMe: {
    previous: `${NAVIGATION.PREVIOUS}-${LINKS.HOMEPAGE}`,
    next: `${NAVIGATION.NEXT}-${LINKS.RESUME}`,
    introduction: 'about-me-introduction',
  },
  resume: {
    previous: `${NAVIGATION.PREVIOUS}-${LINKS.ABOUT_ME}`,
    next: `${NAVIGATION.NEXT}-${SECTIONS.WORK_EXPERIENCE}`,
    introduction: 'resume-introduction',
  },
}

const PERSONAL_PROJECTS = {
  overview: {
    previous: `${NAVIGATION.PREVIOUS}-${SECTIONS.WORK_EXPERIENCE}`,
    next: '',
  },
  cryptoMania: {
    previous: `${NAVIGATION.PREVIOUS}-${LINKS.KRSIAK}`,
    next: '',
  },
  krsiak: {
    previous: `${NAVIGATION.PREVIOUS}-${SECTIONS.PERSONAL_PROJECTS}`,
    next: `${NAVIGATION.NEXT}-${LINKS.CRYPTOMANIA}`,
  },
}

const WORK_PROJECTS = {
  overview: {
    previous: `${NAVIGATION.PREVIOUS}-${LINKS.RESUME}`,
    next: `${NAVIGATION.NEXT}-${SECTIONS.PERSONAL_PROJECTS}`,
  },
  kooperativa: {
    previous: `${NAVIGATION.PREVIOUS}-${LINKS.KOMERCNI_BANKA}`,
    next: `${NAVIGATION.NEXT}-${LINKS.SMARTSUPP_WEB}`,
  },
  groupon: {
    previous: `${NAVIGATION.PREVIOUS}-${LINKS.SMARTSUPP_HELP}`,
    next: `${NAVIGATION.NEXT}-${LINKS.MORAVIA}`,
  },
  smartsupp: {
    web: {
      previous: `${NAVIGATION.PREVIOUS}-${LINKS.KOOPERATIVA}`,
      next: `${NAVIGATION.NEXT}-${LINKS.SMARTSUPP_HELP}`,
    },
    dashboard: {
      previous: `${NAVIGATION.PREVIOUS}-${SECTIONS.WORK_EXPERIENCE}`,
      next: `${NAVIGATION.NEXT}-${LINKS.KOMERCNI_BANKA}`,
    },
    help: {
      previous: `${NAVIGATION.PREVIOUS}-${LINKS.SMARTSUPP_WEB}`,
      next: `${NAVIGATION.NEXT}-${LINKS.GROUPON}`,
    },
  },
  komercniBanka: {
    previous: `${NAVIGATION.PREVIOUS}-${LINKS.GROUPON}`,
    next: `${NAVIGATION.NEXT}-${LINKS.KOOPERATIVA}`,
  },
  moravia: {
    previous: `${NAVIGATION.PREVIOUS}-${LINKS.SMARTSUPP_HELP}`,
    next: `${NAVIGATION.NEXT}-${LINKS.GROUPON}`,
  },
}

const PROJECTS = {
  personal: PERSONAL_PROJECTS,
  work: WORK_PROJECTS,
}

export const DATA_TEST_IDS = {
  breadcrumbs: 'breadcrumbs',
  gallery: 'gallery',
  header: 'header-logo',
  footer: FOOTER,
  menu: MENU,
  hero: HERO,
  page: PAGE,
  projects: PROJECTS,
}
