import { FLAGS_LOCALIZATION } from '@/localization'

import { EM_DASH, MIDDLE_DOT, NB_HYPHEN } from '@/lib/utils/constants/specialCharacters'
import { MONTHS_EXPERIENCE, YEARS_EXPERIENCE } from '@/lib/utils/constants/yearsExperience'

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
      description: `${YEARS_EXPERIENCE.consultantWebsites} years ${MIDDLE_DOT} part-time ${EM_DASH}\u00A0Websites for\u00A0small companies.`,
    },
  },
  wordPress: {
    company: 'Freelance',
    role: 'WordPress Developer /\u00A0Consultant',
    description: `${YEARS_EXPERIENCE.consultantWordPress} years ${MIDDLE_DOT} part-time ${EM_DASH}\u00A0Websites for\u00A0small companies.`,
  },
  localization: {
    smartsupp: {
      company: 'Smartsupp',
      role: `Localization ${NB_HYPHEN}\u00A0Manager`,
      description: `${YEARS_EXPERIENCE.localizationManager} years ${EM_DASH} Website localization. ${FLAGS_LOCALIZATION.emojis}`,
    },
  },
  qualityAssurance: {
    smartsupp: {
      company: 'Smartsupp',
      role: `QA\u00A0Automation ${NB_HYPHEN}\u00A0Team\u00A0Leader`,
      description: `${MONTHS_EXPERIENCE.qaTeamLeaderAtSmartsupp} months ${EM_DASH} Set up\u00A0Cypress E2E testing for\u00A0SaaS company.`,
    },
    moravia: {
      company: `RWS ${NB_HYPHEN} Moravia IT`,
      role: `Localization ${NB_HYPHEN}\u00A0Tester`,
      description: `${YEARS_EXPERIENCE.localizationTester} years ${EM_DASH} Testing Windows\u00A07 +\u00A0Windows\u00A0Store layouts.`,
    },
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
  ...OTHER_EXPERIENCE,
  ...META_DATA_PAGES,
  ...META_DATA_PAGES_PROJECTS_WORK,
  ...META_DATA_PAGES_PROJECTS_PERSONAL,
}
