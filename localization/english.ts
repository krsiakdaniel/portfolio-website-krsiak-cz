import { COUNTRY } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { EM_DASH } from '@/lib/utils/constants/specialCharacters'
import { YEARS } from '@/lib/utils/constants/yearsExperience'

export const ICON_EMOJI = {
  latinCross: '✝️',
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
  japaneseCastle: '🏯',
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
  waterWave: '🌊',
  ship: '🚢',
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
  openToNetworking: 'Open To\u00A0Networking',
  scanQR: 'Scan My\u00A0Contact',
  feelFreeTo: 'Feel free to',
  regardingJobOpportunities: 'regarding job\u00A0opportunities',
  forNetworkingOnLinkedIn: 'for networking on\u00A0LinkedIn',
  callMe: 'call\u00A0me',
  sendAnEmail: 'send\u00A0an\u00A0email',
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
      title: 'Professional References',
      description:
        "Below, you'll find insightful feedback from colleagues who\u00A0have experienced my\u00A0contributions firsthand.",
    },
    character: {
      title: 'Character References',
      description:
        "In this section, you'll find personal testimonials that highlight my\u00A0integrity and\u00A0reliability.",
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
  alertTitle: 'CryptoMania is simple project',
  alertDescription: "See production-level code for my 'Portfolio' on\u00A0GitHub repo.",
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
  workedForCompanies: 'Worked For\u00A0Companies',
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
  gallery: 'Gallery',
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
  title: `Who I Am | ${COMMON_VALUES.nameDanielKrsiak}`,
  description:
    'React Developer with a passion for travel and outdoor adventures. Exploring from Czech forests to South Korean temples, combining technical expertise with a love for nature and cultural experiences.',
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
  title: `Testimonials | ${COMMON_VALUES.nameDanielKrsiak} - ${COMMON_VALUES.reactDeveloper}`,
  description: `Read testimonials from colleagues and partners regarding ${COMMON_VALUES.nameDanielKrsiak}'s work and skills.`,
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
  title: `Personal Projects | ${COMMON_VALUES.nameDanielKrsiak} - ${COMMON_VALUES.reactDeveloper}`,
  description:
    'Explore my projects created with Next.js and React. My portfolio, crypto app, e-commerce site, all showcasing coding skills and trends in web development.',
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
  title: `Work Experience | ${COMMON_VALUES.nameDanielKrsiak} - ${COMMON_VALUES.reactDeveloper}`,
  description:
    'Experienced React Developer skilled in development, redesign, localization, QA automation, testing, team leadership, and UX collaboration.',
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
    rwsMoraviaIt: 'RWS - Moravia IT',
  },
}

export const META_DEFAULT = {
  title: `${COMMON_VALUES.nameDanielKrsiak} - ${COMMON_VALUES.reactDeveloper}`,
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
  applicationName: 'React - Portfolio website',
}

export const META_HOME = {
  title: `${COMMON_VALUES.nameDanielKrsiak} - ${COMMON_VALUES.reactDeveloper}`,
  description: `Hi 👋 I am ${COMMON_VALUES.nameDanielKrsiak}, a ${COMMON_VALUES.reactDeveloper} based in ${COMMON_VALUES.brno}, ${COMMON_VALUES.czechRepublic}. I specialize in ${COMMON_VALUES.javaScript}, ${COMMON_VALUES.typeScript}, ${COMMON_VALUES.react}, and ${COMMON_VALUES.next}. With 6 years of experience creating modern web applications, I focus on delivering high-quality, scalable, and reliable code.`,
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
  title: `Smartsupp Web | ${COMMON_VALUES.nameDanielKrsiak} - Front End Developer`,
  description:
    'Worked as a Front End Developer at Smartsupp for 1 year. Created company website Front End, collaborated with UX designer on brand theme and layout.',
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
  title: `Smartsupp Help | ${COMMON_VALUES.nameDanielKrsiak} - Content Writer`,
  description:
    'Admin & Content Writer at Smartsupp for 6 months. Managed HELP website on WordPress, wrote tutorials, and handled localization into 9 languages.',
  keywords: {
    nameDanielKrsiak: COMMON_VALUES.nameDanielKrsiak,
    smartsuppHelp: 'Smartsupp Help',
    saasCompanyHelpWebsite: 'SaaS Company - HELP Website',
    adminContentWriter: 'Admin & Content Writer',
    wordPress: 'WordPress',
    tutorials: 'Tutorials',
    localization: 'Localization',
  },
}

export const META_SMARTSUPP_DASHBOARD = {
  title: `Smartsupp Dashboard | ${COMMON_VALUES.nameDanielKrsiak} - ${COMMON_VALUES.reactDeveloper}`,
  description:
    'Worked as a React Developer on the Smartsupp Dashboard for 3 years. Contributed to chat dashboard features, UX improvements, and modernizing the codebase.',
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
  title: `RWS - Moravia IT | ${COMMON_VALUES.nameDanielKrsiak} - QA Automation Team Leader`,
  description:
    'QA Automation - Team Leader at Moravia for 1 year. Microsoft projects Windows 8 + Windows Phone, managing translation delivery and ensuring quality.',
  keywords: {
    nameDanielKrsiak: COMMON_VALUES.nameDanielKrsiak,
    rwsMoraviaIt: 'RWS - Moravia IT',
    windows: 'Windows',
    qaAutomationTeamLeader: 'QA Automation - Team Leader',
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
  title: `Kooperativa | ${COMMON_VALUES.nameDanielKrsiak} - ${COMMON_VALUES.reactDeveloper}`,
  description:
    'I worked on an application for managing insurance policies for citizens property and products.',
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
  title: `Komerční banka | ${COMMON_VALUES.nameDanielKrsiak} - ${COMMON_VALUES.reactDeveloper}`,
  description:
    'Worked as a React Developer at Komerční banka. Developed search page for branches & ATMs, exchange rates. Enhanced UX, improved responsive design across devices.',
  keywords: {
    komercniBanka: 'Komerční banka',
    commerceBankWebsite: 'Commerce Bank - Website',
    reactDeveloper: COMMON_VALUES.reactDeveloper,
    searchPage: 'Search Page',
    exchangeRatesPage: 'Exchange Rates Page',
    geolocationApi: 'Geolocation API',
    googlePlacesAutocompleteApi: 'Google Places Autocomplete API',
    responsiveDesign: 'Responsive Design',
  },
}

export const META_GROUPON = {
  title: `Groupon | ${COMMON_VALUES.nameDanielKrsiak} - QA Automation Team Leader`,
  description:
    'QA Automation SDET - Team Lead at Groupon. Responsible for new QA team, hiring, coordinating testing for online marketplace with 17 000 000 customers.',
  keywords: {
    nameDanielKrsiak: COMMON_VALUES.nameDanielKrsiak,
    groupon: 'Groupon',
    sdet: 'SDET',
    eCommerceMarketplace: 'E-Commerce - Marketplace',
    qaAutomationTeamLeader: 'QA Automation - Team Leader',
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
  title: `Portfolio Website | ${COMMON_VALUES.nameDanielKrsiak} - ${COMMON_VALUES.reactDeveloper}`,
  description:
    'Portfolio website showcasing my skills. Using Next.js, Tailwind CSS, JavaScript, TypeScript, React, JEST, Playwright, GitHub Actions, and Netlify.',
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
  title: `Cryptomania | ${COMMON_VALUES.nameDanielKrsiak} - ${COMMON_VALUES.reactDeveloper}`,
  description:
    'Crypto currency prices app with latest data from CoinGecko API. Built with React and Chakra UI. Explore and search for cryptocurrencies with ease.',
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
  title: `Resume | ${COMMON_VALUES.nameDanielKrsiak} - ${COMMON_VALUES.reactDeveloper}`,
  description: `Experienced ${COMMON_VALUES.reactDeveloper} proficient in ${COMMON_VALUES.javaScript}, ${COMMON_VALUES.react}, ${COMMON_VALUES.typeScript}, ${COMMON_VALUES.redux}. Also skilled in QA Automation, leading teams, and managing localization projects.`,
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
  title: `Status | ${COMMON_VALUES.nameDanielKrsiak} - ${COMMON_VALUES.reactDeveloper}`,
  description:
    'Explore status page showcasing project badges for Jest Tests, Playwright Tests, CodeQL, Code Quality, Dependabot, and Netlify.',
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
  altRwsMoravia: 'RWS - Moravia',
  altKomercniBanka: 'Komerční Banka',
}

export const CONTACT = {
  scanQR: 'Scan With Phone',
  contactMeQRCode: 'Contact Me - QR code',
}

export const EASTER_EGG = {
  ghostScreaming: 'wooooooo!',
}

export const BIBLE = {
  baptismTestimonyHeading: 'My Baptism - Testimony',
  baptismChurch: 'Baptism - Church',
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
    'South Korea, where ancient traditions meet modern innovation, offers a\u00A0journey through bustling cities, serene temples, and\u00A0stunning landscapes.',
  quote1:
    'Travel makes one modest. You see what a\u00A0tiny place you occupy in\u00A0the\u00A0world.',
  quoteAuthor1: 'Gustave Flaubert, Novelist',
  quote2:
    'The world is\u00A0a\u00A0book, and\u00A0those who do\u00A0not travel read only one page.',
  quoteAuthor2: 'Saint Augustine, Bishop',
  hiking: 'South Korea - hiking',
  nature: 'South Korea - nature',
  temple: 'South Korea - temple',
  palace: 'South Korea - palace',
}

export const CALL_TO_ACTION = {
  workExperience: {
    highlight: 'Professional journey',
    highlightShort: 'My journey',
    heading: 'Explore My\u00A0Work Experience',
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
    heading: 'Explore My\u00A0Resume',
    textMobileAndDesktop: `To understand my\u00A0React Developer career, learn about my\u00A0skills and\u00A0experience.`,
    textDesktop:
      'From startup to large corporations I\u00A0have worked on\u00A0a\u00A0variety of\u00A0projects.',
  },
  linkedIn: {
    highlight: 'LinkedIn',
    heading: 'Connect on\u00A0LinkedIn',
    textMobileAndDesktop:
      'Visit my LinkedIn profile to\u00A0connect and\u00A0see my\u00A0professional experiences.',
    textDesktop: 'It showcases a\u00A0comprehensive overview of\u00A0my career journey.',
  },
  github: {
    highlight: 'GitHub',
    heading: 'Explore GitHub Projects',
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
  textAlandIslands: `Cruising across the\u00A0Baltic\u00A0Sea to\u00A0the\u00A0archipelago of\u00A0the\u00A0Åland\u00A0Islands.`,
}

export const INTRODUCTION = {
  whoIAm: {
    text: {
      introduction1: `Hi! My name is\u00A0`,
      introduction2: ` and\u00A0at\u00A0work\u00A0I\u00A0am ${COMMON_VALUES.react} ${EM_DASH}\u00A0${COMMON_VALUES.typeScript} ${COMMON_VALUES.developer}.`,
      textPerson1: 'This page is\u00A0about\u00A0me ',
      textPerson2: 'as\u00A0a\u00A0person.',
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
      current: 'Current',
      status: 'status',
      showing: 'showing the\u00A0health\u00A0and',
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
      whoKnows: 'who\u00A0knows',
      qaAutomation: 'QA\u00A0Automation',
      andCanLead: 'and\u00A0can lead teams\u00A0as\u00A0a',
      teamLeader: 'Team\u00A0Leader.',
    },
  },
}

export const ARIA_LABELS = {
  toggleMenu: 'Toggle Menu',
  menu: 'Menu',
  breadcrumbs: 'Breadcrumbs',
  sun: 'The Sun',
  moon: 'The Moon',
  manWalking: 'Man walking',
  forest: 'Forest',
  forestWithMountain: 'Forest with mountain',
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
