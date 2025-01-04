const NAVIGATION = {
  NEXT: 'page-navigation-next',
  PREVIOUS: 'page-navigation-previous',
}

const SECTIONS = {
  PERSONAL_PROJECTS: 'personal-projects',
  WORK_EXPERIENCE: 'work-experience',
  HERO_LINK: 'hero-link',
  FOOTER_LINK: 'footer-link',
}

const LINKS = {
  PERSONAL_PROJECTS_OVERVIEW: 'personal-projects',
  WORK_EXPERIENCE_OVERVIEW: 'work-experience',
  LINKEDIN: 'linkedin',
  RESUME: 'resume',
  TESTIMONIALS: 'testimonials',
  GITHUB: 'github',
  HOME: 'home',
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
  linkFooterHome: `${SECTIONS.FOOTER_LINK}-home`,
  statusPage: 'footer-link-status-page',
  linkFooterLinkedIn: `${SECTIONS.FOOTER_LINK}-${LINKS.LINKEDIN}`,
  linkFooterResume: `${SECTIONS.FOOTER_LINK}-${LINKS.RESUME}`,
  linkFooterGitHub: `${SECTIONS.FOOTER_LINK}-${LINKS.GITHUB}`,
}

const MENU = {
  mobile: {
    componentMenu: 'menu-mobile',
    links: {
      resume: 'mobile-resume-link',
      testimonials: 'mobile-testimonials-link',
      workExperience: 'mobile-work-experience-link',
      personalProjects: 'mobile-personal-projects-link',
    },
  },
  desktop: {
    componentMenu: 'menu-desktop',
    links: {
      resume: 'desktop-resume-link',
      testimonials: 'desktop-testimonials-link',
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
  paragraph: 'hero-paragraph',
}

const PAGE = {
  home: {
    previous: '',
    next: `${NAVIGATION.NEXT}-${LINKS.WORK_EXPERIENCE_OVERVIEW}`,
    introduction: 'home-introduction',
  },
  workExperience: {
    previous: `${NAVIGATION.PREVIOUS}-${LINKS.HOME}`,
    next: `${NAVIGATION.NEXT}-${LINKS.RESUME}`,
    introduction: 'work-experience-introduction',
  },
  resume: {
    previous: `${NAVIGATION.PREVIOUS}-${LINKS.WORK_EXPERIENCE_OVERVIEW}`,
    next: `${NAVIGATION.NEXT}-${LINKS.PERSONAL_PROJECTS_OVERVIEW}`,
    introduction: 'resume-introduction',
    downloadResume: 'download-resume',
  },
  personalProjects: {
    previous: `${NAVIGATION.PREVIOUS}-${LINKS.RESUME}`,
    next: `${NAVIGATION.NEXT}-${LINKS.TESTIMONIALS}`,
    introduction: 'personal-projects-introduction',
  },
  testimonials: {
    previous: `${NAVIGATION.PREVIOUS}-${LINKS.PERSONAL_PROJECTS_OVERVIEW}`,
    next: '',
    introduction: 'testimonials-introduction',
  },
}

const PERSONAL_PROJECTS = {
  overview: {
    previous: `${NAVIGATION.PREVIOUS}-${LINKS.RESUME}`,
    next: `${NAVIGATION.NEXT}-${LINKS.TESTIMONIALS}`,
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
    previous: `${NAVIGATION.PREVIOUS}-${LINKS.HOME}`,
    next: `${NAVIGATION.NEXT}-${LINKS.RESUME}`,
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

const PAGES_LINKS = {
  resume: 'resume-link',
  testimonials: 'testimonials-link',
  workExperience: 'work-experience-link',
  personalProjects: 'personal-projects-link',
}

const CALL_TO_ACTION = {
  linkResume: 'call-to-action-link-resume',
}

export const DATA_TEST_IDS = {
  breadcrumbs: 'breadcrumbs',
  gallery: 'gallery',
  headerLogo: 'header-logo',
  footer: FOOTER,
  menu: MENU,
  hero: HERO,
  page: PAGE,
  projects: PROJECTS,
  pagesLinks: PAGES_LINKS,
  callToAction: CALL_TO_ACTION,
}
