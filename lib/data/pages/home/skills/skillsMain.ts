import { YEARS_EXPERIENCE } from '@/lib/utils/constants/yearsExperience'
import { SkillCardItem } from '@/lib/utils/typeDefinitions/interfaces'

import { TEXT } from '@/localization/english'

import {
  nextSVG,
  playwrightSVG,
  reactSVG,
  reduxSVG,
  tailwindSVG,
  typescriptSVG,
} from '@/lib/data/shared/skill-icons/skillIconsSVG'

export const skills: SkillCardItem[] = [
  {
    id: TEXT.typeScript,
    imgSrc: typescriptSVG,
    imgAlt: TEXT.typeScript,
    technology: TEXT.typeScript,
    years: YEARS_EXPERIENCE.typeScript,
    tooltip: TEXT.typeScript,
  },
  {
    id: TEXT.react,
    imgSrc: reactSVG,
    imgAlt: TEXT.react,
    technology: TEXT.react,
    years: YEARS_EXPERIENCE.react,
    tooltip: TEXT.react,
  },
  {
    id: TEXT.nextShort,
    imgSrc: nextSVG,
    imgAlt: TEXT.nextShort,
    technology: TEXT.nextShort,
    years: YEARS_EXPERIENCE.next,
    tooltip: TEXT.nextShort,
  },
  {
    id: TEXT.redux,
    imgSrc: reduxSVG,
    imgAlt: TEXT.redux,
    technology: TEXT.redux,
    years: YEARS_EXPERIENCE.redux,
    tooltip: TEXT.redux,
  },
  {
    id: TEXT.tailwindShort,
    imgSrc: tailwindSVG,
    imgAlt: TEXT.tailwindShort,
    technology: TEXT.tailwindShort,
    years: YEARS_EXPERIENCE.tailwind,
    tooltip: TEXT.tailwindShort,
  },
  {
    id: TEXT.playwright,
    imgSrc: playwrightSVG,
    imgAlt: TEXT.playwright,
    technology: TEXT.playwright,
    years: YEARS_EXPERIENCE.playwright,
    tooltip: TEXT.playwright,
  },
]
