import { CareerPathStep } from '@/lib/utils/typeDefinitions/interfaces'
import { ICON_EMOJI } from '@/localization/english'
import { TEXT_DATA } from '@/localization/english-texts-data'

export const careerPathSteps: CareerPathStep[] = [
  { id: 0, emoji: ICON_EMOJI.atomSymbol, text: TEXT_DATA.reactDev },
  { id: 1, emoji: ICON_EMOJI.laptop, text: TEXT_DATA.webDev },
  { id: 2, emoji: ICON_EMOJI.cog, text: TEXT_DATA.testing },
  { id: 3, emoji: ICON_EMOJI.officeBuilding, text: TEXT_DATA.ibm },
  { id: 4, emoji: ICON_EMOJI.airplane, text: TEXT_DATA.airport },
  { id: 5, emoji: ICON_EMOJI.poultryLeg, text: TEXT_DATA.kfc },
  { id: 6, emoji: ICON_EMOJI.books, text: TEXT_DATA.highSchool },
]
