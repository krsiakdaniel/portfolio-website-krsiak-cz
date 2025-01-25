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
} from '@/lib/data/skill-icons/skillIconsSVG'

export const skills: SkillCardItem[] = [
  {
    id: TEXT.javaScript,
    imgSrc: javascriptSVG,
    imgAlt: TEXT.javaScript,
    title: TEXT.javaScript,
    years: YEARS.javaScript,
  },
  {
    id: TEXT.typeScript,
    imgSrc: typescriptSVG,
    imgAlt: TEXT.typeScript,
    title: TEXT.typeScript,
    years: YEARS.typeScript,
  },
  {
    id: TEXT.react,
    imgSrc: reactSVG,
    imgAlt: TEXT.react,
    title: TEXT.react,
    years: YEARS.react,
  },
  {
    id: TEXT.nextShort,
    imgSrc: nextSVG,
    imgAlt: TEXT.nextShort,
    title: TEXT.nextShort,
    years: YEARS.next,
  },
  {
    id: TEXT.redux,
    imgSrc: reduxSVG,
    imgAlt: TEXT.redux,
    title: TEXT.redux,
    years: YEARS.redux,
  },
  {
    id: TEXT.tailwindShort,
    imgSrc: tailwindSVG,
    imgAlt: TEXT.tailwindShort,
    title: TEXT.tailwindShort,
    years: YEARS.tailwind,
  },
]
