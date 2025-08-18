import { MonthsExperience, YearsExperience } from '@/lib/utils/typeDefinitions/interfaces'

import { getAllTechnologyYears } from '@/lib/utils/helpers/years/calculateTechnologyYears'

const ONE = 1
const TWO = 2
const THREE = 3
const FOUR = 4
const FIVE = 5
const SIX = 6
const EIGHT = 8

// Get automatically calculated technology years
const technologyYears = getAllTechnologyYears()

export const YEARS: YearsExperience = {
  javaScript: technologyYears.javaScript,
  typeScript: technologyYears.typeScript,
  react: technologyYears.react,
  tailwind: technologyYears.tailwind,
  playwright: technologyYears.playwright,
  next: technologyYears.next,
  redux: THREE,
  webDeveloper: ONE,
  qaAutomation: ONE,
  localizationManager: TWO,
  localizationTester: THREE,
  webCoder: ONE,
  consultantWebsites: FIVE,
  consultantWordPress: FIVE,
  operatorIBM: TWO,
  ticketAgent: ONE,
  highSchoolAccountant: FOUR,
}

export const MONTHS: MonthsExperience = {
  qaTeamLeaderAtSmartsupp: SIX,
  airportFlightsInfo: EIGHT,
  crewMemberKFC: THREE,
}
