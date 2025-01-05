import { YEARS } from '@/lib/utils/constants/yearsExperience'
import { SkillCardItem } from '@/lib/utils/interfaces/interfaces'

import { TEXT } from '@/localization/english'

import javascript from '@/public/icons/svg/skills/javascript.svg'
import next from '@/public/icons/svg/skills/next.svg'
import react from '@/public/icons/svg/skills/react.svg'
import redux from '@/public/icons/svg/skills/redux.svg'
import tailwind from '@/public/icons/svg/skills/tailwind.svg'
import typescript from '@/public/icons/svg/skills/typescript.svg'

export const skills: SkillCardItem[] = [
  {
    id: TEXT.javaScript,
    imgSrc: javascript,
    imgAlt: TEXT.javaScript,
    title: TEXT.javaScript,
    years: YEARS.javaScript,
  },
  {
    id: TEXT.typeScript,
    imgSrc: typescript,
    imgAlt: TEXT.typeScript,
    title: TEXT.typeScript,
    years: YEARS.typeScript,
  },
  {
    id: TEXT.react,
    imgSrc: react,
    imgAlt: TEXT.react,
    title: TEXT.react,
    years: YEARS.react,
  },
  {
    id: TEXT.nextShort,
    imgSrc: next,
    imgAlt: TEXT.nextShort,
    title: TEXT.nextShort,
    years: YEARS.next,
  },
  {
    id: TEXT.redux,
    imgSrc: redux,
    imgAlt: TEXT.redux,
    title: TEXT.redux,
    years: YEARS.redux,
  },
  {
    id: TEXT.tailwindShort,
    imgSrc: tailwind,
    imgAlt: TEXT.tailwindShort,
    title: TEXT.tailwindShort,
    years: YEARS.tailwind,
  },
]
