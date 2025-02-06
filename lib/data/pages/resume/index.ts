import { ICON_EMOJI } from '@/localization/english'
import { JOBS } from '@/localization/english-texts-data'

import { MONTHS, YEARS } from '@/lib/utils/constants/yearsExperience'
import { DurationUnitEnum } from '@/lib/utils/typeDefinitions/enums'
import { Job } from '@/lib/utils/typeDefinitions/interfaces'

export const jobs: Job[] = [
  {
    id: 0,
    title: JOBS.reactDev.title,
    icon: ICON_EMOJI.atomSymbol,
    duration: YEARS.react,
    unit: DurationUnitEnum.Year,
    description: JOBS.reactDev.description,
  },
  {
    id: 1,
    title: JOBS.webDev.title,
    icon: ICON_EMOJI.laptop,
    duration: YEARS.webDeveloper,
    unit: DurationUnitEnum.Year,
    description: JOBS.webDev.description,
  },
  {
    id: 2,
    title: JOBS.qaLead.title,
    icon: ICON_EMOJI.robot,
    duration: YEARS.qaAutomation,
    unit: DurationUnitEnum.Year,
    description: JOBS.qaLead.description,
  },
  {
    id: 3,
    title: JOBS.locManager.title,
    icon: ICON_EMOJI.flagCzechRepublic,
    duration: YEARS.localizationManager,
    unit: DurationUnitEnum.Year,
    description: JOBS.locManager.description,
  },
  {
    id: 4,
    title: JOBS.locTester.title,
    icon: ICON_EMOJI.hammerAndWrench,
    duration: YEARS.localizationTester,
    unit: DurationUnitEnum.Year,
    description: JOBS.locTester.description,
  },
  {
    id: 5,
    title: JOBS.ibmOperator.title,
    icon: ICON_EMOJI.officeBuilding,
    duration: YEARS.operatorIBM,
    unit: DurationUnitEnum.Year,
    description: JOBS.ibmOperator.description,
  },
  {
    id: 6,
    title: JOBS.webCoder.title,
    icon: ICON_EMOJI.desktopComputer,
    duration: YEARS.webCoder,
    unit: DurationUnitEnum.Year,
    description: JOBS.webCoder.description,
  },
  {
    id: 7,
    title: JOBS.ticketAgent.title,
    icon: ICON_EMOJI.airplane,
    duration: YEARS.ticketAgent,
    unit: DurationUnitEnum.Year,
    description: JOBS.ticketAgent.description,
  },
  {
    id: 8,
    title: JOBS.flightInfo.title,
    icon: ICON_EMOJI.airplane,
    duration: MONTHS.airportFlightsInfo,
    unit: DurationUnitEnum.Month,
    description: JOBS.flightInfo.description,
  },
  {
    id: 9,
    title: JOBS.kfc.title,
    icon: ICON_EMOJI.poultryLeg,
    duration: MONTHS.crewMemberKFC,
    unit: DurationUnitEnum.Month,
    description: JOBS.kfc.description,
  },
  {
    id: 10,
    title: JOBS.highSchool.title,
    icon: ICON_EMOJI.barChart,
    duration: YEARS.highSchoolAccountant,
    unit: DurationUnitEnum.Year,
    description: JOBS.highSchool.description,
  },
]
