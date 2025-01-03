import { YEARS } from '@/lib/utils/constants/yearsExperience'

import { SkillInfo } from '@/lib/utils/interfaces/interfaces'

export const skillsInfo: SkillInfo[] = [
  {
    id: 0,
    order: 1,
    title: 'JavaScript, TypeScript, and React',
    description: `I have ${YEARS.javascript} years of experience creating modern, interactive web applications, using Tailwind CSS to deliver responsive designs.`,
  },
  {
    id: 1,
    order: 2,
    title: 'Proficient in technologies',
    description:
      'I use React, TypeScript, Next.js, Jest, and Playwright, to\u00A0ensure reliable code, scalability and\u00A0the\u00A0delivery of\u00A0quality products.',
  },
  {
    id: 2,
    order: 3,
    title: 'Focus on type safety',
    description: `With ${YEARS.typescript} years of experience in TypeScript, I focus on code safety, and creating scalable codebase. Less errors save money.`,
  },
]
