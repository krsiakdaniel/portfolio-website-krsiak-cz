import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { MONTHS, YEARS } from '@/lib/utils/constants/yearsExperience'
import { TEXT } from '@/localization/english'
import { SHARED } from './english'

export const TESTIMONIALS = {
  personal: {
    moorhead: {
      name: 'Jonathan Moorhead',
      job: 'Baptist Pastor ~\u00A0Grace\u00A0Community\u00A0Church',
      text: `I have known Daniel for almost a decade and he has always proven himself faithful.
      He has always been very dedicated to his employment, and has always been very respectful in his words and opinions.
      I am very thankful for our friendship.`,
    },
    castro: {
      name: 'Alexandre Castro',
      job: 'QA Tester and Content Manager ~\u00A0Smartlook',
      text: `On a personal note, Daniel helped me a great deal, when I started at Smartsupp. With him, I managed to learn so much on many different topics. 
      To this day, I still rely on Daniel as a go-to person when I need advice on specific topics.`,
    },
  },
  work: {
    losseff: {
      name: 'Inka Losseff',
      job: 'Linguistic Services ~\u00A0Moravia\u00A0IT',
      text: `Daniel is strong in creating automation utilities, term processing, all kinds of\u00A0tracking.
      He has gained a lot of\u00A0experience in\u00A0bug processing.`,
    },
    kvapil: {
      name: 'Roman Kvapil',
      job: 'Partner Account Manager ~\u00A0Microsoft',
      text: `I can recommend his knowledge and perspective about the IT globally,
      and his behavior as a\u00A0person are excellent for team work.`,
    },
    pridalek: {
      name: 'Vojtech Pridalek',
      job: 'Senior Localization Group Manager ~\u00A0Moravia\u00A0IT',
      text: `Daniel helped team with engineering skills, automating bug management tasks.
      In\u00A0the\u00A0role of\u00A0bug-fixing engineer, he bridged linguistic managers and\u00A0production teams.`,
    },
    popa: {
      name: 'Daniel Popa',
      job: 'Service Management Lead ~\u00A0IBM',
      text: `I met Daniel Krsiak working on different team, he\u00A0was my desk-mate.
      I found him passionate about technologies, eager to learn all the time, communicative and willing to share knowledge.`,
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
    dependabot: 'Dependabot',
  },
  deployment: {
    netlify: 'Netlify',
    uptime: 'Uptime',
  },
}

export const JOBS = {
  reactDev: {
    title: `Front End ${SHARED.emDash} React Developer`,
    description: `I built a customer care dashboard,
      contributed to the\u00A0Komerční banka website,
      and\u00A0developed the\u00A0Kooperativa insurance policy management app using JavaScript, TypeScript, React, and\u00A0Redux.`,
  },
  webDev: {
    title: `Front End ${SHARED.emDash} Web Developer`,
    description: `I led the development of a\u00A0responsive website for\u00A0a\u00A0SaaS company, integrating PHP, JavaScript,
        and\u00A0UX\u00A0design principles to create a\u00A0seamless user experience.`,
  },
  qaLead: {
    title: `QA Automation ${SHARED.emDash} Team Leader`,
    description: `I led 2 QA teams to implement Cypress and\u00A0Playwright for E2E testing,
        writing tests in JavaScript and\u00A0TypeScript to ensure high-quality code.
        This role sharpened my leadership skills and attention to detail.`,
  },
  locManager: {
    title: `Localization ${SHARED.emDash} Manager`,
    description: `I worked on the localization of Microsoft Windows\u00A08, and\u00A0Windows\u00A0Phone.
        This role honed my\u00A0project management and\u00A0internationalization expertise.
        I also led the localization of\u00A0a\u00A0SaaS company site translated into 9\u00A0languages: 🇬🇧 🇨🇿 🇪🇸 🇫🇷 🇭🇺 🇩🇪 🇮🇹 🇳🇱 🇵🇱`,
  },
  locTester: {
    title: `Localization ${SHARED.emDash} Tester`,
    description: `I performed layout testing for Microsoft projects,
        including Windows\u00A07 and\u00A0Windows\u00A0Store, ensuring cross-platform user experience quality.
        This role gave me understanding of\u00A0user-centric design.`,
  },
  ibmOperator: {
    title: `IBM ${SHARED.emDash} Mainframe Operator`,
    description: `Worked as a customer service representative and z/OS mainframe operator, managing mainframe operations and providing technical support.
        This role enhanced my technical skills and customer service abilities.`,
  },
  webCoder: {
    title: `Front End ${SHARED.emDash} Web Coder`,
    description: `My IT career began with developing websites for\u00A0small businesses, laying the\u00A0foundation for\u00A0my\u00A0career in\u00A0IT.
          This experience taught me the importance of\u00A0continuous learning.`,
  },
  ticketAgent: {
    title: `Airport ${SHARED.emDash} Airline Ticket Agent`,
    description: `Worked as an airline ticket agent, handling reservations, ticketing, and customer service.
          This role developed my skills in communication and problem-solving.`,
  },
  flightInfo: {
    title: `Airport ${SHARED.emDash} Flights Information`,
    description: `Worked in the airport's information desk, providing passengers with flight information and managing parking lot tickets.
          This role enhanced my abilities in customer service and multitasking.`,
  },
  kfc: {
    title: `KFC ${SHARED.emDash} Frying Chicken`,
    description: `Worked as a crew member at KFC, handling food preparation, customer service, and maintaining cleanliness.
          This role developed my teamwork and multitasking skills.`,
  },
  highSchool: {
    title: `High School ${SHARED.emDash} Finished as Accountant`,
    description: `Completed high school with a focus on accounting. This education provided a strong foundation in financial principles and practices.`,
  },
}

export const CAREER_PATH = {
  reactDev: 'React Dev',
  webDev: 'Web Dev',
  testing: 'Testing',
  ibm: `IBM ${SHARED.middleDot} Mainframes`,
  airport: `Airport ${SHARED.middleDot} Ticket Agent`,
  kfc: 'KFC',
  highSchool: 'High School',
}

export const CAREER_REACT_DEV = {
  smartsupp: {
    text: 'Smartsupp - Dashboard',
    duration: '3 years',
  },
  kb: {
    text: 'Komerční banka - Website',
    duration: '10 months',
  },
  koop: {
    text: 'Kooperativa - App',
    duration: '8 months',
  },
}

export const CAREER_TESTING = {
  qaLead: {
    text: 'QA Automation - Team Lead',
    years: '1 year',
  },
  locManager: {
    text: 'Localization - Manager',
    years: '2 years',
  },
  locTester: {
    text: 'Localization - Tester',
    years: '3 years',
  },
}

export const CAREER_WEB_DEV = {
  smartsupp: {
    text: 'Smartsupp - Website',
    years: '1 year',
  },
  freelanceWeb: {
    text: 'Freelance - Websites',
    years: '5 years',
  },
  freelanceCoder: {
    text: 'Freelance - Web Coder',
    years: '1 year',
  },
}

export const PROJECTS_WORK = {
  smartsuppWeb: {
    sections: {
      responsibility: {
        title: 'My Job',
        items: ["I was responsible for the entire company's Front End and website presentation."],
      },
      website: {
        title: 'Developed new website',
        items: ['The main company website was built with PHP and JavaScript.'],
      },
      docs: {
        title: 'Created new documentation site',
        items: [
          'I created a documentation site that was running on Jekyll, Markdown, and Shopify Liquid template language, and later the site was moved to VuePress.',
        ],
      },
    },
  },
  smartsuppWordPress: {
    sections: {
      responsibility: {
        title: 'My Job',
        items: ['I was the company WordPress administrator and I was responsible for the website.'],
      },
      tutorials: {
        title: 'Writing new tutorials',
        items: [
          'I was writing tutorials for the company main product chat dashboard, taking screenshots and creating new content.',
        ],
      },
      localization: {
        title: 'Website localization',
        items: [
          'The company had customers from different countries, I was responsible for the localization into 9 languages. 🇬🇧 🇨🇿 🇪🇸 🇫🇷 🇭🇺 🇩🇪 🇮🇹 🇳🇱 🇵🇱',
        ],
      },
    },
  },
  smartsuppHelp: {
    sections: {
      responsibility: {
        title: 'My Job',
        items: [
          'I worked for a company that creates a chat solution for customer care teams.',
          'The product is a chat box for e-commerce and regular websites, and integrates with an email inbox and Facebook Messenger, all-in-one messaging platform.',
        ],
      },
      features: {
        title: 'Developed new features',
        items: [
          'I participated in the implementation of new features for the chat application dashboard.',
          'Ranging from new chat features to working on a chatbot page and creating graphs for statistics.',
          'I also updated the old JavaScript codebase to a modern one using REACT with hooks.',
        ],
      },
    },
  },
  smartsuppDashboard: {
    sections: {
      responsibility: {
        title: 'My Job',
        items: [
          'I worked for a company that creates a chat solution for customer care teams.',
          'The product is a chat box for e-commerce and regular websites, and integrates with an email inbox and Facebook Messenger, all-in-one messaging platform.',
        ],
      },
      features: {
        title: 'Developed new features',
        items: [
          'I participated in the implementation of new features for the chat application dashboard.',
          'Ranging from new chat features to working on a chatbot page and creating graphs for statistics.',
          'I also updated the old JavaScript codebase to a modern one using REACT with hooks.',
        ],
      },
    },
  },
  moraviaManager: {
    sections: {
      responsibility: {
        title: 'My Job',
        items: ['I managed a team of 3 people in localization team.'],
      },
      delivery: {
        title: 'Responsibility',
        items: [
          'I was responsible for translation delivery and quality checks for Microsoft projects Windows 8 + Windows Phone.',
        ],
      },
      automation: {
        title: 'QA Automation',
        items: [
          'I was working on automation and scripts for manual repetitive tasks including filling in forms and checking translations.',
        ],
      },
    },
  },
  kooperativa: {
    sections: {
      responsibility: {
        title: 'My Job',
        items: [
          'I worked for Kooperativa, the 2nd biggest insurance company in the Czech Republic, owned by Vienna Insurance Group.',
          'I was involved in the development of application that will improve services and customer experience of over 2 480 000+ customers.',
        ],
      },
      features: {
        title: 'Developed new features',
        items: [
          'I was part of team to create comprehensive solution for arranging and managing insurance contracts.',
          'The application is designed to enhance the customer experience while providing employees with a modern system that simplifies their work.',
          'I worked with TypeScript, React, and Redux. I used Figma designs to develop a user interface. I also worked with a backend developer to ensure API integration.',
        ],
      },
    },
  },
  kb: {
    sections: {
      responsibility: {
        title: 'My Job',
        items: [
          'I worked for the 3rd biggest bank in the Czech Republic, Komerční banka, owned by Société Générale.',
          'I worked on a website that is used by 2 000 000+ customers.',
        ],
      },
      features: {
        title: 'Developed new features',
        items: [
          'I was tasked with creating a search page, with filters and results pagination for the bank branches and ATM locations and detail sub-pages.',
          'My task was to provide an easy user experience for all customers, using the Geolocation API and the Google Places Autocomplete API, so they could find their nearest bank branch or ATM.',
          'I created an Exchange Rates page with rates detail pages.',
        ],
      },
      responsive: {
        title: 'Responsive design',
        items: [
          'I was responsible for the responsive aspects of the web as well.',
          'Making sure it works well for users across desktop, tablet, and mobile platforms.',
        ],
      },
    },
  },
  groupon: {
    sections: {
      responsibility: {
        title: 'My Job',
        items: [
          'I worked on automation, testing scripts and team coordination.',
          'Groupon is an online marketplace, offering discounts on products and services, with 17 million customers.',
        ],
      },
      role: {
        title: 'My role',
        items: [
          'SDET = Software Development Engineer in Testing.',
          'In testing, it is an IT professional who can work equally in both development and testing.',
        ],
      },
      automation: {
        title: 'Responsibility #1:',
        titleHighlight: 'QA Automation and\u00A0Testing Scripts',
        items: [
          'Setting up automation, including Playwright for E2E.',
          'Writing E2E tests in JavaScript and TypeScript.',
          'Coordinating efforts related to unit tests and integration tests.',
          'Writing documentation for developers.',
          'CI/CD pipeline in GitHub using Jenkins, for unit, integration, and E2E tests.',
        ],
      },
      coordination: {
        title: 'Responsibility #2:',
        titleHighlight: 'Team Coordination',
        items: [
          'Involved in hiring new SDET members for QA team.',
          'Work across 4 teams.',
          '3 DEV teams (15 developers). Setting priorities for writing unit and integration tests.',
          '1 QA team (6 manual testers). Coordinating regression testing for the website.',
          'Drive the discussion and decisions on technical topics related to the teams.',
          'Keeping up-to-date JIRA tasks for testing.',
        ],
      },
    },
  },
}

export const WORK_PROJECTS_OVERVIEW = {
  moravia: {
    title: 'Windows',
    company: 'RWS - Moravia IT',
    role: 'QA Automation - Team Leader',
    years: '1 year',
    description:
      'Worked\u00A0on\u00A0localization testing for Microsoft Windows 8 + Windows Phone. I\u00A0had\u00A0an\u00A0amazing chance to be team leader on Microsoft products.',
    linkText: 'Project details',
    projectLinks: [{ urlText: 'Website', url: 'https://www.rws.com/', dataTestId: 'rws' }],
    customers: '80 out of the world top 100 brands',
    linkProjectPage: PAGES_URL.work.moravia,
  },
  groupon: {
    title: 'E-Commerce - Marketplace',
    company: 'Groupon',
    role: 'QA Automation - Team Leader',
    years: '4 months',
    description:
      'I was responsible setting up new QA team, hiring and managing people. Setting up QA processes, writing test plans, and testing scripts.',
    linkText: 'Project details',
    projectLinks: [{ urlText: 'Website', url: 'https://www.groupon.com/', dataTestId: 'groupon' }],
    customers: '17 million customers',
    linkProjectPage: PAGES_URL.work.groupon,
  },
  komercniBanka: {
    title: 'Commerce Bank - Website',
    company: 'Komerční banka',
    role: 'React Developer',
    years: '10\u00A0months',
    description:
      'I created search page for ATM and branches, with their detail pages. And\u00A0also Exchange rates page with details for each currency.',
    linkText: 'Project details',
    projectLinks: [
      {
        urlText: 'Branches & ATMs',
        url: 'https://www.kb.cz/en/branches-and-atms',
        dataTestId: 'branches-atms',
      },
      {
        urlText: 'Branches & ATMs - Details',
        url: 'https://www.kb.cz/en/branches-and-atms/branches/brno-nam-svobody-1',
        dataTestId: 'branches-atms-details',
      },
      {
        urlText: 'Exchange Rates',
        url: 'https://www.kb.cz/en/exchange-rates',
        dataTestId: 'exchange-rates',
      },
      {
        urlText: 'Exchange Rates - Details',
        url: 'https://www.kb.cz/en/exchange-rates/exchange-detail?curr=CHF&date=2024-12-27T07:00:00',
        dataTestId: 'exchange-rates-details',
      },
    ],
    customers: '2 000 000+',
    linkProjectPage: PAGES_URL.work.komercniBanka,
  },
  kooperativa: {
    title: 'Insurance Company - App',
    company: 'Kooperativa',
    role: 'React Developer',
    years: '8\u00A0months',
    description:
      'I worked on an application for managing insurance policies for citizens. Kooperativa has over 2 480 000+ customers in Czech Republic.',
    linkText: 'Project details',
    projectLinks: [
      {
        urlText: 'Website',
        url: 'https://www.koop.cz/pojisteni/pojisteni-majetku',
        dataTestId: 'kooperativa',
      },
    ],
    customers: '2 480 000+',
    linkProjectPage: PAGES_URL.work.kooperativa,
  },
  frontEnd: {
    title: 'SaaS Company - Website',
    company: 'Smartsupp',
    role: 'Front End Developer',
    years: '1\u00A0year',
    description:
      'I created SaaS company website and was responsible for Front End. I worked with the main UX designer on new brand color theme.',
    linkText: 'Project details',
    projectLinks: [
      { urlText: 'Website', url: 'https://www.smartsupp.com/', dataTestId: 'smartsupp-web' },
    ],
    customers: '100 000+',
    linkProjectPage: PAGES_URL.work.smartsupp.web,
  },
  wordPress: {
    title: 'SaaS Company - HELP Website',
    company: 'Smartsupp',
    role: 'Admin &\u00A0Content Writer',
    years: '6\u00A0months',
    description:
      'Localization of the company HELP website into 9 languages. I\u00A0was\u00A0also\u00A0writing tutorials and creating content.',
    linkText: 'Project details',
    projectLinks: [
      { urlText: 'Website', url: 'https://www.smartsupp.com/', dataTestId: 'smartsupp-help' },
    ],
    customers: '100 000+',
    linkProjectPage: PAGES_URL.work.smartsupp.help,
  },
  reactDashboard: {
    title: 'SaaS Company - Dashboard',
    company: 'Smartsupp',
    role: 'React Developer',
    years: '3\u00A0years 2\u00A0months',
    description: "I was responsible for the entire company's Front End and website presentation.",
    linkText: 'Project details',
    projectLinks: [
      {
        urlText: 'Website',
        url: 'https://www.smartsupp.com/live-chat-for-customer-care-teams/',
        dataTestId: 'smartsupp-dashboard',
      },
    ],
    customers: '100 000+',
    linkProjectPage: PAGES_URL.work.smartsupp.dashboard,
  },
}

export const OTHER_EXPERIENCE = {
  frontEnd: {
    freelance: {
      company: 'Freelance',
      role: 'Web Developer /\u00A0Consultant',
      description: `${YEARS.consultantWebsites} years ${SHARED.middleDot} part-time ${SHARED.emDash} Websites for small companies.`,
    },
  },
  wordPress: {
    company: 'Freelance',
    role: 'WordPress Developer /\u00A0Consultant',
    description: `${YEARS.consultantWordPress} years ${SHARED.middleDot} part-time ${SHARED.emDash} Websites for small companies.`,
  },
  localization: {
    smartsupp: {
      company: 'Smartsupp',
      role: 'Localization - Manager',
      description: `${YEARS.localizationManager} years ${SHARED.emDash} Website localization. 🇬🇧 🇨🇿 🇪🇸 🇫🇷 🇭🇺 🇩🇪 🇮🇹 🇳🇱 🇵🇱`,
    },
  },
  qualityAssurance: {
    smartsupp: {
      company: 'Smartsupp',
      role: 'QA Automation - Team Leader',
      description: `${MONTHS.qaTeamLeaderAtSmartsupp} months ${SHARED.emDash} Set up Cypress E2E testing for SaaS company.`,
    },
    moravia: {
      company: 'RWS - Moravia IT',
      role: 'Localization - Tester',
      description: `${YEARS.localizationTester} years ${SHARED.emDash} Testing Windows 7 + Windows Store layouts.`,
    },
  },
}

export const PAGE_HOME = {
  expertise: {
    committedMindset: {
      items: [
        { text: 'Curious and always learning' },
        { text: 'Streamlining processes' },
        { text: 'Strong team player' },
      ],
    },
    problemSolving: {
      items: [
        { text: 'Enjoying brainstorming sessions' },
        { text: 'Thinking outside the box' },
        { text: 'Adapting to changes' },
      ],
    },
    skillsForCompany: {
      items: [
        { text: 'Developing scalable codebases' },
        { text: 'Focus on CI/CD automation' },
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
        text: 'I needed a new website for my personal presentation. I learnt Next.js, and used Tailwind CSS.',
      },
    ],
  },
  cryptoMania: {
    title: TEXT.description,
    titleHighlight: '',
    items: [
      {
        text: 'This site was created to display cryptocurrencies with the ability to search for them and display their current value.',
      },
    ],
  },
}

export const PROJECTS_PERSONAL_OVERVIEW = {
  react: {
    title: 'CryptoMania',
    company: 'Personal project',
    role: 'Front End - React',
    description:
      'Crypto currency prices app fetching latest data from CoinGecko API. This\u00A0is very small project in Chakra UI with dark mode.',
    linkText: 'Project details',
    projectLinks: [
      {
        urlText: 'Website',
        url: 'https://cryptocurrency-prices-one.vercel.app/',
        dataTestId: 'cryptomania',
      },
    ],
    linkGitHub: 'https://github.com/krsiakdaniel/cryptocurrency-prices',
    personalProjectNote: 'Project to exercise coding.',
    linkProjectPage: PAGES_URL.personal.cryptoMania,
  },
  next: {
    title: 'Portfolio Website',
    company: 'Personal project',
    role: 'Front End - Next.js',
    description:
      'My personal portfolio website to showcase my work and skills I have. Production level code that I code as React Developer.',
    linkText: 'Project details',
    projectLinks: [{ urlText: 'Website', url: 'https://krsiak.cz/', dataTestId: 'krsiak' }],
    linkGitHub: 'https://github.com/krsiakdaniel/portfolio-website-krsiak-cz',
    personalProjectNote: 'My main coding project.',
    linkProjectPage: PAGES_URL.personal.krsiak,
  },
}

// TODO: Finish moving texts here from meta data files
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
