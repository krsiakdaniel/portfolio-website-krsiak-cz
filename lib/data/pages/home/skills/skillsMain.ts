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
  },
  {
    id: TEXT.typeScript,
    imgSrc: typescriptSVG,
    imgAlt: TEXT.typeScript,
    technology: TEXT.typeScript,
    years: YEARS.typeScript,
  },
  {
    id: TEXT.react,
    imgSrc: reactSVG,
    imgAlt: TEXT.react,
    technology: TEXT.react,
    years: YEARS.react,
  },
  {
    id: TEXT.nextShort,
    imgSrc: nextSVG,
    imgAlt: TEXT.nextShort,
    technology: TEXT.nextShort,
    years: YEARS.next,
  },
  {
    id: TEXT.redux,
    imgSrc: reduxSVG,
    imgAlt: TEXT.redux,
    technology: TEXT.redux,
    years: YEARS.redux,
  },
  {
    id: TEXT.tailwindShort,
    imgSrc: tailwindSVG,
    imgAlt: TEXT.tailwindShort,
    technology: TEXT.tailwindShort,
    years: YEARS.tailwind,
  },
]
