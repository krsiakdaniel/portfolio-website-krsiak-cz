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
  // Top-level pages
  HOME: 'home',
  WORK_EXPERIENCE_OVERVIEW: 'work-experience',
  RESUME: 'resume',
  PERSONAL_PROJECTS_OVERVIEW: 'personal-projects',
  WHO_I_AM: 'who-i-am',
  TESTIMONIALS: 'testimonials',

  // Work experience pages
  O2ITS_AI_POWERED_CHAT_DASHBOARD: 'o2its-ai-powered-chat-dashboard',
  O2ITS_PUBLIC_TENDERS_PORTAL: 'o2its-public-tenders-portal',
  SMARTSUPP_DASHBOARD: 'smartsupp-dashboard',
  KOMERCNI_BANKA: 'komercni-banka',
  KOMERCNI_BANKA_BRANCHES_AND_ATMS: 'komercni-banka-branches-and-atms',
  KOMERCNI_BANKA_BRANCHES_AND_ATMS_DETAILS: 'komercni-banka-branches-and-atms-details',
  KOMERCNI_BANKA_EXCHANGE_RATES: 'komercni-banka-exchange-rates',
  KOMERCNI_BANKA_EXCHANGE_RATES_DETAILS: 'komercni-banka-exchange-rates-details',
  KOOPERATIVA: 'kooperativa',
  SMARTSUPP_WEB: 'smartsupp-web',
  SMARTSUPP_HELP: 'smartsupp-help',
  MORAVIA: 'moravia',
  GROUPON: 'groupon',

  // Personal project pages
  KOREAN_EASY: 'korean-easy',
  KRSIAK: 'krsiak',

  // Social links
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
  alertLinkLinkedIn: `alert-link-${LINKS.LINKEDIN}`,
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
    },
  },
  bottomDrawer: 'menu-bottom-drawer',
  bottomDrawerBackdrop: 'menu-bottom-drawer-backdrop',
  desktop: {
    componentMenu: 'menu-desktop',
    links: {
      whoIAm: 'desktop-who-i-am-link',
      resume: 'desktop-resume-link',
      testimonials: 'desktop-testimonials-link',
      workExperience: 'desktop-work-experience-link',
      personalProjects: 'desktop-personal-projects-link',
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
    next: `${NAVIGATION.NEXT}-${LINKS.WORK_EXPERIENCE_OVERVIEW}`,
  },
  workExperience: {
    previous: `${NAVIGATION.PREVIOUS}-${LINKS.HOME}`,
    next: `${NAVIGATION.NEXT}-${LINKS.RESUME}`,
  },
  resume: {
    previous: `${NAVIGATION.PREVIOUS}-${LINKS.WORK_EXPERIENCE_OVERVIEW}`,
    next: `${NAVIGATION.NEXT}-${LINKS.PERSONAL_PROJECTS_OVERVIEW}`,
  },
  personalProjects: {
    previous: `${NAVIGATION.PREVIOUS}-${LINKS.RESUME}`,
    next: `${NAVIGATION.NEXT}-${LINKS.WHO_I_AM}`,
  },
  whoIAm: {
    previous: `${NAVIGATION.PREVIOUS}-${LINKS.PERSONAL_PROJECTS_OVERVIEW}`,
    next: `${NAVIGATION.NEXT}-${LINKS.TESTIMONIALS}`,
  },
  testimonials: {
    previous: `${NAVIGATION.PREVIOUS}-${LINKS.WHO_I_AM}`,
    next: '',
  },
}

const PERSONAL_PROJECTS = {
  overview: {
    previous: `${NAVIGATION.PREVIOUS}-${LINKS.RESUME}`,
    next: `${NAVIGATION.NEXT}-${LINKS.WHO_I_AM}`,
  },
  krsiak: {
    previous: `${NAVIGATION.PREVIOUS}-${LINKS.KOREAN_EASY}`,
    next: '',
  },
  koreanEasy: {
    previous: '',
    next: `${NAVIGATION.NEXT}-${LINKS.KRSIAK}`,
  },
}

const WORK_PROJECTS = {
  overview: {
    previous: `${NAVIGATION.PREVIOUS}-${LINKS.HOME}`,
    next: `${NAVIGATION.NEXT}-${LINKS.RESUME}`,
  },
  O2itsAiPoweredChatDashboard: {
    previous: '',
    next: `${NAVIGATION.NEXT}-${LINKS.O2ITS_PUBLIC_TENDERS_PORTAL}`,
  },
  O2itsPublicTendersPortal: {
    previous: `${NAVIGATION.PREVIOUS}-${LINKS.O2ITS_AI_POWERED_CHAT_DASHBOARD}`,
    next: `${NAVIGATION.NEXT}-${LINKS.SMARTSUPP_DASHBOARD}`,
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
      previous: `${NAVIGATION.PREVIOUS}-${LINKS.O2ITS_PUBLIC_TENDERS_PORTAL}`,
      next: `${NAVIGATION.NEXT}-${LINKS.KOMERCNI_BANKA}`,
    },
    help: {
      previous: `${NAVIGATION.PREVIOUS}-${LINKS.SMARTSUPP_WEB}`,
      next: `${NAVIGATION.NEXT}-${LINKS.GROUPON}`,
    },
  },
  komercniBanka: {
    previous: `${NAVIGATION.PREVIOUS}-${LINKS.SMARTSUPP_DASHBOARD}`,
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
}

const CALL_TO_ACTION = {
  linkResume: 'call-to-action-link-resume',
  linkResumeWorkExperience: 'call-to-action-link-resume',
  linkWorkExperience: 'call-to-action-link-work-experience',
  linkGitHub: 'call-to-action-link-github',
  linkLinkedIn: 'call-to-action-link-linkedin',
}

const RESUME = {
  linkImageResumeDownloadPDF: 'link-image-download-resume-pdf',
  linkImageResumeDownloadDOCX: 'link-image-download-resume-docx',
  stripButtonResumeDownloadPDF: 'strip-button-download-resume-pdf',
  stripButtonResumeDownloadDOCX: 'strip-button-download-resume-docx',
  buttonPreviewPDF: 'button-preview-resume-pdf',
  buttonPreviewDOCX: 'button-preview-resume-docx',
  previewDialogPDF: 'resume-preview-dialog-pdf',
  previewDialogDOCX: 'resume-preview-dialog-docx',
  previewButtonFullscreenPDF: 'resume-preview-button-fullscreen-pdf',
  previewButtonFullscreenDOCX: 'resume-preview-button-fullscreen-docx',
  previewButtonClosePDF: 'resume-preview-button-close-pdf',
  previewButtonCloseDOCX: 'resume-preview-button-close-docx',
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

const ERROR_PAGE = {
  heading: 'error-page-heading',
  description: 'error-page-description',
  backToHomeLink: 'error-page-back-to-home',
}

const SKIP_NAVIGATION = {
  skipToMainContent: 'skip-to-main-content',
  skipToNavigation: 'skip-to-navigation',
}

const GALLERY_PREVIEW = {
  activeImage: 'gallery-preview-active-image',
}

const LAYOUT_TOGGLE = {
  listView: 'layout-toggle-list',
  gridView: 'layout-toggle-grid',
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
  galleryPreview: GALLERY_PREVIEW,
  layoutToggle: LAYOUT_TOGGLE,
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
  resume: RESUME,
  navigation: NAVIGATION,
  alert: ALERT,
  externalLinks: EXTERNAL_LINKS,
  misc: MISC,
  southKorea: SOUTH_KOREA,
  country: COUNTRY,
  errorPage: ERROR_PAGE,
  skipNavigation: SKIP_NAVIGATION,
}
