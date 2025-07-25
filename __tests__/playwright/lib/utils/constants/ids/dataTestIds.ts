export const PROJECT_LINK = 'project-link'

const NAVIGATION = {
  NEXT: 'page-navigation-next',
  PREVIOUS: 'page-navigation-previous',
  END_OF_PAGE: 'page-navigation-previous-next',
}

const SECTIONS = {
  PERSONAL_PROJECTS: 'personal-projects',
  WORK_EXPERIENCE: 'work-experience',
  HERO_LINK: 'hero-link',
  FOOTER_LINK: 'footer-link',
}

const LINKS = {
  // main pages
  HOME: 'home',
  WHO_I_AM: 'who-i-am',
  WORK_EXPERIENCE_OVERVIEW: 'work-experience',
  RESUME: 'resume',
  PERSONAL_PROJECTS_OVERVIEW: 'personal-projects',
  // personal projects
  TESTIMONIALS: 'testimonials',
  KRSIAK: 'krsiak',
  // work projects
  CRYPTOMANIA: 'cryptomania',
  KOMERCNI_BANKA: 'komercni-banka',
  KOMERCNI_BANKA_BRANCHES_AND_ATMS: 'komercni-banka-branches-and-atms',
  KOMERCNI_BANKA_BRANCHES_AND_ATMS_DETAILS: 'komercni-banka-branches-and-atms-details',
  KOMERCNI_BANKA_EXCHANGE_RATES: 'komercni-banka-exchange-rates',
  KOMERCNI_BANKA_EXCHANGE_RATES_DETAILS: 'komercni-banka-exchange-rates-details',
  SMARTSUPP_WEB: 'smartsupp-web',
  SMARTSUPP_HELP: 'smartsupp-help',
  SMARTSUPP_DASHBOARD: 'smartsupp-dashboard',
  MORAVIA: 'moravia',
  GROUPON: 'groupon',
  KOOPERATIVA: 'kooperativa',
  // social links
  GITHUB: 'github',
  LINKEDIN: 'linkedin',
}

const FOOTER = {
  scrollToTopButton: 'scroll-to-top-button',
  copyright: 'footer-copyright',
  linkFooterHome: `${SECTIONS.FOOTER_LINK}-home`,
  linkFooterLinkedIn: `${SECTIONS.FOOTER_LINK}-${LINKS.LINKEDIN}`,
  linkFooterResume: `${SECTIONS.FOOTER_LINK}-${LINKS.RESUME}`,
  linkFooterGitHub: `${SECTIONS.FOOTER_LINK}-${LINKS.GITHUB}`,
  status: 'footer-link-status',
  statusBadges: 'status-badges',
}

const ALERT = {
  alertLinkGitHub: `alert-link-${LINKS.GITHUB}`,
}

const MENU = {
  mobile: {
    componentMenu: 'menu-mobile',
    links: {
      whoIAm: 'mobile-who-i-am-link',
      resume: 'mobile-resume-link',
      testimonials: 'mobile-testimonials-link',
      workExperience: 'mobile-work-experience-link',
      personalProjects: 'mobile-personal-projects-link',
      blog: 'mobile-blog-link',
    },
  },
  desktop: {
    componentMenu: 'menu-desktop',
    links: {
      whoIAm: 'desktop-who-i-am-link',
      resume: 'desktop-resume-link',
      testimonials: 'desktop-testimonials-link',
      workExperience: 'desktop-work-experience-link',
      personalProjects: 'desktop-personal-projects-link',
      blog: 'desktop-blog-link',
    },
  },
  toggle: {
    component: 'menu-toggle',
  },
  socialLinks: {
    gitHubRepo: 'menu-link-social-github',
    linkedInProfile: 'menu-link-social-linkedin',
  },
}

const HERO = {
  heading: 'hero-heading',
  headingSmall: 'hero-heading-small',
  paragraph: 'hero-paragraph',
}

const PAGE = {
  home: {
    introduction: 'home-introduction',
  },
  whoIAm: {
    introduction: 'who-i-am-introduction',
  },
  workExperience: {
    introduction: 'work-experience-introduction',
  },
  resume: {
    introduction: 'resume-introduction',
    downloadResume: 'download-resume',
  },
  personalProjects: {
    introduction: 'personal-projects-introduction',
  },
  testimonials: {
    introduction: 'testimonials-introduction',
  },
  status: {
    introduction: 'status-introduction',
  },
}

const PAGE_NAVIGATION = {
  home: {
    previous: '',
    next: `${NAVIGATION.NEXT}-${LINKS.WHO_I_AM}`,
  },
  whoIAm: {
    previous: `${NAVIGATION.PREVIOUS}-${LINKS.HOME}`,
    next: `${NAVIGATION.NEXT}-${LINKS.WORK_EXPERIENCE_OVERVIEW}`,
  },
  workExperience: {
    previous: `${NAVIGATION.PREVIOUS}-${LINKS.WHO_I_AM}`,
    next: `${NAVIGATION.NEXT}-${LINKS.RESUME}`,
  },
  resume: {
    previous: `${NAVIGATION.PREVIOUS}-${LINKS.RESUME}`,
    next: `${NAVIGATION.NEXT}-${LINKS.PERSONAL_PROJECTS_OVERVIEW}`,
  },
  personalProjects: {
    previous: `${NAVIGATION.PREVIOUS}-${LINKS.RESUME}`,
    next: `${NAVIGATION.NEXT}-${LINKS.TESTIMONIALS}`,
  },
  testimonials: {
    previous: `${NAVIGATION.PREVIOUS}-${LINKS.PERSONAL_PROJECTS_OVERVIEW}`,
    next: '',
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
  whoIAm: 'who-i-am-link',
  workExperience: 'work-experience-link',
  resume: 'resume-link',
  personalProjects: 'personal-projects-link',
  testimonials: 'testimonials-link',
  blog: 'blog-link',
}

const CALL_TO_ACTION = {
  linkResume: 'call-to-action-link-resume',
  linkResumeWorkExperience1: 'call-to-action-link-resume-1',
  linkResumeWorkExperience2: 'call-to-action-link-resume-2',
  linkResumeDownload: 'call-to-action-link-resume-download',
  linkWorkExperience: 'call-to-action-link-work-experience',
  linkGitHub: 'call-to-action-link-github',
  linkLinkedIn: 'call-to-action-link-linkedin',
}

const EXTERNAL_LINKS = {
  projectLinkGitHub: `${PROJECT_LINK}-${LINKS.GITHUB}`,
  projectLinkWebsite: `${PROJECT_LINK}-website`,
  uptimeMonitorStatus: 'uptime-krsiak',
  uptimeMonitorStatusExternal: 'uptime-monitor',
}

const MISC = {
  linkedinPhoto: 'linkedin-photo',
}

const BAPTISM = {
  verseLink: 'bible-verse-link',
  image: 'baptism-testimony-image',
}

const SOUTH_KOREA = {
  hiking: 'south-korea-hiking',
  nature: 'south-korea-nature',
  temple: 'south-korea-temple',
  palace: 'south-korea-palace',
}

export const COUNTRY = {
  czechRepublic: 'cz',
  slovakia: 'sk',
  finland: 'fi',
  korea: 'kr',
}

export const DATA_TEST_IDS = {
  breadcrumbs: 'breadcrumbs',
  gallery: 'gallery',
  headerLogo: 'header-logo',
  footer: FOOTER,
  menu: MENU,
  hero: HERO,
  page: PAGE,
  pageNavigation: PAGE_NAVIGATION,
  projects: PROJECTS,
  links: LINKS,
  pagesLinks: PAGES_LINKS,
  callToAction: CALL_TO_ACTION,
  navigation: NAVIGATION,
  alert: ALERT,
  externalLinks: EXTERNAL_LINKS,
  misc: MISC,
  baptism: BAPTISM,
  southKorea: SOUTH_KOREA,
  country: COUNTRY,
}
