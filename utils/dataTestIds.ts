const NEXT = 'next'
const PREVIOUS = 'previous'
const PAGE_NAVIGATION = 'page-navigation'
const PERSONAL_PROJECTS = 'personal-projects'
const WORK_EXPERIENCE = 'work-experience'
const HERO_LINK = 'hero-link'

const LINKEDIN = 'linkedin'
const RESUME = 'resume'
const GITHUB = 'github'
const HOMEPAGE = 'homepage'
const ABOUT_ME = 'about-me'
const KRSIAK = 'krsiak'
const CRYPTOMANIA = 'cryptomania'
const KOMERCNI_BANKA = 'komercni-banka'
const SMARTSUPP_WEB = 'smartsupp-web'
const SMARTSUPP_HELP = 'smartsupp-help'
const MORAVIA = 'moravia'
const GROUPON = 'groupon'
const KOOPERATIVA = 'kooperativa'

export const DATA_TEST_IDS = {
  breadcrumbs: 'breadcrumbs',
  gallery: 'gallery',
  header: 'header-logo',
  footer: {
    scrollToTopButton: 'scroll-to-top-button',
    copyright: 'footer-copyright',
    link: 'footer-link',
    statusPage: 'footer-link-status-page',
  },
  menu: {
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
  },
  hero: {
    heading: 'hero-heading',
    linkLinkedIn: `${HERO_LINK}-${LINKEDIN}`,
    linkResume: `${HERO_LINK}-${RESUME}`,
    linkGitHub: `${HERO_LINK}-${GITHUB}`,
    paragraph: 'hero-paragraph',
  },
  page: {
    home: {
      previous: '',
      next: `${PAGE_NAVIGATION}-${NEXT}-${ABOUT_ME}`,
    },
    aboutMe: {
      previous: `${PAGE_NAVIGATION}-${PREVIOUS}-${HOMEPAGE}`,
      next: `${PAGE_NAVIGATION}-${NEXT}-${RESUME}`,
      introduction: 'about-me-introduction',
    },
    resume: {
      previous: `${PAGE_NAVIGATION}-${PREVIOUS}-${ABOUT_ME}`,
      next: `${PAGE_NAVIGATION}-${NEXT}-${WORK_EXPERIENCE}`,
      introduction: 'resume-introduction',
    },
  },
  projects: {
    personal: {
      overview: {
        previous: `${PAGE_NAVIGATION}-${PREVIOUS}-${WORK_EXPERIENCE}`,
        next: '',
      },
      cryptoMania: {
        previous: `${PAGE_NAVIGATION}-${PREVIOUS}-${KRSIAK}`,
        next: '',
      },
      krsiak: {
        previous: `${PAGE_NAVIGATION}-${PREVIOUS}-${PERSONAL_PROJECTS}`,
        next: `${PAGE_NAVIGATION}-${NEXT}-${CRYPTOMANIA}`,
      },
    },
    work: {
      overview: {
        previous: `${PAGE_NAVIGATION}-${PREVIOUS}-${RESUME}`,
        next: `${PAGE_NAVIGATION}-${NEXT}-${PERSONAL_PROJECTS}`,
      },
      kooperativa: {
        previous: `${PAGE_NAVIGATION}-${PREVIOUS}-${KOMERCNI_BANKA}`,
        next: `${PAGE_NAVIGATION}-${NEXT}-${SMARTSUPP_WEB}`,
      },
      groupon: {
        previous: `${PAGE_NAVIGATION}-${PREVIOUS}-${SMARTSUPP_HELP}`,
        next: `${PAGE_NAVIGATION}-${NEXT}-${MORAVIA}`,
      },
      smartsupp: {
        web: {
          previous: `${PAGE_NAVIGATION}-${PREVIOUS}-${KOOPERATIVA}`,
          next: `${PAGE_NAVIGATION}-${NEXT}-${SMARTSUPP_HELP}`,
        },
        dashboard: {
          previous: `${PAGE_NAVIGATION}-${PREVIOUS}-${WORK_EXPERIENCE}`,
          next: `${PAGE_NAVIGATION}-${NEXT}-${KOMERCNI_BANKA}`,
        },
        help: {
          previous: `${PAGE_NAVIGATION}-${PREVIOUS}-${SMARTSUPP_WEB}`,
          next: `${PAGE_NAVIGATION}-${NEXT}-${GROUPON}`,
        },
      },
      komercniBanka: {
        previous: `${PAGE_NAVIGATION}-${PREVIOUS}-${GROUPON}`,
        next: `${PAGE_NAVIGATION}-${NEXT}-${KOOPERATIVA}`,
      },
      moravia: {
        previous: `${PAGE_NAVIGATION}-${PREVIOUS}-${SMARTSUPP_HELP}`,
        next: `${PAGE_NAVIGATION}-${NEXT}-${GROUPON}`,
      },
    },
  },
}
