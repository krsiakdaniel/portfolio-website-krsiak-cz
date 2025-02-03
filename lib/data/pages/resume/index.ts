import { MONTHS, YEARS } from '@/lib/utils/constants/yearsExperience'

import { ICON_EMOJI, SHARED } from '@/localization/english'

import { DurationUnitEnum } from '@/lib/utils/typeDefinitions/enums'
import { Job } from '@/lib/utils/typeDefinitions/interfaces'

export const jobs: Job[] = [
  {
    id: 0,
    title: `${ICON_EMOJI.atomSymbol} Front End ${SHARED.emDash} React Developer`,
    duration: YEARS.react,
    unit: DurationUnitEnum.Year,
    description: `
      I built a customer care dashboard,
      contributed to the\u00A0Komerční banka website,
      and\u00A0developed the\u00A0Kooperativa insurance policy management app using JavaScript, TypeScript, React, and\u00A0Redux.
    `,
  },
  {
    id: 1,
    title: `${ICON_EMOJI.laptop} Front End ${SHARED.emDash} Web Developer`,
    duration: YEARS.webDeveloper,
    unit: DurationUnitEnum.Year,
    description: `
        I led the development of a\u00A0responsive website for\u00A0a\u00A0SaaS company, integrating PHP, JavaScript,
        and\u00A0UX\u00A0design principles to create a\u00A0seamless user experience.
      `,
  },
  {
    id: 2,
    title: `${ICON_EMOJI.robot} QA Automation ${SHARED.emDash} Team Leader`,
    duration: YEARS.qaAutomation,
    unit: DurationUnitEnum.Year,
    description: `
        I led 2 QA teams to implement Cypress and\u00A0Playwright for E2E testing,
        writing tests in JavaScript and\u00A0TypeScript to ensure high-quality code.
        This role sharpened my leadership skills and attention to detail.
      `,
  },
  {
    id: 3,
    title: `${ICON_EMOJI.flagCzechRepublic} Localization ${SHARED.emDash} Manager`,
    duration: YEARS.localizationManager,
    unit: DurationUnitEnum.Year,
    description: `
        I worked on the localization of Microsoft Windows\u00A08, and\u00A0Windows\u00A0Phone.
        This role honed my\u00A0project management and\u00A0internationalization expertise.
        I also led the localization of\u00A0a\u00A0SaaS company site translated into 9\u00A0languages: 🇬🇧 🇨🇿 🇪🇸 🇫🇷 🇭🇺 🇩🇪 🇮🇹 🇳🇱 🇵🇱
      `,
  },
  {
    id: 4,
    title: `${ICON_EMOJI.hammerAndWrench} Localization ${SHARED.emDash} Tester`,
    duration: YEARS.localizationTester,
    unit: DurationUnitEnum.Year,
    description: `
        I performed layout testing for Microsoft projects,
        including Windows\u00A07 and\u00A0Windows\u00A0Store, ensuring cross-platform user experience quality.
        This role gave me understanding of\u00A0user-centric design.
      `,
  },
  {
    id: 5,
    title: `${ICON_EMOJI.officeBuilding} IBM ${SHARED.emDash} Mainframe Operator`,
    duration: YEARS.operatorIBM,
    unit: DurationUnitEnum.Year,
    description: `
        Worked as a customer service representative and z/OS mainframe operator, managing mainframe operations and providing technical support.
        This role enhanced my technical skills and customer service abilities.
      `,
  },
  {
    id: 6,
    title: `${ICON_EMOJI.desktopComputer} Front End ${SHARED.emDash} Web Coder`,
    duration: YEARS.webCoder,
    unit: DurationUnitEnum.Year,
    description: `
          My IT career began with developing websites for\u00A0small businesses, laying the\u00A0foundation for\u00A0my\u00A0career in\u00A0IT.
          This experience taught me the importance of\u00A0continuous learning.
        `,
  },
  {
    id: 7,
    title: `${ICON_EMOJI.airplane} Airport ${SHARED.emDash} Airline Ticket Agent`,
    duration: YEARS.ticketAgent,
    unit: DurationUnitEnum.Year,
    description: `
          Worked as an airline ticket agent, handling reservations, ticketing, and customer service.
          This role developed my skills in communication and problem-solving.
        `,
  },
  {
    id: 8,
    title: `${ICON_EMOJI.airplane} Airport ${SHARED.emDash} Flights Information`,
    duration: MONTHS.airportFlightsInfo,
    unit: DurationUnitEnum.Month,
    description: `
          Worked in the airport's information desk, providing passengers with flight information and managing parking lot tickets.
          This role enhanced my abilities in customer service and multitasking.
        `,
  },
  {
    id: 9,
    title: `${ICON_EMOJI.poultryLeg} KFC ${SHARED.emDash} Frying Chicken`,
    duration: MONTHS.crewMemberKFC,
    unit: DurationUnitEnum.Month,
    description: `
          Worked as a crew member at KFC, handling food preparation, customer service, and maintaining cleanliness.
          This role developed my teamwork and multitasking skills.
        `,
  },
  {
    id: 10,
    title: `${ICON_EMOJI.barChart} High School ${SHARED.emDash} Finished as Accountant`,
    duration: YEARS.highSchoolAccountant,
    unit: DurationUnitEnum.Year,
    description: `
        Completed high school with a focus on accounting. This education provided a strong foundation in financial principles and practices.
      `,
  },
]
