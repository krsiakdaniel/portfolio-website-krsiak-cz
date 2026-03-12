import { EM_DASH, MIDDLE_DOT, NB_HYPHEN } from '@/lib/utils/constants/specialCharacters'

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
    text: `Smartsupp ${NB_HYPHEN}\u00A0Customer\u00A0Care\u00A0Dashboard`,
    duration: '3\u00A0years',
  },
  komercniBanka: {
    text: `Komerční banka ${NB_HYPHEN}\u00A0Website`,
    duration: '10\u00A0months',
  },
  kooperativa: {
    text: `Kooperativa ${NB_HYPHEN}\u00A0Insurance\u00A0Web\u00A0App`,
    duration: '8\u00A0months',
  },
  o2ItServices: {
    text: `O2 IT Services ${NB_HYPHEN}\u00A0AI\u00A0Chat\u00A0Dashboard`,
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

export const OTHER_EXPERIENCE = {
  frontEnd: {
    freelance: {
      company: 'Freelance',
      role: 'Web Developer /\u00A0Consultant',
      description: `${/* YEARS_EXPERIENCE.consultantWebsites */ '5'} years ${MIDDLE_DOT} part-time ${EM_DASH}\u00A0Websites for\u00A0small companies.`,
    },
  },
  wordPress: {
    company: 'Freelance',
    role: 'WordPress Developer /\u00A0Consultant',
    description: `${/* YEARS_EXPERIENCE.consultantWordPress */ '2'} years ${MIDDLE_DOT} part-time ${EM_DASH}\u00A0Websites for\u00A0small companies.`,
  },
  localization: {
    smartsupp: {
      company: 'Smartsupp',
      role: `Localization ${NB_HYPHEN}\u00A0Manager`,
      description: `${/* YEARS_EXPERIENCE.localizationManager */ '2'} years ${EM_DASH} Website localization. 🇬🇧\u00A0🇨🇿\u00A0🇪🇸\u00A0🇫🇷\u00A0🇭🇺\u00A0🇩🇪\u00A0🇮🇹\u00A0🇳🇱\u00A0🇵🇱`,
    },
  },
  qualityAssurance: {
    smartsupp: {
      company: 'Smartsupp',
      role: `QA\u00A0Automation ${NB_HYPHEN}\u00A0Team\u00A0Leader`,
      description: `${/* MONTHS_EXPERIENCE.qaTeamLeaderAtSmartsupp */ '4'} months ${EM_DASH} Set up\u00A0Cypress E2E testing for\u00A0SaaS company.`,
    },
    moravia: {
      company: `RWS ${NB_HYPHEN} Moravia IT`,
      role: `Localization ${NB_HYPHEN}\u00A0Tester`,
      description: `${/* YEARS_EXPERIENCE.localizationTester */ '3'} years ${EM_DASH} Testing Windows\u00A07 +\u00A0Windows\u00A0Store layouts.`,
    },
  },
}
