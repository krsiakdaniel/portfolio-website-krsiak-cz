import js from '@/public/icons/svg/skills/js.svg'
import react from '@/public/icons/svg/skills/react.svg'
import redux from '@/public/icons/svg/skills/redux.svg'
import ts from '@/public/icons/svg/skills/ts.svg'
import { YEARS } from '@/utils/constants'
import { generateIconsSkills } from '@/utils/generateIconsSkills'
import { SkillCard } from '@/utils/interfaces'

export const iconsSkills1 = generateIconsSkills(['html', 'css', 'scss', 'tailwind'])
export const iconsSkills2 = generateIconsSkills(['js', 'ts', 'react', 'next'])
export const iconsSkills3 = generateIconsSkills(['redux', 'graphql', 'jest', 'playwright'])
export const iconsSkills4 = generateIconsSkills(['figma'])

export const skills: SkillCard[] = [
  {
    id: 1,
    imgSrc: js,
    imgAlt: 'JS',
    title: 'JavaScript',
    titleYears: YEARS.javascript,
    description: 'Essential for creating modern interactive web applications.',
  },
  {
    id: 2,
    imgSrc: ts,
    imgAlt: 'TS',
    title: 'TypeScript',
    titleYears: YEARS.typescript,
    description: 'Ensuring type safety, code reliability and scalability.',
  },
  {
    id: 3,
    imgSrc: react,
    imgAlt: 'React',
    title: 'React',
    titleYears: YEARS.react,
    description: 'Great for components that are reusable and easy to maintain.',
  },
  {
    id: 4,
    imgSrc: redux,
    imgAlt: 'Redux',
    title: 'Redux',
    titleYears: YEARS.redux,
    description: 'Managing application state in a predictable and organized way.',
  },
]
