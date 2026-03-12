import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { NB_HYPHEN } from '@/lib/utils/constants/specialCharacters'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { PROJECTS_WORK_URLS } from '@/lib/utils/constants/urls/projectsUrls'
import { CUSTOMERS_COUNT } from '../../constants/customers'
import { FLAGS_LOCALIZATION } from '../../constants/iconsEmoji'

export const PROJECTS_WORK = {
  smartsuppWeb: {
    sections: {
      responsibility: {
        title: 'My Job',
        items: [
          "I\u00A0was responsible for\u00A0the\u00A0entire company's Front\u00A0End and\u00A0website presentation.",
        ],
      },
      website: {
        title: 'Developed new website',
        items: ['The\u00A0main company website was built with PHP and\u00A0JavaScript.'],
      },
      docs: {
        title: 'Created new documentation site',
        items: [
          'I\u00A0created a\u00A0documentation site that was running on\u00A0Jekyll, Markdown, and\u00A0Shopify Liquid template language.',
        ],
      },
    },
  },
  smartsuppHelp: {
    sections: {
      responsibility: {
        title: 'My Job',
        items: [
          'I\u00A0was the\u00A0company WordPress\u00A0administrator and\u00A0I\u00A0was responsible for\u00A0the\u00A0website.',
        ],
      },
      tutorials: {
        title: 'Writing new tutorials',
        items: [
          'I\u00A0was writing tutorials for\u00A0the\u00A0company main product chat\u00A0dashboard, taking screenshots and\u00A0creating new content.',
        ],
      },
      localization: {
        title: 'Website localization',
        items: [
          `The\u00A0company had customers from different countries, I\u00A0was responsible for\u00A0the\u00A0localization into 9\u00A0languages. ${FLAGS_LOCALIZATION.emojis}`,
        ],
      },
    },
  },
  smartsuppDashboard: {
    sections: {
      responsibility: {
        title: 'My Job',
        items: [
          'I\u00A0worked for\u00A0a\u00A0company that creates a\u00A0chat solution for\u00A0customer care teams.',
          'The\u00A0product is\u00A0a\u00A0chat box for\u00A0e-commerce and\u00A0regular websites, and\u00A0integrates with an\u00A0email inbox and\u00A0Facebook Messenger, all-in-one messaging platform.',
        ],
      },
      features: {
        title: 'Developed new features',
        items: [
          'I\u00A0participated in\u00A0the\u00A0implementation of\u00A0new features for\u00A0the\u00A0chat application dashboard.',
          'Ranging from new chat features to\u00A0working on\u00A0a\u00A0chatbot page and\u00A0creating graphs for\u00A0statistics.',
          'I\u00A0also updated the\u00A0old JavaScript codebase to\u00A0a\u00A0modern one using REACT with hooks.',
        ],
      },
    },
  },
  moraviaManager: {
    sections: {
      responsibility: {
        title: 'My Job',
        items: ['I\u00A0managed a\u00A0team of\u00A03\u00A0people in\u00A0localization team.'],
      },
      delivery: {
        title: 'Responsibility',
        items: [
          'I\u00A0was responsible for\u00A0translation delivery and\u00A0quality checks for\u00A0Microsoft projects Windows\u00A08 +\u00A0Windows\u00A0Phone.',
        ],
      },
      automation: {
        title: 'QA\u00A0Automation',
        items: [
          'I\u00A0was working on\u00A0automation and\u00A0scripts for\u00A0manual repetitive tasks including filling in\u00A0forms and\u00A0checking translations.',
        ],
      },
    },
  },
  kooperativa: {
    sections: {
      responsibility: {
        title: 'My Job',
        items: [
          'I\u00A0worked for\u00A0Kooperativa, the\u00A02nd biggest insurance company in\u00A0the\u00A0Czech Republic, owned by\u00A0Vienna Insurance Group.',
          'I\u00A0was involved in\u00A0the\u00A0development of\u00A0an\u00A0application that will improve services and\u00A0customer experience of\u00A0over 2\u00A0480\u00A0000+ customers.',
        ],
      },
      features: {
        title: 'Developed new features',
        items: [
          'I\u00A0was part of\u00A0a\u00A0team to\u00A0create a\u00A0comprehensive solution for\u00A0arranging and\u00A0managing insurance contracts.',
          'The\u00A0application is\u00A0designed to\u00A0enhance the\u00A0customer experience while providing employees with a\u00A0modern system that simplifies their work.',
          'I\u00A0worked with TypeScript, React, and\u00A0Redux. I\u00A0used Figma designs to\u00A0develop a\u00A0user interface. I\u00A0also worked with a\u00A0backend developer to\u00A0ensure API integration.',
        ],
      },
    },
  },
  komercniBanka: {
    sections: {
      responsibility: {
        title: 'My Job',
        items: [
          'I\u00A0worked for\u00A0the\u00A03rd biggest bank in\u00A0the\u00A0Czech Republic, Komerční banka, owned by\u00A0Société Générale.',
          `I\u00A0worked on\u00A0a\u00A0website that is\u00A0used by ${CUSTOMERS_COUNT.komercniBanka} customers.`,
        ],
      },
      features: {
        title: 'Developed new features',
        items: [
          'I\u00A0was tasked with creating a\u00A0search page with filters and\u00A0results pagination for\u00A0the\u00A0bank branches, ATM locations, and\u00A0detail sub-pages.',
          'My task was to\u00A0provide an\u00A0easy user experience for\u00A0all customers, using the\u00A0Geolocation API and\u00A0the\u00A0Google Places Autocomplete API, so\u00A0they could find their nearest bank branch or\u00A0ATM.',
          'I\u00A0created an\u00A0Exchange Rates page with rates detail pages.',
        ],
      },
      responsive: {
        title: 'Responsive design',
        items: [
          'I\u00A0was responsible for\u00A0the\u00A0responsive aspects of\u00A0the\u00A0web as\u00A0well.',
          'Making sure it\u00A0works well for\u00A0users across desktop, tablet, and\u00A0mobile platforms.',
        ],
      },
    },
  },
  groupon: {
    sections: {
      responsibility: {
        title: 'My Job',
        items: [
          'I\u00A0worked on\u00A0automation, testing scripts and\u00A0team coordination.',
          `Groupon is\u00A0an\u00A0online marketplace, offering discounts on\u00A0products and\u00A0services, with ${CUSTOMERS_COUNT.groupon} customers.`,
        ],
      },
      role: {
        title: 'My role',
        items: [
          'SDET =\u00A0Software Development Engineer in\u00A0Testing.',
          'In\u00A0testing, it\u00A0is\u00A0an\u00A0IT\u00A0professional who can work equally in\u00A0both development and\u00A0testing.',
        ],
      },
      automation: {
        title: 'Responsibility\u00A0#1:',
        titleHighlight: 'QA\u00A0Automation and\u00A0Testing\u00A0Scripts',
        items: [
          'Setting up\u00A0automation, including Playwright for\u00A0E2E.',
          'Writing E2E tests in\u00A0JavaScript and\u00A0TypeScript.',
          'Coordinating efforts related to\u00A0unit tests and\u00A0integration tests.',
          'Writing documentation for\u00A0developers.',
          'CI/CD pipeline in\u00A0GitHub using Jenkins, for\u00A0unit, integration, and\u00A0E2E tests.',
        ],
      },
      coordination: {
        title: 'Responsibility\u00A0#2:',
        titleHighlight: 'Team Coordination',
        items: [
          'Involved in\u00A0hiring new SDET members for\u00A0QA\u00A0team.',
          'Work across 4\u00A0teams.',
          '3\u00A0DEV teams (15\u00A0developers). Setting priorities for\u00A0writing unit and\u00A0integration tests.',
          '1\u00A0QA team (6\u00A0manual testers). Coordinating regression testing for\u00A0the\u00A0website.',
          'Drive the\u00A0discussion and\u00A0decisions on\u00A0technical topics related to\u00A0the\u00A0teams.',
          'Keeping up-to-date JIRA tasks for\u00A0testing.',
        ],
      },
    },
  },
}

export const WORK_PROJECTS_OVERVIEW = {
  moravia: {
    title: 'Windows',
    company: 'Moravia\u00A0IT',
    role: `QA\u00A0Automation ${NB_HYPHEN}\u00A0Team\u00A0Leader`,
    years: '1 year',
    description:
      'Worked on\u00A0localization for\u00A0the\u00A0Microsoft Windows\u00A08 and\u00A0Windows Phone. I\u00A0had an\u00A0amazing chance to\u00A0be team leader on\u00A0Microsoft products.',
    linkText: 'Project details',
    projectLinks: [
      {
        urlText: 'Website',
        url: PROJECTS_WORK_URLS.workMoraviaExternal,
        dataTestId: DATA_TEST_IDS.links.MORAVIA,
      },
    ],
    customers: '80\u00A0out of\u00A0the\u00A0world top\u00A0100\u00A0brands',
    linkProjectPage: PAGES_URL.workMoravia,
  },
  groupon: {
    title: `E${NB_HYPHEN}Commerce ${NB_HYPHEN}\u00A0Marketplace`,
    company: 'Groupon',
    role: `QA\u00A0Automation ${NB_HYPHEN}\u00A0Team\u00A0Leader`,
    years: '4 months',
    description:
      'I\u00A0was responsible for\u00A0setting up\u00A0a\u00A0new QA\u00A0team, hiring and\u00A0managing people. Setting up\u00A0QA\u00A0processes, writing test plans, and\u00A0testing scripts.',
    linkText: 'Project details',
    projectLinks: [
      {
        urlText: 'Website',
        url: PROJECTS_WORK_URLS.workGrouponExternal,
        dataTestId: DATA_TEST_IDS.links.GROUPON,
      },
    ],
    customers: `${CUSTOMERS_COUNT.groupon}`,
    linkProjectPage: PAGES_URL.workGroupon,
  },
  komercniBanka: {
    title: `Commerce Bank ${NB_HYPHEN}\u00A0Website`,
    company: 'Komerční banka',
    role: 'React Developer',
    years: '10\u00A0months',
    description:
      'I\u00A0created a\u00A0search page for\u00A0ATMs and\u00A0branches, with their detail pages. I\u00A0also developed an\u00A0Exchange rates page with details for\u00A0each currency.',
    linkText: 'Project details',
    projectLinks: [
      {
        urlText: `Branches &\u00A0ATMs`,
        url: PROJECTS_WORK_URLS.workKomercniBankaBranchesAndAtmsExternal,
        dataTestId: DATA_TEST_IDS.links.KOMERCNI_BANKA_BRANCHES_AND_ATMS,
      },
      {
        urlText: `Branches &\u00A0ATMs ${NB_HYPHEN}\u00A0Details`,
        url: PROJECTS_WORK_URLS.workKomercniBankaBranchesDetailsExternal,
        dataTestId: DATA_TEST_IDS.links.KOMERCNI_BANKA_BRANCHES_AND_ATMS_DETAILS,
      },
      {
        urlText: 'Exchange Rates',
        url: PROJECTS_WORK_URLS.workKomercniBankaExchangeRatesExternal,
        dataTestId: DATA_TEST_IDS.links.KOMERCNI_BANKA_EXCHANGE_RATES,
      },
      {
        urlText: `Exchange Rates ${NB_HYPHEN}\u00A0Details`,
        url: PROJECTS_WORK_URLS.workKomercniBankaExchangeDetailsExternal,
        dataTestId: DATA_TEST_IDS.links.KOMERCNI_BANKA_EXCHANGE_RATES_DETAILS,
      },
    ],
    customers: `${CUSTOMERS_COUNT.komercniBanka}`,
    linkProjectPage: PAGES_URL.workKomercniBanka,
  },
  kooperativa: {
    title: `Insurance Company ${NB_HYPHEN}\u00A0App`,
    company: 'Kooperativa',
    role: 'React Developer',
    years: '8\u00A0months',
    description: `I\u00A0worked on\u00A0an\u00A0application for\u00A0managing insurance policies for\u00A0citizens. Kooperativa has over ${CUSTOMERS_COUNT.kooperativa} customers in\u00A0Czech\u00A0Republic.`,
    linkText: 'Project details',
    projectLinks: [
      {
        urlText: 'Website',
        url: PROJECTS_WORK_URLS.workKooperativaExternal,
        dataTestId: DATA_TEST_IDS.links.KOOPERATIVA,
      },
    ],
    customers: `${CUSTOMERS_COUNT.kooperativa}`,
    linkProjectPage: PAGES_URL.workKooperativa,
  },
  frontEnd: {
    title: `SaaS Company ${NB_HYPHEN}\u00A0Website`,
    company: 'Smartsupp',
    role: 'Front End Developer',
    years: '1\u00A0year',
    description:
      'I\u00A0created a\u00A0SaaS company website and\u00A0was responsible for\u00A0the\u00A0Front End. I\u00A0worked with the\u00A0main UX designer on\u00A0a\u00A0new brand color theme.',
    linkText: 'Project details',
    projectLinks: [
      {
        urlText: 'Website',
        url: PROJECTS_WORK_URLS.workSmartsuppWebExternal,
        dataTestId: DATA_TEST_IDS.links.SMARTSUPP_WEB,
      },
    ],
    customers: `${CUSTOMERS_COUNT.smartsupp}`,
    linkProjectPage: PAGES_URL.workSmartsuppWeb,
  },
  wordPress: {
    title: `SaaS Company ${NB_HYPHEN}\u00A0HELP Website`,
    company: 'Smartsupp',
    role: 'Admin &\u00A0Content Writer',
    years: '6\u00A0months',
    description:
      "Localization of\u00A0the\u00A0company's HELP website into 9\u00A0languages. I\u00A0was\u00A0also\u00A0writing tutorials and\u00A0creating content.",
    linkText: 'Project details',
    projectLinks: [
      {
        urlText: 'Website',
        url: PROJECTS_WORK_URLS.workSmartsuppHelpExternal,
        dataTestId: DATA_TEST_IDS.links.SMARTSUPP_HELP,
      },
    ],
    customers: `${CUSTOMERS_COUNT.smartsupp}`,
    linkProjectPage: PAGES_URL.workSmartsuppHelp,
  },
  reactDashboard: {
    title: `SaaS Company\u00A0${NB_HYPHEN}\u00A0Dashboard`,
    company: 'Smartsupp',
    role: 'React Developer',
    years: '3\u00A0years 2\u00A0months',
    description:
      'I\u00A0worked on\u00A0chat dashboard features and\u00A0redesigned the\u00A0app\u00A0settings. I\u00A0was involved in\u00A0UX team learning about user needs.',
    linkText: 'Project details',
    projectLinks: [
      {
        urlText: 'Website',
        url: PROJECTS_WORK_URLS.workSmartsuppDashboardExternal,
        dataTestId: DATA_TEST_IDS.links.SMARTSUPP_DASHBOARD,
      },
    ],
    customers: `${CUSTOMERS_COUNT.smartsupp}`,
    linkProjectPage: PAGES_URL.workSmartsuppDashboard,
  },
}
