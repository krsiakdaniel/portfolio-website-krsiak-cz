export const DATA_TEST_IDS = {
  hero: {
    linkLinkedIn: 'hero-link-linkedin',
    linkResume: 'hero-link-resume',
    linkGitHub: 'hero-link-github',
  },
  page: {
    aboutMe: {
      previous: 'page-navigation-previous-homepage',
      next: 'page-navigation-next-resume',
    },
    resume: {
      previous: 'page-navigation-previous-about-me',
      next: 'page-navigation-next-work-experience',
    },
  },
  projects: {
    personal: {
      overview: {
        previous: 'page-navigation-previous-work-experience',
        next: '',
      },
      cryptoMania: {
        previous: 'page-navigation-previous-krsiak',
      },
      krsiak: {
        previous: 'page-navigation-previous-personal-projects',
        next: 'page-navigation-next-cryptomania',
      },
    },
    work: {
      overview: {
        previous: 'page-navigation-previous-resume',
        next: 'page-navigation-next-personal-projects',
      },
      kooperativa: {
        previous: 'page-navigation-previous-komercni-banka',
        next: 'page-navigation-next-smartsupp-web',
      },
      groupon: {
        previous: 'page-navigation-previous-smartsupp-help',
        next: 'page-navigation-next-moravia',
      },
      komercniBanka: {
        previous: 'page-navigation-previous-smartsupp-dashboard',
        next: 'page-navigation-next-kooperativa',
      },
      smartsupp: {
        web: {
          previous: 'page-navigation-previous-kooperativa',
          next: 'page-navigation-next-smartsupp-help',
        },
        dashboard: {
          previous: 'page-navigation-previous-work-experience',
          next: 'page-navigation-next-komercni-banka',
        },
        help: {
          previous: 'page-navigation-previous-smartsupp-web',
          next: 'page-navigation-next-groupon',
        },
      },
      moravia: {
        previous: 'page-navigation-previous-groupon',
        next: '',
      },
    },
  },
}
