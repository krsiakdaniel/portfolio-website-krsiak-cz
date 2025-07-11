import { COUNTRY } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { EM_DASH, EN_DASH } from '@/lib/utils/constants/specialCharacters'
import { YEARS } from '@/lib/utils/constants/yearsExperience'

export const ICON_EMOJI = {
  latinCross: '✝️',
  starAndCrescent: '☪️',
  flagCzechRepublic: '🇨🇿',
  flagUnitedKingdom: '🇬🇧',
  flagSpain: '🇪🇸',
  flagFrance: '🇫🇷',
  flagHungary: '🇭🇺',
  flagGermany: '🇩🇪',
  flagItaly: '🇮🇹',
  flagNetherlands: '🇳🇱',
  flagPoland: '🇵🇱',
  flagSlovakia: '🇸🇰',
  flagAlandIslands: '🇦🇽',
  flagSouthKorea: '🇰🇷',
  flagJapan: '🇯🇵',
  house: '🏠',
  moneyBag: '💰',
  rocket: '🚀',
  speechBalloon: '💬',
  bank: '🏦',
  umbrellaWithRainDrops: '☔',
  laptop: '💻',
  books: '📚',
  shoppingCart: '🛒',
  globeShowingAmericas: '🌎',
  globeShowingEuropeAfrica: '🌍',
  memo: '📝',
  ghost: '👻',
  verticalTrafficLight: '🚦',
  desktopComputer: '🖥️',
  robot: '🤖',
  star: '⭐',
  writingHand: '✍️',
  foldedHands: '🙏',
  church: '⛪',
  atomSymbol: '⚛️',
  cog: '⚙️',
  artistPalette: '🎨',
  officeBuilding: '🏢',
  airplane: '✈️',
  poultryLeg: '🍗',
  link: '🔗',
  barChart: '📊',
  hammerAndWrench: '🛠️',
  manLiftingWeights: '🏋️‍♂️',
  personLiftingWeights: '🏋️',
  flexedBiceps: '💪',
  personFlexingBicepsLightSkinTone: '💪🏻',
  manWalking: '🚶‍♂️',
  sun: '☀️',
  wavingHand: '👋',
  ninja: '🥷',
  manTechnologist: {
    lightSkinTone: '👨🏻‍💻',
  },
  man: {
    lightSkinTone: '👨🏻',
    officeWorker: '👨‍💼',
  },
  woman: {
    officeWorker: '👩‍💼',
  },
  evergreenTree: '🌲',
  christmasTree: '🎄',
  mountain: '⛰️',
  snowyMountain: '🏔️',
  nature: {
    forest: '🌲🌲',
    christmasForest: '🎄🎄',
    mountainAndTree: '⛰️🌲',
    winterMountainAndTree: '🏔️🌲',
    christmasMountainAndTree: '🏔️🎄',
  },
  moon: {
    newMoon: '🌑',
    waxingCrescent: '🌒',
    firstQuarter: '🌓',
    waxingGibbous: '🌔',
    fullMoon: '🌕',
    waningGibbous: '🌖',
    lastQuarter: '🌗',
    waningCrescent: '🌘',
  },
  cat: {
    ruzenka: '😺',
    nufka: '😼',
  },
}

export const SHARED = {
  opensInNewTab: 'Opens in a new tab',
  or: 'or',
  and: 'and',
  but: 'but',
  customers: 'customers.',
  githubRepository: 'GitHub Repository',
  year: 'year',
  years: 'years',
  month: 'month',
  months: 'months',
}

export const CUSTOMERS_COUNT = {
  smartsupp: '100\u00A0000+',
  groupon: '17\u00A0000\u00A0000+',
  komercniBanka: '2\u00A0000\u00A0000+',
  kooperativa: '2\u00A0480\u00A0000+',
}

export const FLAGS_LOCALIZATION = {
  emojis: `${ICON_EMOJI.flagUnitedKingdom}\u00A0${ICON_EMOJI.flagCzechRepublic}\u00A0${ICON_EMOJI.flagSpain}\u00A0${ICON_EMOJI.flagFrance}\u00A0${ICON_EMOJI.flagHungary}\u00A0${ICON_EMOJI.flagGermany}\u00A0${ICON_EMOJI.flagItaly}\u00A0${ICON_EMOJI.flagNetherlands}\u00A0${ICON_EMOJI.flagPoland}`,
}

export const COMMON_VALUES = {
  nameDanielKrsiak: 'Daniel Kršiak',
  reactDeveloper: 'React Developer',
  reactDeveloperNBSP: 'React\u00A0Developer',
  reactDeveloperTypeScript: `React Developer ${EM_DASH} TypeScript & Next.js`,
  reactDeveloperWorkingWithTypeScript: 'React Developer working with TypeScript & Next.js',
  developer: 'Developer',
  frontEnd: 'Front End',
  javaScript: 'JavaScript',
  javaScriptShort: 'JS',
  typeScript: 'TypeScript',
  typeScriptShort: 'TS',
  react: 'React',
  redux: 'Redux',
  next: 'Next.js',
  nextShort: 'Next',
  jest: 'JEST',
  cypress: 'Cypress',
  playwright: 'Playwright',
  brno: 'Brno',
  czechRepublic: 'Czech Republic',
  czechRepublicNBSP: 'Czech\u00A0Republic',
  html: 'HTML',
  css: 'CSS',
  sass: 'Sass',
  tailwind: 'Tailwind CSS',
  tailwindShort: 'Tailwind',
  figma: 'Figma',
  storybook: 'Storybook',
  xd: 'Adobe XD',
  sketch: 'Sketch',
  graphql: 'GraphQL',
  wordpress: 'WordPress',
  qaAutomationTesting: `QA Automation &\u00A0Testing`,
  localization: 'Localization',
  navigationNext: 'navigation next',
  navigationPrevious: 'navigation previous',
}

export const DIVIDER_WITH_TEXT = {
  companies: 'Companies',
  myLinks: 'My\u00A0Links',
  contactMe: 'Scan\u00A0Contact',
  myExpertise: 'My Expertise',
  skills: 'All My\u00A0Skills',
  myMainSkills: 'Main\u00A0Skills',
}

export const SOCIAL_LINKS = {
  linkedIn: 'LinkedIn',
  gitHub: 'GitHub',
  gitHubCode: 'GitHub Code',
  gitHubKrsiak: `GitHub ${EM_DASH} website-krsiak-cz`,
  resumePDF: 'Resume PDF',
  twitter: '@krsiak_daniel',
}

export const HOME = {
  home: 'Home',
  homeTextOnly: 'Home',
  logo: 'krsiak.cz',
  nameDanielKrsiak: COMMON_VALUES.nameDanielKrsiak,
  reactDeveloper: COMMON_VALUES.reactDeveloper,
  heroText: `Hi! I\u00A0am from ${COMMON_VALUES.czechRepublicNBSP}`,
}

export const RESUME = {
  resume: 'Resume',
  resumeTextOnly: 'Resume',
  downloadResume: 'Download Resume in\u00A0PDF',
  downloadResumeShort: 'Download PDF',
  openToWork: 'Open To\u00A0work',
  openToNetworking: 'Networking',
  scanQR: 'Scan My\u00A0Contact',
  feelFreeTo: 'Feel free to scan my contact.',
  regardingJobOpportunities: 'to hire me.',
  forNetworkingOnLinkedIn: 'for networking.',
  callMe: 'Call\u00A0me',
  sendAnEmail: 'send\u00A0an\u00A0email',
  connectOnLinkedIn: 'connect on\u00A0LinkedIn',
}

export const CAREER_PATH = {
  heading: 'Career Path',
  text1: `My path to\u00A0become a\u00A0full${EN_DASH}time`,
  text2: COMMON_VALUES.reactDeveloperNBSP,
}

export const TESTIMONIALS = {
  testimonials: 'Testimonials',
  testimonialsTextOnly: 'Testimonials',
  nameCastro: 'Alexandre Castro',
  nameKvapil: 'Roman Kvapil',
  nameLosseff: 'Inka Losseff',
  namePopa: 'Daniel Popa',
  namePridalek: 'Vojtech Pridalek',
  nameMoorhead: 'Jonathan Moorhead',
  sections: {
    professional: {
      title: 'Office Work',
      description: 'Feedback from colleagues who knew me\u00A0at\u00A0work.',
    },
    character: {
      title: 'My Character',
      description: 'Personal testimonials that highlight my\u00A0integrity.',
    },
    fitnessCoach: {
      title: 'Me As\u00A0Fitness Coach',
      description: 'Testimonials from my online fitness coaching experience.',
    },
  },
}

export const PROJECTS = {
  cryptoMania: 'CryptoMania',
  personalProjects: 'Personal Projects',
  portfolioWebsite: 'Portfolio Website',
  next: COMMON_VALUES.next,
  nextShort: COMMON_VALUES.nextShort,
  react: COMMON_VALUES.react,
  workExperience: 'Work Experience',
}

export const PROJECT_CRYPTOMANIA = {
  alertTitle: 'CryptoMania is\u00A0simple project',
  alertDescription: "See production-level code for\u00A0my 'Portfolio website' on\u00A0GitHub.",
}

export const STATUS = {
  text: 'Status',
  linkText: 'status.krsiak.cz',
  heading: {
    ciCd: 'CI & CD',
    uptimeMonitoring: 'Uptime Monitoring',
  },
  description: {
    ciCd: 'Current status of\u00A0integration and\u00A0deployment pipelines.',
    uptimeMonitoring: 'Page monitoring the website uptime.',
  },
}

export const COMPANIES = {
  smartsuppDashboard: 'Smartsupp Dashboard',
  customerCareChatDashboard: 'Chat Dashboard',
  smartsuppChatDashboard: `Smartsupp ${EM_DASH} Chat Dashboard`,
  komercniBanka: 'Komerční banka',
  kooperativa: 'Kooperativa',
  smartsuppWeb: `Smartsupp ${EM_DASH} Web`,
  smartsuppHELP: `Smartsupp ${EM_DASH} HELP`,
  groupon: 'Groupon',
  moravia: 'Moravia\u00A0IT',
}

export const WORK = {
  otherExperience: 'Other Experience',
  myJob: 'My job',
}

export const PROJECT_INFORMATION = {
  summary: 'Summary',
  skills: 'Skills',
  link: 'Link',
  links: 'Links',
}

export const MY_WORK = {
  workedForCompanies: 'I\u00A0Worked\u00A0For',
  skillsForCompany: 'Skills',
  committedMindset: 'Mindset',
  problemSolving: 'Creative',
  reactDev: 'React Dev',
  webDev: 'Web Dev',
  testing: 'Testing',
  myJourney: 'My journey:',
}

export const MISC = {
  kaizen: 'Kaizen\u00A0改\u00A0善',
  kaizenText1: 'I\u00A0follow the Japanese philosophy',
  kaizenText2:
    'always aiming for\u00A0continuous personal growth and\u00A0improvement in\u00A0my work.',
  uptimeMonitor: 'krsiak.betteruptime.com',
  description: 'Description',
  goBack: 'Go\u00A0back',
  skillsIconsNames: `
      ${COMMON_VALUES.javaScript}, ${COMMON_VALUES.typeScript}, ${COMMON_VALUES.react}, ${COMMON_VALUES.next},
      ${COMMON_VALUES.redux}, ${COMMON_VALUES.graphql}, ${COMMON_VALUES.jest}, ${COMMON_VALUES.playwright},
      ${COMMON_VALUES.html}, ${COMMON_VALUES.css}, ${COMMON_VALUES.sass}, ${COMMON_VALUES.tailwind}, 
      ${COMMON_VALUES.sketch}, ${COMMON_VALUES.xd}, ${COMMON_VALUES.figma}, ${COMMON_VALUES.storybook}
    `,
  brno: COMMON_VALUES.brno,
  czechRepublic: COMMON_VALUES.czechRepublic,
  javaScript: COMMON_VALUES.javaScript,
  typeScript: COMMON_VALUES.typeScript,
  react: COMMON_VALUES.react,
  html: COMMON_VALUES.html,
  css: COMMON_VALUES.css,
  sass: COMMON_VALUES.sass,
  tailwind: COMMON_VALUES.tailwind,
  tailwindShort: COMMON_VALUES.tailwindShort,
  redux: COMMON_VALUES.redux,
  graphQl: COMMON_VALUES.graphql,
  jest: COMMON_VALUES.jest,
  playwright: COMMON_VALUES.playwright,
  figma: COMMON_VALUES.figma,
}

export const ERROR = {
  error404: '404',
  error404Description: "Sorry, we can't find that page.",
  error404Note: 'It looks like we are fresh out of\u00A0yarn!',
  errorGlobalDescription: '',
  errorGlobalNote: 'It looks like we are fresh out of\u00A0yarn!',
  errorGlobalAlt: 'error-global',
  errorDescription: 'The page you requested could not be\u00A0found.',
  errorNote: 'Too many yarns, not enough time!',
  error: 'Error',
  tryAgain: 'Try again',
  mainText: "Sorry, we can't find that page.",
  smallText: 'It looks like we are fresh out of\u00A0yarn!',
  backToHome: 'Back to Home',
}

export const META_WHO_I_AM = {
  title: `Who I Am | ${COMMON_VALUES.nameDanielKrsiak} — Traveler & Outdoor Enthusiast`,
  description:
    'I enjoy traveling and outdoor adventures, exploring from Czech forests to South Korean temples while embracing nature and cultural experiences.',
  keywords: {
    nameDanielKrsiak: COMMON_VALUES.nameDanielKrsiak,
    reactDeveloper: COMMON_VALUES.reactDeveloper,
    travelEnthusiast: 'Travel enthusiast',
    hiking: 'Hiking',
    czechRepublic: COMMON_VALUES.czechRepublic,
    slovakia: 'Slovakia',
    southKorea: 'South Korea',
    alandIslands: 'Åland Islands',
    outdoorAdventures: 'outdoor adventures',
    webDevelopment: 'web development',
    personalJourney: 'personal journey',
  },
}

export const META_TESTIMONIALS = {
  title: `Testimonials | ${COMMON_VALUES.nameDanielKrsiak} — ${COMMON_VALUES.reactDeveloper}`,
  description: `Testimonials about ${COMMON_VALUES.nameDanielKrsiak}'s work, integrity, leadership, coaching, and technical skills from colleagues, mentors and clients.`,
  keywords: {
    nameDanielKrsiak: COMMON_VALUES.nameDanielKrsiak,
    reactDeveloper: COMMON_VALUES.reactDeveloper,
    qaTester: 'QA Tester',
    contentManager: 'Content Manager',
    partnerAccountManager: 'Partner Account Manager',
    seniorLocalizationGroupManager: 'Senior Localization Group Manager',
    teamLead: 'Team Lead',
    serviceManagementLead: 'Service Management Lead',
    smartlook: 'Smartlook',
    microsoft: 'Microsoft',
    moraviaIT: 'Moravia IT',
    rws: 'RWS',
    ibm: 'IBM',
    automation: 'Automation',
    bugManagement: 'Bug Management',
    engineeringSkills: 'Engineering Skills',
    teamWork: 'Team Work',
    newTechnologies: 'New Technologies',
    communication: 'Communication',
    knowledgeSharing: 'Knowledge Sharing',
  },
}

export const META_PROJECTS_OVERVIEW_PERSONAL = {
  title: `Personal Projects | ${COMMON_VALUES.nameDanielKrsiak} — ${COMMON_VALUES.reactDeveloper}`,
  description: `Explore my projects created with ${COMMON_VALUES.next}, ${COMMON_VALUES.react} and ${COMMON_VALUES.typeScript}. My portfolio, crypto app, showcasing coding skills and trends in web development.`,
  keywords: {
    nameDanielKrsiak: COMMON_VALUES.nameDanielKrsiak,
    personalProjects: 'Personal Projects',
    nextJs: 'Next.js',
    react: COMMON_VALUES.react,
    webDevelopment: 'Web Development',
    portfolio: 'Portfolio',
    cryptoApp: 'Crypto App',
  },
}

export const META_PROJECTS_OVERVIEW_WORK = {
  title: `Work Experience | ${COMMON_VALUES.nameDanielKrsiak} — ${COMMON_VALUES.reactDeveloper}`,
  description:
    'Experienced React Developer skilled in UI and app development, redesign, localization, QA automation, testing, team leadership, and UX collaboration.',
  keywords: {
    nameDanielKrsiak: COMMON_VALUES.nameDanielKrsiak,
    reactDeveloper: COMMON_VALUES.reactDeveloper,
    workExperience: 'Work Experience',
    frontEndDeveloper: 'Front End Developer',
    qaAutomation: 'QA Automation',
    teamLeader: 'Team Leader',
    localizationManager: 'Localization Manager',
    javaScript: COMMON_VALUES.javaScript,
    react: COMMON_VALUES.react,
    redux: COMMON_VALUES.redux,
    cypress: COMMON_VALUES.cypress,
    wordPress: 'WordPress',
    saasCompany: 'SaaS Company',
    smartsupp: 'Smartsupp',
    komercniBanka: 'Komerční banka',
    groupon: 'Groupon',
    rwsMoraviaIt: 'RWS — Moravia IT',
  },
}

export const META_DEFAULT = {
  title: `${COMMON_VALUES.nameDanielKrsiak} — ${COMMON_VALUES.reactDeveloper}`,
  description: `${COMMON_VALUES.nameDanielKrsiak}, ${COMMON_VALUES.reactDeveloper} from ${COMMON_VALUES.brno}, ${COMMON_VALUES.czechRepublic}. Specializing in ${COMMON_VALUES.javaScript}, ${COMMON_VALUES.typeScript}, ${COMMON_VALUES.react}. 6 years of experience creating modern web applications.`,
  keywords: {
    nameDanielKrsiak: COMMON_VALUES.nameDanielKrsiak,
    reactDeveloper: COMMON_VALUES.reactDeveloper,
    brno: COMMON_VALUES.brno,
    czechRepublic: COMMON_VALUES.czechRepublic,
    javaScript: COMMON_VALUES.javaScript,
    typeScript: COMMON_VALUES.typeScript,
    react: COMMON_VALUES.react,
    html: COMMON_VALUES.html,
    css: COMMON_VALUES.css,
    sass: COMMON_VALUES.sass,
    tailwind: COMMON_VALUES.tailwind,
    redux: COMMON_VALUES.redux,
    graphQl: MISC.graphQl,
    jest: MISC.jest,
    playwright: COMMON_VALUES.playwright,
    figma: COMMON_VALUES.figma,
  },
  generator: 'Next.js',
  applicationName: 'React — Portfolio website',
}

export const META_HOME = {
  title: `${COMMON_VALUES.nameDanielKrsiak} | ${COMMON_VALUES.reactDeveloper} — ${COMMON_VALUES.typeScript} & ${COMMON_VALUES.next}`,
  description: `Hi 👋 I am ${COMMON_VALUES.nameDanielKrsiak}, a ${COMMON_VALUES.reactDeveloper} from ${COMMON_VALUES.czechRepublic}. I craft scalable, high-quality web apps using ${COMMON_VALUES.javaScriptShort}, ${COMMON_VALUES.typeScriptShort}, ${COMMON_VALUES.react}, and ${COMMON_VALUES.next}.`,
  keywords: {
    nameDanielKrsiak: COMMON_VALUES.nameDanielKrsiak,
    reactDeveloper: COMMON_VALUES.reactDeveloper,
    brno: COMMON_VALUES.brno,
    czechRepublic: COMMON_VALUES.czechRepublic,
    javaScript: COMMON_VALUES.javaScript,
    typeScript: COMMON_VALUES.typeScript,
    react: COMMON_VALUES.react,
    next: COMMON_VALUES.next,
    redux: COMMON_VALUES.redux,
    graphQl: MISC.graphQl,
    jest: MISC.jest,
    playwright: COMMON_VALUES.playwright,
    html: COMMON_VALUES.html,
    css: COMMON_VALUES.css,
    sass: COMMON_VALUES.sass,
    tailwind: COMMON_VALUES.tailwind,
    storybook: COMMON_VALUES.storybook,
    figma: COMMON_VALUES.figma,
    xd: COMMON_VALUES.xd,
    sketch: COMMON_VALUES.sketch,
  },
}

export const META_SMARTSUPP_WEB = {
  title: `Smartsupp Web | ${COMMON_VALUES.nameDanielKrsiak} — Front End Developer`,
  description:
    'Created Smartsupp website and collaborated on brand design as a Frontend Developer for 1 year, merging UX vision with sleek, functional UI.',
  keywords: {
    nameDanielKrsiak: COMMON_VALUES.nameDanielKrsiak,
    smartsuppWeb: 'Smartsupp Web',
    saasCompanyWebsite: `SaaS Company Website`,
    frontEndDeveloper: 'Front End Developer',
    companyWebsiteFrontEnd: 'Company Website Front End',
    documentationSite: 'Documentation Site',
    jekyll: 'Jekyll',
    markdown: 'Markdown',
    vuePress: 'VuePress',
  },
}

export const META_SMARTSUPP_HELP = {
  title: `Smartsupp Help | ${COMMON_VALUES.nameDanielKrsiak} — Content Writer`,
  description:
    'Admin & Content Writer at Smartsupp for 6 months. Managed HELP website on WordPress, wrote tutorials, and handled localization into 9 languages.',
  keywords: {
    nameDanielKrsiak: COMMON_VALUES.nameDanielKrsiak,
    smartsuppHelp: 'Smartsupp Help',
    saasCompanyHelpWebsite: 'SaaS Company — HELP Website',
    adminContentWriter: 'Admin & Content Writer',
    wordPress: 'WordPress',
    tutorials: 'Tutorials',
    localization: 'Localization',
  },
}

export const META_SMARTSUPP_DASHBOARD = {
  title: `Smartsupp Dashboard | ${COMMON_VALUES.nameDanielKrsiak} — ${COMMON_VALUES.reactDeveloper}`,
  description:
    'Worked 3 years as React Developer on Smartsupp Dashboard. Contributed to chat dashboard features, UX improvements, and modernizing the codebase.',
  keywords: {
    nameDanielKrsiak: COMMON_VALUES.nameDanielKrsiak,
    reactDeveloper: COMMON_VALUES.reactDeveloper,
    smartsuppDashboard: 'Smartsupp Dashboard',
    chatDashboard: 'Chat Dashboard',
    javaScript: COMMON_VALUES.javaScript,
    typeScript: COMMON_VALUES.typeScript,
    react: COMMON_VALUES.react,
    redux: COMMON_VALUES.redux,
    chakraUi: 'Chakra UI',
    cypress: COMMON_VALUES.cypress,
  },
}

export const META_MORAVIA = {
  title: `RWS — Moravia IT | ${COMMON_VALUES.nameDanielKrsiak} — QA Automation Team Leader`,
  description:
    'QA Automation — Team Leader at Moravia for 1 year. Microsoft projects Windows 8 + Windows Phone, managing translation delivery and ensuring quality.',
  keywords: {
    nameDanielKrsiak: COMMON_VALUES.nameDanielKrsiak,
    rwsMoraviaIt: 'RWS — Moravia IT',
    windows: 'Windows',
    qaAutomationTeamLeader: 'QA Automation — Team Leader',
    html: COMMON_VALUES.html,
    css: COMMON_VALUES.css,
    javaScript: COMMON_VALUES.javaScript,
    localization: 'Localization',
    qualityChecks: 'Quality Checks',
    microsoftProjects: 'Microsoft Projects',
    windows8: 'Windows 8',
    windowsPhone: 'Windows Phone',
  },
}

export const META_KOOPERATIVA = {
  title: `Kooperativa | ${COMMON_VALUES.nameDanielKrsiak} — ${COMMON_VALUES.reactDeveloper}`,
  description:
    'Developed a React-based app to manage insurance for citizen-owned assets at Kooperativa—serving 2.48M+ customers across Czechia.',
  keywords: {
    nameDanielKrsiak: COMMON_VALUES.nameDanielKrsiak,
    reactDeveloper: COMMON_VALUES.reactDeveloper,
    kooperativa: 'Kooperativa',
    insuranceCompanyApp: 'Insurance company app',
    javaScript: COMMON_VALUES.javaScript,
    typeScript: COMMON_VALUES.typeScript,
    react: COMMON_VALUES.react,
    redux: COMMON_VALUES.redux,
    tailwind: COMMON_VALUES.tailwind,
    figma: COMMON_VALUES.figma,
    storybook: 'Storybook',
  },
}

export const META_KOMERCNI_BANKA = {
  title: `Komerční banka | ${COMMON_VALUES.nameDanielKrsiak} — ${COMMON_VALUES.reactDeveloper}`,
  description:
    'React Developer at Komerční banka. Developed search page for branches & ATMs, exchange rates. Enhanced UX and responsive design across devices.',
  keywords: {
    komercniBanka: 'Komerční banka',
    commerceBankWebsite: 'Commerce Bank — Website',
    reactDeveloper: COMMON_VALUES.reactDeveloper,
    searchPage: 'Search Page',
    exchangeRatesPage: 'Exchange Rates Page',
    geolocationApi: 'Geolocation API',
    googlePlacesAutocompleteApi: 'Google Places Autocomplete API',
    responsiveDesign: 'Responsive Design',
  },
}

export const META_GROUPON = {
  title: `Groupon | ${COMMON_VALUES.nameDanielKrsiak} — QA Automation Team Leader`,
  description:
    'QA Automation SDET & QA Team Lead. Hired testers and coordinated QA for a marketplace with 17M+ users, optimizing automation and quality.',
  keywords: {
    nameDanielKrsiak: COMMON_VALUES.nameDanielKrsiak,
    groupon: 'Groupon',
    sdet: 'SDET',
    eCommerceMarketplace: 'E-Commerce — Marketplace',
    qaAutomationTeamLeader: 'QA Automation — Team Leader',
    javaScript: COMMON_VALUES.javaScript,
    typeScript: COMMON_VALUES.typeScript,
    react: COMMON_VALUES.react,
    nextJs: 'Next.js',
    playwright: COMMON_VALUES.playwright,
    figma: COMMON_VALUES.figma,
    storybook: 'Storybook',
    jira: 'Jira',
    confluence: 'Confluence',
    tempo: 'Tempo',
    qa: 'QA',
  },
}

export const META_KRSIAK = {
  title: `Portfolio Website | ${COMMON_VALUES.nameDanielKrsiak} — ${COMMON_VALUES.reactDeveloper}`,
  description:
    'Portfolio built with Next.js, Tailwind CSS, React, TS, JEST, Playwright, GitHub Actions & Netlify—showcasing frontend skills and test automation.',
  keywords: {
    portfolioWebsite: 'Portfolio Website',
    nameDanielKrsiak: COMMON_VALUES.nameDanielKrsiak,
    reactDeveloper: COMMON_VALUES.reactDeveloper,
    nextJs: 'Next.js',
    tailwind: COMMON_VALUES.tailwind,
    javaScript: COMMON_VALUES.javaScript,
    typeScript: COMMON_VALUES.typeScript,
    react: COMMON_VALUES.react,
    jest: 'JEST',
    playwright: COMMON_VALUES.playwright,
    gitHubActions: 'GitHub Actions',
    netlify: 'Netlify',
  },
}

export const META_CRYPTOMANIA = {
  title: `Cryptomania | ${COMMON_VALUES.nameDanielKrsiak} — ${COMMON_VALUES.reactDeveloper}`,
  description:
    'Cryptocurrency price app using fresh CoinGecko data. Made with React + Chakra UI. Discover, browse, and track coins effortlessly.',
  keywords: {
    cryptomania: 'Cryptomania',
    nameDanielKrsiak: COMMON_VALUES.nameDanielKrsiak,
    reactDeveloper: COMMON_VALUES.reactDeveloper,
    react: COMMON_VALUES.react,
    chakraUi: 'Chakra UI',
    javaScript: COMMON_VALUES.javaScript,
    typeScript: COMMON_VALUES.typeScript,
    coinGeckoApi: 'CoinGecko API',
    netlify: 'Netlify',
  },
}

export const META_RESUME = {
  title: `Resume | ${COMMON_VALUES.nameDanielKrsiak} — ${COMMON_VALUES.reactDeveloper}`,
  description: `Experienced ${COMMON_VALUES.reactDeveloper} skilled in ${COMMON_VALUES.javaScriptShort}, ${COMMON_VALUES.typeScriptShort}, ${COMMON_VALUES.react}, ${COMMON_VALUES.next}, ${COMMON_VALUES.redux}, QA Automation, team leadership, and localization project management.`,
  keywords: {
    resume: 'Resume',
    nameDanielKrsiak: COMMON_VALUES.nameDanielKrsiak,
    reactDeveloper: COMMON_VALUES.reactDeveloper,
    qaAutomationSpecialist: 'QA Automation Specialist',
    teamLeader: 'Team Leader',
    localizationManager: 'Localization Manager',
    javaScript: COMMON_VALUES.javaScript,
    react: COMMON_VALUES.react,
    typeScript: COMMON_VALUES.typeScript,
    redux: COMMON_VALUES.redux,
    cypress: COMMON_VALUES.cypress,
    playwright: COMMON_VALUES.playwright,
    dashboardApplicationDevelopment: 'Dashboard Application Development',
    bankingWebsiteDevelopment: 'Banking Website Development',
    saasCompany: 'SaaS Company',
    microsoftWindows: 'Microsoft Windows',
    localizationExpert: 'Localization Expert',
    frontEndDevelopment: 'Front-End Development',
    softwareTestingAutomation: 'Software Testing & Automation',
    agileMethodologies: 'Agile Methodologies',
    uiUxDevelopment: 'UI/UX Development',
    crossFunctionalCollaboration: 'Cross-functional Collaboration',
    ciCd: 'Continuous Integration / Continuous Delivery (CI/CD)',
    versionControl: 'Version Control (Git)',
    tdd: 'Test-Driven Development (TDD)',
    unitIntegrationTesting: 'Unit & Integration Testing',
  },
}

export const META_STATUS = {
  title: `Status | ${COMMON_VALUES.nameDanielKrsiak} — ${COMMON_VALUES.reactDeveloper}`,
  description:
    'Status page with badges for Jest, Playwright, CodeQL, Code Quality, Dependabot, Netlify—track test coverage and automation.',
  keywords: {
    nameDanielKrsiak: COMMON_VALUES.nameDanielKrsiak,
    reactDeveloper: COMMON_VALUES.reactDeveloper,
    status: 'Status',
    projectBadges: 'Project badges',
    jestTests: 'Jest Tests',
    playwrightTests: 'Playwright Tests',
    codeQl: 'CodeQL',
    codeQuality: 'Code Quality',
    dependabot: 'Dependabot',
    netlify: 'Netlify',
  },
}

export const DAISY_IU = {
  daisyUI: 'daisyUI',
  daisyIsAwesome: 'daisyUI is awesome!',
}

export const IMAGE_ALT = {
  altWelcome: 'Hi :)',
  altLogo: 'logo',
  altDefault: 'image',
  altIconQuote: 'icon-quote',
  altMicrosoft: 'Microsoft',
  altSmartsupp: 'Smartsupp',
  altKooperativa: 'Kooperativa',
  altGroupon: 'Groupon',
  altIbm: 'IBM',
  altRwsMoravia: 'RWS — Moravia',
  altKomercniBanka: 'Komerční Banka',
  altBata: 'Baťa',
}

export const CONTACT = {
  scanQR: 'Scan With Phone',
  contactMeQRCode: 'Contact Me — QR code',
}

export const EASTER_EGG = {
  ghostScreaming: 'wooooooo!',
}

export const BIBLE = {
  baptismTestimonyHeading: 'My Baptism — Testimony',
  baptismChurch: 'Baptism — Church',
  bookChapterVerse: '1\u00A0Peter\u00A03:21',
  verseText: `
    And that water is\u00A0a\u00A0picture of\u00A0baptism,
    which now saves you,
    not\u00A0by\u00A0removing dirt from your body,
    but\u00A0as\u00A0a\u00A0response to\u00A0God from\u00A0a\u00A0clean conscience.
    It\u00A0is\u00A0effective because of\u00A0the\u00A0resurrection of\u00A0Jesus\u00A0Christ.
  `,
}

export const SOUTH_KOREA = {
  headingTravel: 'Traveling',
  headingSouthKorea: 'South Korea',
  introduction:
    'South Korea is\u00A0a\u00A0fascinating country where ancient traditions seamlessly meet modern innovation, offering a\u00A0captivating journey through bustling metropolitan cities like\u00A0Seoul, serene Buddhist temples, stunning mountain vistas, and\u00A0nature full of\u00A0lush forests and\u00A0beautiful rivers.',
  quote1: 'Traveling—it leaves you speechless, then turns you into a\u00A0storyteller.',
  quoteAuthorName1: 'Ibn Battuta',
  quoteAuthorOccupation1: '14th-century explorer',
  quote2:
    'The world is\u00A0a\u00A0book, and\u00A0those who do\u00A0not travel read only one page.',
  quoteAuthorName2: 'Saint Augustine',
  quoteAuthorOccupation2: 'Bishop of Hippo',
  hiking: 'South Korea — hiking',
  nature: 'South Korea — nature',
  temple: 'South Korea — temple',
  palace: 'South Korea — palace',
}

export const CALL_TO_ACTION = {
  workExperience: {
    highlight: 'Professional journey',
    highlightShort: 'My journey',
    heading: 'Work Experience',
    textMobileAndDesktop: `See the professional projects I\u00A0worked on\u00A0and\u00A0had the\u00A0opportunity to\u00A0improve.`,
    textDesktop: 'Developing scalable and\u00A0robust web applications for\u00A0big companies.',
  },
  resumeDownload: {
    highlight: 'Resume in\u00A0PDF',
    heading: 'Download My\u00A0Resume',
    textMobileAndDesktop:
      'Get a\u00A0PDF copy of\u00A0my resume to\u00A0learn more about my\u00A0professional experience.',
    textDesktop:
      'Skilled React Developer building scalable applications using React and\u00A0TypeScript.',
  },
  resume: {
    highlight: 'React Developer',
    heading: 'My\u00A0Resume',
    textMobileAndDesktop: `To understand my\u00A0React Developer career, learn about my\u00A0skills and\u00A0experience.`,
    textDesktop:
      'From startup to large corporations I\u00A0have worked on\u00A0a\u00A0variety of\u00A0projects.',
  },
  linkedIn: {
    highlight: 'LinkedIn',
    heading: 'Connect on\u00A0LinkedIn',
    textMobileAndDesktop:
      'Visit my LinkedIn profile to\u00A0connect and\u00A0see my\u00A0professional experiences.',
    textDesktop: 'It shows a\u00A0comprehensive overview of\u00A0my career journey.',
  },
  github: {
    highlight: 'Personal',
    heading: 'GitHub Projects',
    textMobileAndDesktop:
      'Go through my GitHub repository to\u00A0see how I\u00A0code my\u00A0personal portfolio project.',
    textDesktop:
      'Writing maintainable, and\u00A0efficient code, using React, Next.js, and\u00A0TypeScript.',
  },
}

export const FOOTER = {
  linkHome: 'krsiak.cz',
  scrollToTop: 'Scroll to top',
}

export const WHO_I_AM = {
  whoIAm: 'Who I\u00A0Am',
  aboutMe: `
    In my free time you'll find me exploring the\u00A0great outdoors and\u00A0spending time in\u00A0forest.
    As\u00A0an\u00A0avid hiker and\u00A0traveler, I\u00A0enjoy\u00A0the\u00A0nature.
  `,
  idCZ: COUNTRY.czechRepublic,
  idSK: COUNTRY.slovakia,
  idFI: COUNTRY.finland,
  idKR: COUNTRY.korea,
  textCzechRepublic: `Hiking through the\u00A0forests in\u00A0Czech\u00A0Republic.`,
  textSlovakia: `Scaling the\u00A0majestic mountains in\u00A0Slovakia.`,
  textKorea: `Discovering the\u00A0stunning landscapes in\u00A0South\u00A0Korea.`,
  textAlandIslands: `Cruising across the\u00A0Baltic\u00A0Sea exploring the\u00A0Åland\u00A0Islands.`,
}

export const INTRODUCTION = {
  whoIAm: {
    text: {
      introduction1: `Hi! My name is\u00A0`,
      introduction2: `\u00A0at\u00A0work\u00A0I\u00A0am`,
      developer: `${COMMON_VALUES.react} ${EM_DASH}\u00A0${COMMON_VALUES.typeScript} ${COMMON_VALUES.developer}`,
      freeTime: 'in\u00A0my free\u00A0time I\u00A0love to\u00A0travel',
    },
  },
  resume: {
    text: {
      skilled: 'Skilled',
      reactDeveloper: '{reactDeveloper}',
      with: 'with',
      yearsReact: `${YEARS.react}\u00A0years`,
      yearsText: 'of\u00A0experience using',
      typeScript: '{typeScript}',
      buildText: 'to\u00A0build scalable web applications.',
    },
  },
  status: {
    text: {
      showing: 'Showing the\u00A0health\u00A0and',
      performance: 'performance',
      of: 'of\u00A0the',
      project: 'project',
      integrations: 'integrations and\u00A0workflows.',
    },
  },
  personalProjects: {
    text: {
      enjoy: 'I\u00A0enjoy learning',
      newTechnologies: 'new\u00A0technologies',
      andCreating: 'and\u00A0creating',
      personalProjects: 'personal\u00A0projects',
      whereApply: 'where I\u00A0can apply my\u00A0knowledge.',
    },
  },
  workExperience: {
    text: {
      experienced: 'I\u00A0am\u00A0experienced',
      reactDeveloper: 'React\u00A0Developer',
      focus: 'with\u00A0a\u00A0strong\u00A0focus\u00A0on\u00A0',
      performance: 'web performance',
      uxui: 'UX/UI',
      qaAutomation: 'QA\u00A0Automation',
    },
  },
}

export const GALLERY = {
  heading: 'Gallery',
  screenshots: 'See project screenshots.',
}

export const ARIA_LABELS = {
  quote: 'Quote',
  toggleMenu: 'Toggle Menu',
  menu: 'Menu',
  breadcrumbs: 'Breadcrumbs',
  sun: 'The Sun',
  moon: 'The Moon',
  manWalking: 'Man walking',
  forest: 'Forest',
  forestWithMountain: 'Forest with mountain',
  galleryProjectShowcase: 'Gallery — Project showcase',
  galleryActiveImage: 'Active image',
  galleryThumbnails: 'Gallery thumbnails',
  galleryThumbnail: 'Thumbnail',
  emoji: {
    icon: 'Emoji',
    starAndCrescent: 'Star and crescent',
    latinCross: 'Latin cross',
    house: 'House',
    moneyBag: 'Money bag',
    rocket: 'Rocket',
    speechBalloon: 'Speech balloon',
    bank: 'Bank',
    umbrellaWithRainDrops: 'Umbrella with rain drops',
    laptop: 'Laptop',
    books: 'Books',
    shoppingCart: 'Shopping cart',
    memo: 'Memo',
    ghost: 'Ghost',
    verticalTrafficLight: 'Vertical traffic light',
    desktopComputer: 'Desktop computer',
    robot: 'Robot',
    star: 'Star',
    writingHand: 'Writing hand',
    foldedHands: 'Folded hands',
    church: 'Church',
    atomSymbol: 'Atom symbol',
    cog: 'Cog',
    artistPalette: 'Artist palette',
    officeBuilding: 'Office building',
    airplane: 'Airplane',
    poultryLeg: 'Poultry leg',
    link: 'Link',
    barChart: 'Bar chart',
    hammerAndWrench: 'Hammer and wrench',
    flag: {
      czechRepublic: 'Flag of Czech Republic',
      unitedKingdom: 'Flag of United Kingdom',
      spain: 'Flag of Spain',
      france: 'Flag of France',
      hungary: 'Flag of Hungary',
      germany: 'Flag of Germany',
      italy: 'Flag of Italy',
      netherlands: 'Flag of Netherlands',
      poland: 'Flag of Poland',
      slovakia: 'Flag of Slovakia',
      alandIslands: 'Flag of Åland Islands',
      southKorea: 'Flag of South Korea',
      japan: 'Flag of Japan',
    },
    globe: {
      showingAmericas: 'Globe showing Americas',
      showingEuropeAfrica: 'Globe showing Europe and Africa',
    },
    manLiftingWeights: 'Man lifting weights',
    personLiftingWeights: 'Person lifting weights',
    flexedBiceps: 'Flexed biceps',
    personFlexingBicepsLightSkinTone: 'Person flexing biceps with light skin tone',
    manWalking: 'Man walking',
    sun: 'Sun',
    wavingHand: 'Waving hand',
    ninja: 'Ninja',
    manTechnologist: {
      lightSkinTone: 'Man technologist light skin tone',
    },
    man: {
      lightSkinTone: 'Man light skin tone',
      officeWorker: 'Man office worker',
    },
    woman: {
      officeWorker: 'Woman office worker',
    },
    evergreenTree: 'Evergreen tree',
    christmasTree: 'Christmas tree',
    mountain: 'Mountain',
    snowyMountain: 'Snowy mountain',
    nature: {
      forest: 'Forest',
      christmasForest: 'Christmas forest',
      mountainAndTree: 'Mountain and tree',
      winterMountainAndTree: 'Winter mountain and tree',
      christmasMountainAndTree: 'Christmas mountain and tree',
    },
    moon: {
      newMoon: 'New moon',
      waxingCrescent: 'Waxing crescent moon',
      firstQuarter: 'First quarter moon',
      waxingGibbous: 'Waxing gibbous moon',
      fullMoon: 'Full moon',
      waningGibbous: 'Waning gibbous moon',
      lastQuarter: 'Last quarter moon',
      waningCrescent: 'Waning crescent moon',
    },
    cats: {
      ruzenka: 'Cat Růženka',
      nufka: 'Cat Ňufka',
    },
  },
}

export const ANALYTICS_WARNING = {
  googleAnalytics: 'Google Analytics — is not configured!',
  smartlook: 'Smartlook — is not configured!',
}

export const TEXT = {
  ...CALL_TO_ACTION,
  ...COMMON_VALUES,
  ...WHO_I_AM,
  ...CONTACT,
  ...SHARED,
  ...PROJECT_INFORMATION,
  ...MY_WORK,
  ...SOCIAL_LINKS,
  ...HOME,
  ...COMPANIES,
  ...RESUME,
  ...TESTIMONIALS,
  ...WORK,
  ...PROJECTS,
  ...STATUS,
  ...MISC,
  ...ERROR,
  ...FOOTER,
  ...ARIA_LABELS,
}
