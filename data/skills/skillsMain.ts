import js from '@/public/icons/svg/skills/js.svg'
import next from '@/public/icons/svg/skills/next.svg'
import react from '@/public/icons/svg/skills/react.svg'
import redux from '@/public/icons/svg/skills/redux.svg'
import tailwind from '@/public/icons/svg/skills/tailwind.svg'
import ts from '@/public/icons/svg/skills/ts.svg'
import { YEARS } from '@/utils/constants/years'
import { generateIconsSkills } from '@/utils/helpers/generateIconsSkills'
import { SkillCard } from '@/utils/interfaces/interfaces'

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
    years: YEARS.javascript,
    description: 'Essential for creating modern interactive web applications.',
  },
  {
    id: 2,
    imgSrc: ts,
    imgAlt: 'TS',
    title: 'TypeScript',
    years: YEARS.typescript,
    description: 'Ensuring type safety, code reliability and\u00A0scalability.',
  },
  {
    id: 3,
    imgSrc: react,
    imgAlt: 'React',
    title: 'React',
    years: YEARS.react,
    description: 'Great for components that are reusable and\u00A0easy to maintain.',
  },
  {
    id: 4,
    imgSrc: redux,
    imgAlt: 'Redux',
    title: 'Redux',
    years: YEARS.redux,
    description: 'Managing application state in a predictable and\u00A0organized way.',
  },
  {
    id: 5,
    imgSrc: next,
    imgAlt: 'Next.js',
    title: 'Next.js',
    years: YEARS.next,
    description: 'The React Framework for creating fast and\u00A0scalable web applications.',
  },
  {
    id: 6,
    imgSrc: tailwind,
    imgAlt: 'Tailwind CSS',
    title: 'Tailwind CSS',
    years: YEARS.tailwind,
    description: 'Amazing utility-first CSS framework for\u00A0quickly building custom designs.',
  },
]
