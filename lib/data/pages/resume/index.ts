import { ICON_EMOJI } from '@/localization/english'
import { JOBS } from '@/localization/english-texts-data'

import { MONTHS, YEARS } from '@/lib/utils/constants/yearsExperience'
import { DurationUnitEnum } from '@/lib/utils/typeDefinitions/enums'
import { Job } from '@/lib/utils/typeDefinitions/interfaces'

export const jobs: Job[] = [
  {
    id: 0,
    title: `${ICON_EMOJI.atomSymbol} ${JOBS.reactDev.title}`,
    duration: YEARS.react,
    unit: DurationUnitEnum.Year,
    description: JOBS.reactDev.description,
  },
  {
    id: 1,
    title: `${ICON_EMOJI.laptop} ${JOBS.webDev.title}`,
    duration: YEARS.webDeveloper,
    unit: DurationUnitEnum.Year,
    description: JOBS.webDev.description,
  },
  {
    id: 2,
    title: `${ICON_EMOJI.robot} ${JOBS.qaLead.title}`,
    duration: YEARS.qaAutomation,
    unit: DurationUnitEnum.Year,
    description: JOBS.qaLead.description,
  },
  {
    id: 3,
    title: `${ICON_EMOJI.flagCzechRepublic} ${JOBS.locManager.title}`,
    duration: YEARS.localizationManager,
    unit: DurationUnitEnum.Year,
    description: JOBS.locManager.description,
  },
  {
    id: 4,
    title: `${ICON_EMOJI.hammerAndWrench} ${JOBS.locTester.title}`,
    duration: YEARS.localizationTester,
    unit: DurationUnitEnum.Year,
    description: JOBS.locTester.description,
  },
  {
    id: 5,
    title: `${ICON_EMOJI.officeBuilding} ${JOBS.ibmOperator.title}`,
    duration: YEARS.operatorIBM,
    unit: DurationUnitEnum.Year,
    description: JOBS.ibmOperator.description,
  },
  {
    id: 6,
    title: `${ICON_EMOJI.desktopComputer} ${JOBS.webCoder.title}`,
    duration: YEARS.webCoder,
    unit: DurationUnitEnum.Year,
    description: JOBS.webCoder.description,
  },
  {
    id: 7,
    title: `${ICON_EMOJI.airplane} ${JOBS.ticketAgent.title}`,
    duration: YEARS.ticketAgent,
    unit: DurationUnitEnum.Year,
    description: JOBS.ticketAgent.description,
  },
  {
    id: 8,
    title: `${ICON_EMOJI.airplane} ${JOBS.flightInfo.title}`,
    duration: MONTHS.airportFlightsInfo,
    unit: DurationUnitEnum.Month,
    description: JOBS.flightInfo.description,
  },
  {
    id: 9,
    title: `${ICON_EMOJI.poultryLeg} ${JOBS.kfc.title}`,
    duration: MONTHS.crewMemberKFC,
    unit: DurationUnitEnum.Month,
    description: JOBS.kfc.description,
  },
  {
    id: 10,
    title: `${ICON_EMOJI.barChart} ${JOBS.highSchool.title}`,
    duration: YEARS.highSchoolAccountant,
    unit: DurationUnitEnum.Year,
    description: JOBS.highSchool.description,
  },
]
