import { YEARS } from '@/lib/utils/constants/yearsExperience'
import { SkillCardItem } from '@/lib/utils/typeDefinitions/interfaces'

import { TEXT } from '@/localization/english'

import {
  javascriptSVG,
  nextSVG,
  reactSVG,
  reduxSVG,
  tailwindSVG,
  typescriptSVG,
} from '@/lib/data/shared/skill-icons/skillIconsSVG'

export const skills: SkillCardItem[] = [
  {
    id: TEXT.javaScript,
    imgSrc: javascriptSVG,
    imgAlt: TEXT.javaScript,
    technology: TEXT.javaScript,
    years: YEARS.javaScript,
    tooltip: TEXT.javaScript,
  },
  {
    id: TEXT.typeScript,
    imgSrc: typescriptSVG,
    imgAlt: TEXT.typeScript,
    technology: TEXT.typeScript,
    years: YEARS.typeScript,
    tooltip: TEXT.typeScript,
  },
  {
    id: TEXT.react,
    imgSrc: reactSVG,
    imgAlt: TEXT.react,
    technology: TEXT.react,
    years: YEARS.react,
    tooltip: TEXT.react,
  },
  {
    id: TEXT.nextShort,
    imgSrc: nextSVG,
    imgAlt: TEXT.nextShort,
    technology: TEXT.nextShort,
    years: YEARS.next,
    tooltip: TEXT.nextShort,
  },
  {
    id: TEXT.redux,
    imgSrc: reduxSVG,
    imgAlt: TEXT.redux,
    technology: TEXT.redux,
    years: YEARS.redux,
    tooltip: TEXT.redux,
  },
  {
    id: TEXT.tailwindShort,
    imgSrc: tailwindSVG,
    imgAlt: TEXT.tailwindShort,
    technology: TEXT.tailwindShort,
    years: YEARS.tailwind,
    tooltip: TEXT.tailwindShort,
  },
]
