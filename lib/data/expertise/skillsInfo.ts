import { YEARS } from '@/lib/utils/constants/years'
import { SkillInfo } from '@/lib/utils/interfaces/interfaces'

export const skillsInfo: SkillInfo[] = [
  {
    id: 0,
    order: 1,
    title: 'JavaScript, TypeScript, and React',
    description: `I have ${YEARS.javascript} years of experience creating modern, interactive web applications, utilizing Tailwind CSS to deliver visually appealing and\u00A0responsive designs.`,
  },
  {
    id: 1,
    order: 2,
    title: 'Proficient in technologies',
    description:
      'I leverage React, Next.js, Redux, GraphQL, Jest, Playwright, and\u00A0Figma to ensure code reliability, scalability and\u00A0the\u00A0delivery of\u00A0high-quality solutions and\u00A0products.',
  },
  {
    id: 2,
    order: 3,
    title: 'Focus on type safety',
    description: `With ${YEARS.typescript} years of experience in TypeScript, I focus on code safety, and creating robust and scalable codebases. Less errors save both time and\u00A0money.`,
  },
]
