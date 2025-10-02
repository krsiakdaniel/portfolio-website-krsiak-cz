import { CUSTOMERS_COUNT, FLAGS_LOCALIZATION, TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { EM_DASH, MIDDLE_DOT, NB_HYPHEN } from '@/lib/utils/constants/specialCharacters'
import { GITHUB_URLS } from '@/lib/utils/constants/urls/githubUrls'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { PROJECTS_URLS } from '@/lib/utils/constants/urls/projectsUrls'
import { MONTHS, YEARS } from '@/lib/utils/constants/yearsExperience'

export const TESTIMONIALS = {
  work: {
    losseff: {
      name: 'Inka Losseff',
      job: 'Linguistic Services',
      company: 'Moravia\u00A0IT',
      text: `Daniel is\u00A0strong in\u00A0creating automation utilities, term processing, and\u00A0all kinds of\u00A0tracking.
      He\u00A0has gained a\u00A0lot of\u00A0experience in\u00A0bug processing.`,
    },
    kvapil: {
      name: 'Roman Kvapil',
      job: 'Partner Account Manager',
      company: 'Microsoft',
      text: `I\u00A0can recommend his knowledge and\u00A0perspective about the\u00A0IT globally,
      and\u00A0his behavior as\u00A0a\u00A0person is\u00A0excellent for\u00A0team work.`,
    },
    pridalek: {
      name: 'Vojtech Pridalek',
      job: 'Senior Localization Group Manager',
      company: 'Moravia\u00A0IT',
      text: `Daniel helped team with engineering skills, automating bug management tasks.
      In\u00A0the\u00A0role of\u00A0bug-fixing engineer, he\u00A0bridged linguistic managers and\u00A0production teams.`,
    },
    popa: {
      name: 'Daniel Popa',
      job: 'Service Management Lead',
      company: 'IBM',
      text: `I\u00A0met Daniel Krsiak working on\u00A0different team, he\u00A0was my\u00A0desk\u00A0mate.
        I\u00A0found him passionate about technologies, eager to\u00A0learn all\u00A0the\u00A0time, communicative and\u00A0willing to\u00A0share knowledge.`,
    },
  },
  personal: {
    moorhead: {
      name: 'Jonathan Moorhead',
      job: 'Baptist Pastor',
      company: 'Grace\u00A0Community\u00A0Church',
      text: `I\u00A0have known Daniel almost a\u00A0decade and\u00A0he\u00A0has always proven himself faithful.
        He\u00A0has always been very dedicated to\u00A0his employment, and\u00A0has always been very respectful in\u00A0his\u00A0words and\u00A0opinions.
        I\u00A0am\u00A0very thankful for\u00A0our friendship.`,
      linkText: 'Grace Church',
    },
    castro: {
      name: 'Alexandre Castro',
      job: 'QA Tester',
      company: 'Smartlook',
      text: `On\u00A0a\u00A0personal note, Daniel helped me\u00A0a\u00A0great deal, when I\u00A0started at\u00A0Smartsupp.
        With him, I\u00A0managed to\u00A0learn so\u00A0much on\u00A0many different topics. 
        To this day, I\u00A0still rely on\u00A0Daniel as\u00A0a\u00A0go\u00A0to\u00A0person when I\u00A0need advice on\u00A0specific topics.`,
    },
  },
  fitness: {
    shane: {
      name: 'Shane Duquette',
      job: 'Founder',
      company: 'Bony\u00A0to\u00A0Beastly',
      text: `Daniel has worked for\u00A0me\u00A0as\u00A0an\u00A0online fitness coach for\u00A0almost 10\u00A0years now, consistently and\u00A0with incredible attention to\u00A0detail.
        He's also a\u00A0pleasure to\u00A0work with and\u00A0popular with clients.`,
      linkText: 'Bony to Beastly',
    },
    marco: {
      name: 'Marco Walker-Ng',
      job: 'Founder',
      company: 'Bony\u00A0to\u00A0Beastly',
      text: `I've been working with Daniel for\u00A010\u00A0years managing an\u00A0online exercise forum.
        We help people achieve their fitness goals and\u00A0the\u00A0forum is\u00A0a\u00A0place to\u00A0troubleshoot, find support and\u00A0be\u00A0a\u00A0part of\u00A0a\u00A0community.
        Daniel has taken his life experiences and\u00A0used them to\u00A0become a\u00A0well-loved coach and\u00A0member of\u00A0our community.
        He\u00A0is\u00A0very supportive, proactive and\u00A0has\u00A0helped countless members through hard times.
        We are lucky to\u00A0have him.`,
      linkText: 'Bony to Beastly',
    },
    robert: {
      name: 'Robert Kesterson',
      job: 'Coach',
      company: 'Bony\u00A0to\u00A0Beastly',
      text: `In the\u00A06 years I've worked with Daniel, he\u00A0has always been quick to\u00A0jump in\u00A0and\u00A0help to\u00A0solve every problem.
        His\u00A0generosity and\u00A0creativity are\u00A0inspirational to\u00A0everyone around him.`,
    },
    steve: {
      name: 'Steve McManus',
      job: 'Coach',
      company: 'Bony\u00A0to\u00A0Beastly',
      text: `I have known Daniel for\u00A0over 10\u00A0years and\u00A0during this time we\u00A0have worked together as\u00A0online fitness coaches. Daniel\u00A0is\u00A0very reliable, personable and\u00A0has\u00A0the\u00A0ability to\u00A0inspire and\u00A0motivate others.`,
    },
  },
}

export const BADGES = {
  tests: {
    jest: 'Jest Tests',
    playwright: 'Playwright Tests',
  },
  code: {
    prettier: 'Prettier Check Formatting',
    quality: 'Code Quality',
    codeql: 'CodeQL',
  },
  automation: {
    prLabeler: 'Pull Request Labeler',
    authorAssign: 'Auto Author Assign',
  },
  deployment: {
    netlify: 'Netlify',
    uptime: 'Uptime',
  },
}

export const JOBS = {
  reactDev: {
    title: `Front End ${EM_DASH} React Developer`,
    description: `I\u00A0built a\u00A0customer care dashboard,
      contributed to\u00A0the\u00A0Komerční banka website,
      and\u00A0developed the\u00A0Kooperativa insurance policy management app using JavaScript, TypeScript, React, and\u00A0Redux.`,
  },
  webDev: {
    title: `Front End ${EM_DASH} Web Developer`,
    description: `I\u00A0led the\u00A0development of\u00A0a\u00A0responsive website for\u00A0a\u00A0SaaS company, integrating PHP, JavaScript,
        and\u00A0UX\u00A0design principles to\u00A0create a\u00A0seamless user experience.`,
  },
  qaLead: {
    title: `QA\u00A0Automation ${NB_HYPHEN}\u00A0Team\u00A0Leader`,
    description: `I\u00A0led 2\u00A0QA teams to\u00A0implement Cypress and\u00A0Playwright for\u00A0E2E testing,
        writing tests in\u00A0JavaScript and\u00A0TypeScript to\u00A0ensure high-quality code.
        This role sharpened my\u00A0leadership skills and\u00A0attention to\u00A0detail.`,
  },
  locManager: {
    title: `Localization ${EM_DASH} Manager`,
    description: `I\u00A0worked on\u00A0the\u00A0localization of\u00A0Microsoft Windows\u00A08, and\u00A0Windows\u00A0Phone.
        This role honed my\u00A0project management and\u00A0internationalization expertise.
        I\u00A0also led the\u00A0localization of\u00A0a\u00A0SaaS company site translated into 9\u00A0languages: 🇬🇧 🇨🇿 🇪🇸 🇫🇷 🇭🇺 🇩🇪 🇮🇹 🇳🇱 🇵🇱`,
  },
  locTester: {
    title: `Localization ${EM_DASH} Tester`,
    description: `I\u00A0performed layout testing for\u00A0Microsoft projects,
        including Windows\u00A07 and\u00A0Windows\u00A0Store, ensuring cross-platform user experience quality.
        This role gave me understanding of\u00A0user-centric design.`,
  },
  ibmOperator: {
    title: `IBM ${EM_DASH} Mainframe Operator`,
    description: `Worked as\u00A0a\u00A0customer service representative and\u00A0z/OS mainframe operator, managing mainframe operations and\u00A0providing technical support.
        This role enhanced my\u00A0technical skills and\u00A0customer service abilities.`,
  },
  webCoder: {
    title: `Front End ${EM_DASH} Web Coder`,
    description: `My IT career began with developing websites for\u00A0small businesses, laying the\u00A0foundation for\u00A0my\u00A0career in\u00A0IT.
          This experience taught me the\u00A0importance of\u00A0continuous learning.`,
  },
  ticketAgent: {
    title: `Airport ${EM_DASH} Airline Ticket Agent`,
    description: `Worked as\u00A0an\u00A0airline ticket agent, handling reservations, ticketing, and\u00A0customer service.
          This role developed my\u00A0skills in\u00A0communication and\u00A0problem-solving.`,
  },
  flightInfo: {
    title: `Airport ${EM_DASH} Flights Information`,
    description: `Worked in\u00A0the\u00A0airport's information desk, providing passengers with flight information and\u00A0managing parking tickets.
          This role enhanced my abilities in\u00A0customer service and\u00A0multitasking.`,
  },
  kfc: {
    title: `KFC ${EM_DASH} Frying Chicken`,
    description: `Worked as\u00A0a\u00A0crew member at\u00A0KFC, handling food preparation, customer service, and\u00A0maintaining cleanliness.
          This role developed my\u00A0teamwork and\u00A0multitasking skills.`,
  },
  highSchool: {
    title: `High School ${EM_DASH} Finished as\u00A0Accountant`,
    description: `Completed high school with a\u00A0focus on\u00A0accounting. This education provided a\u00A0strong foundation in\u00A0financial principles and\u00A0practices.`,
  },
}

export const CAREER_PATH = {
  reactDev: 'React Dev',
  webDev: 'Web Dev',
  testing: 'Testing',
  ibm: `IBM ${MIDDLE_DOT} Mainframes`,
  airport: `Airport ${MIDDLE_DOT} Ticket Agent`,
  kfc: 'KFC',
  highSchool: 'High School',
}

export const CAREER_REACT_DEV = {
  smartsupp: {
    text: `Smartsupp ${NB_HYPHEN}\u00A0Dashboard`,
    duration: '3\u00A0years',
  },
  komercniBanka: {
    text: `Komerční banka ${NB_HYPHEN}\u00A0Website`,
    duration: '10\u00A0months',
  },
  kooperativa: {
    text: `Kooperativa ${NB_HYPHEN}\u00A0App`,
    duration: '8\u00A0months',
  },
}

export const CAREER_WEB_DEV = {
  smartsupp: {
    text: `Smartsupp ${NB_HYPHEN}\u00A0Website`,
    years: '1\u00A0year',
  },
  freelanceWeb: {
    text: `Freelance ${NB_HYPHEN}\u00A0Websites`,
    years: '5\u00A0years',
  },
  freelanceCoder: {
    text: `Freelance ${NB_HYPHEN}\u00A0Web\u00A0Coder`,
    years: '1\u00A0year',
  },
}

export const CAREER_TESTING = {
  qaLead: {
    text: `QA\u00A0Automation ${NB_HYPHEN}\u00A0Team\u00A0Lead`,
    years: '1\u00A0year',
  },
  locManager: {
    text: `Localization ${NB_HYPHEN}\u00A0Manager`,
    years: '2\u00A0years',
  },
  locTester: {
    text: `Localization ${NB_HYPHEN}\u00A0Tester`,
    years: '3\u00A0years',
  },
}

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
        url: PROJECTS_URLS.work.moravia,
        dataTestId: DATA_TEST_IDS.links.MORAVIA,
      },
    ],
    customers: '80\u00A0out of\u00A0the\u00A0world top\u00A0100\u00A0brands',
    linkProjectPage: PAGES_URL.work.moravia,
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
        url: PROJECTS_URLS.work.groupon,
        dataTestId: DATA_TEST_IDS.links.GROUPON,
      },
    ],
    customers: `${CUSTOMERS_COUNT.groupon}`,
    linkProjectPage: PAGES_URL.work.groupon,
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
        url: PROJECTS_URLS.work.komercniBanka.branchesAndAtms,
        dataTestId: DATA_TEST_IDS.links.KOMERCNI_BANKA_BRANCHES_AND_ATMS,
      },
      {
        urlText: `Branches &\u00A0ATMs ${NB_HYPHEN}\u00A0Details`,
        url: PROJECTS_URLS.work.komercniBanka.branchesAndAtmsDetails,
        dataTestId: DATA_TEST_IDS.links.KOMERCNI_BANKA_BRANCHES_AND_ATMS_DETAILS,
      },
      {
        urlText: 'Exchange Rates',
        url: PROJECTS_URLS.work.komercniBanka.exchangeRates,
        dataTestId: DATA_TEST_IDS.links.KOMERCNI_BANKA_EXCHANGE_RATES,
      },
      {
        urlText: `Exchange Rates ${NB_HYPHEN}\u00A0Details`,
        url: PROJECTS_URLS.work.komercniBanka.exchangeRatesDetails,
        dataTestId: DATA_TEST_IDS.links.KOMERCNI_BANKA_EXCHANGE_RATES_DETAILS,
      },
    ],
    customers: `${CUSTOMERS_COUNT.komercniBanka}`,
    linkProjectPage: PAGES_URL.work.komercniBanka,
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
        url: PROJECTS_URLS.work.kooperativa,
        dataTestId: DATA_TEST_IDS.links.KOOPERATIVA,
      },
    ],
    customers: `${CUSTOMERS_COUNT.kooperativa}`,
    linkProjectPage: PAGES_URL.work.kooperativa,
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
        url: PROJECTS_URLS.work.smartsupp.web,
        dataTestId: DATA_TEST_IDS.links.SMARTSUPP_WEB,
      },
    ],
    customers: `${CUSTOMERS_COUNT.smartsupp}`,
    linkProjectPage: PAGES_URL.work.smartsupp.web,
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
        url: PROJECTS_URLS.work.smartsupp.help,
        dataTestId: DATA_TEST_IDS.links.SMARTSUPP_HELP,
      },
    ],
    customers: `${CUSTOMERS_COUNT.smartsupp}`,
    linkProjectPage: PAGES_URL.work.smartsupp.help,
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
        url: PROJECTS_URLS.work.smartsupp.dashboard,
        dataTestId: DATA_TEST_IDS.links.SMARTSUPP_DASHBOARD,
      },
    ],
    customers: `${CUSTOMERS_COUNT.smartsupp}`,
    linkProjectPage: PAGES_URL.work.smartsupp.dashboard,
  },
}

export const OTHER_EXPERIENCE = {
  frontEnd: {
    freelance: {
      company: 'Freelance',
      role: 'Web Developer /\u00A0Consultant',
      description: `${YEARS.consultantWebsites} years ${MIDDLE_DOT} part-time ${EM_DASH}\u00A0Websites for\u00A0small companies.`,
    },
  },
  wordPress: {
    company: 'Freelance',
    role: 'WordPress Developer /\u00A0Consultant',
    description: `${YEARS.consultantWordPress} years ${MIDDLE_DOT} part-time ${EM_DASH}\u00A0Websites for\u00A0small companies.`,
  },
  localization: {
    smartsupp: {
      company: 'Smartsupp',
      role: `Localization ${NB_HYPHEN}\u00A0Manager`,
      description: `${YEARS.localizationManager} years ${EM_DASH} Website localization. ${FLAGS_LOCALIZATION.emojis}`,
    },
  },
  qualityAssurance: {
    smartsupp: {
      company: 'Smartsupp',
      role: `QA\u00A0Automation ${NB_HYPHEN}\u00A0Team\u00A0Leader`,
      description: `${MONTHS.qaTeamLeaderAtSmartsupp} months ${EM_DASH} Set up\u00A0Cypress E2E testing for\u00A0SaaS company.`,
    },
    moravia: {
      company: `RWS ${NB_HYPHEN} Moravia IT`,
      role: `Localization ${NB_HYPHEN}\u00A0Tester`,
      description: `${YEARS.localizationTester} years ${EM_DASH} Testing Windows\u00A07 +\u00A0Windows\u00A0Store layouts.`,
    },
  },
}

export const PAGE_HOME = {
  expertise: {
    committedMindset: {
      items: [
        { text: 'Curious and\u00A0always learning' },
        { text: 'Streamlining processes' },
        { text: 'Strong team player' },
      ],
    },
    problemSolving: {
      items: [
        { text: 'Thinking outside the\u00A0box' },
        { text: 'Enjoying brainstorming' },
        { text: 'Adapting to\u00A0changes' },
      ],
    },
    skillsForCompany: {
      items: [
        { text: 'Developing scalable codebases' },
        { text: 'Focus on\u00A0CI/CD automation' },
        { text: 'Prioritizing type safety' },
      ],
    },
  },
}

export const PROJECTS_PERSONAL = {
  krsiak: {
    title: TEXT.description,
    titleHighlight: '',
    items: [
      {
        text: 'I\u00A0needed a\u00A0new website for\u00A0my personal presentation. I\u00A0learned Next.js, and\u00A0used Tailwind CSS.',
      },
    ],
  },
  cryptoMania: {
    title: TEXT.description,
    titleHighlight: '',
    items: [
      {
        text: 'This site was created to\u00A0display cryptocurrencies with the\u00A0ability to\u00A0search for\u00A0them and\u00A0display their current value.',
      },
    ],
  },
}

export const PROJECTS_PERSONAL_OVERVIEW = {
  next: {
    title: 'Portfolio Website',
    company: 'Personal project',
    role: `Front End ${EM_DASH}\u00A0Next.js`,
    description: `
      Personal portfolio website with my\u00A0work and\u00A0skills as\u00A0a\u00A0${TEXT.reactDeveloperNBSP}.
      It\u00A0features production-level code that I\u00A0write.`,
    linkText: 'Project details',
    projectLinks: [
      {
        urlText: 'Website',
        url: PROJECTS_URLS.personal.krsiak,
        dataTestId: DATA_TEST_IDS.links.KRSIAK,
      },
    ],
    linkGitHub: GITHUB_URLS.personal.krsiak,
    personalProjectNote: 'My main coding project.',
    linkProjectPage: PAGES_URL.personal.krsiak,
  },
  react: {
    title: 'CryptoMania',
    company: 'Personal project',
    role: `Front End ${EM_DASH}\u00A0React`,
    description:
      'Crypto currency prices app fetching latest data from CoinGecko\u00A0API. Simple project in\u00A0Chakra\u00A0UI with dark mode.',
    linkText: 'Project details',
    projectLinks: [
      {
        urlText: 'Website',
        url: PROJECTS_URLS.personal.cryptoMania,
        dataTestId: DATA_TEST_IDS.links.CRYPTOMANIA,
      },
    ],
    linkGitHub: GITHUB_URLS.personal.cryptoMania,
    personalProjectNote: 'Project to\u00A0exercise coding.',
    linkProjectPage: PAGES_URL.personal.cryptoMania,
  },
}

export const META_DATA_PAGES = {}

export const META_DATA_PAGES_PROJECTS_WORK = {}

export const META_DATA_PAGES_PROJECTS_PERSONAL = {}

export const TEXT_DATA = {
  ...TESTIMONIALS,
  ...BADGES,
  ...JOBS,
  ...CAREER_PATH,
  ...CAREER_REACT_DEV,
  ...CAREER_TESTING,
  ...CAREER_WEB_DEV,
  ...PROJECTS_WORK,
  ...WORK_PROJECTS_OVERVIEW,
  ...OTHER_EXPERIENCE,
  ...PAGE_HOME,
  ...PROJECTS_PERSONAL,
  ...PROJECTS_PERSONAL_OVERVIEW,
  ...META_DATA_PAGES,
  ...META_DATA_PAGES_PROJECTS_WORK,
  ...META_DATA_PAGES_PROJECTS_PERSONAL,
}
