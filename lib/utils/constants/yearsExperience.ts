import { calculateTechnologyYears } from '@/lib/utils/helpers/years/calculateTechnologyYears'
import { MonthsExperience, YearsExperience } from '@/lib/utils/typeDefinitions/interfaces'

const YEARS = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  SIX: 6,
  EIGHT: 8,
} as const

export const YEARS_EXPERIENCE: YearsExperience = {
  // Dynamic values calculated based on start dates
  get javaScript() {
    return calculateTechnologyYears('javaScript')
  },
  get typeScript() {
    return calculateTechnologyYears('typeScript')
  },
  get react() {
    return calculateTechnologyYears('react')
  },
  get tailwind() {
    return calculateTechnologyYears('tailwind')
  },
  get next() {
    return calculateTechnologyYears('next')
  },
  // Static values
  playwright: YEARS.THREE,
  redux: YEARS.THREE,
  webDeveloper: YEARS.ONE,
  qaAutomation: YEARS.ONE,
  localizationManager: YEARS.TWO,
  localizationTester: YEARS.THREE,
  webCoder: YEARS.ONE,
  consultantWebsites: YEARS.FIVE,
  consultantWordPress: YEARS.FIVE,
  operatorIBM: YEARS.TWO,
  ticketAgent: YEARS.ONE,
  highSchoolAccountant: YEARS.FOUR,
}

export const MONTHS_EXPERIENCE: MonthsExperience = {
  qaTeamLeaderAtSmartsupp: YEARS.SIX,
  airportFlightsInfo: YEARS.EIGHT,
  crewMemberKFC: YEARS.THREE,
}
