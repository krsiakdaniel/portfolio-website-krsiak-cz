import { YEARS } from '@/lib/utils/constants/yearsExperience'

import { getSkillsIcons } from '@/lib/utils/helpers/getSkillsIcons'
import { Icon, SkillCard } from '@/lib/utils/interfaces/interfaces'
import { TEXT } from '@/localization/english'

import js from '@/public/icons/svg/skills/js.svg'
import next from '@/public/icons/svg/skills/next.svg'
import react from '@/public/icons/svg/skills/react.svg'
import redux from '@/public/icons/svg/skills/redux.svg'
import tailwind from '@/public/icons/svg/skills/tailwind.svg'
import ts from '@/public/icons/svg/skills/ts.svg'

export const iconsSkills1: Icon[] = getSkillsIcons(['html', 'css', 'scss', 'tailwind'])
export const iconsSkills2: Icon[] = getSkillsIcons(['js', 'ts', 'react', 'next'])
export const iconsSkills3: Icon[] = getSkillsIcons(['redux', 'graphql', 'jest', 'playwright'])
export const iconsSkills4: Icon[] = getSkillsIcons(['figma'])

export const skills: SkillCard[] = [
  {
    id: 0,
    imgSrc: js,
    imgAlt: TEXT.javaScript,
    title: TEXT.javaScript,
    years: YEARS.javaScript,
  },
  {
    id: 1,
    imgSrc: ts,
    imgAlt: TEXT.typeScript,
    title: TEXT.typeScript,
    years: YEARS.typeScript,
  },
  {
    id: 2,
    imgSrc: react,
    imgAlt: TEXT.react,
    title: TEXT.react,
    years: YEARS.react,
  },
  {
    id: 3,
    imgSrc: redux,
    imgAlt: TEXT.redux,
    title: TEXT.redux,
    years: YEARS.redux,
  },
  {
    id: 4,
    imgSrc: next,
    imgAlt: TEXT.next,
    title: TEXT.next,
    years: YEARS.next,
  },
  {
    id: 5,
    imgSrc: tailwind,
    imgAlt: TEXT.tailwindCss,
    title: TEXT.tailwindCss,
    years: YEARS.tailwind,
  },
]
