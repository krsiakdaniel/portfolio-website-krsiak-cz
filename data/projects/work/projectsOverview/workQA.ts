import { iconsSkillsProjectsWorkGroupon } from '@/data/skills/skillsProjectsWork'
import { PAGES_URL, PROJECT_ID } from '@/utils/constants'
import { Project } from '@/utils/interfaces'

// groupon
import groupon1 from '@/public/images/projects-work/groupon/groupon-1-light.png'
import groupon2 from '@/public/images/projects-work/groupon/groupon-2-light.png'
import grouponThumb from '@/public/images/projects-work/groupon/groupon-thumb-light-600.webp'

export const projectsWorkQA: Project[] = [
  {
    id: PROJECT_ID.work.groupon,
    isFeatured: false,
    image: grouponThumb.src,
    imageShowcase: [
      { id: 1, src: groupon1.src },
      { id: 2, src: groupon2.src },
    ],
    title: '🛒 E-Commerce - Marketplace',
    company: 'Groupon',
    role: 'QA Automation - Team Leader',
    years: '4\u00A0months',
    description:
      'I was responsible setting up new QA team, related processes, hiring and managing people, making test plans, test cases, and scripts.',
    mySkillsIcons: iconsSkillsProjectsWorkGroupon,
    skillsOverview: [
      {
        id: 1,
        description: 'Frontend',
        skillsList: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Playwright'],
      },
      { id: 2, description: 'Design', skillsList: ['Figma', 'Storybook'] },
      { id: 3, description: 'Other', skillsList: ['Jira', 'Confluence', 'Tempo', 'QA', 'Team Management'] },
    ],
    linkText: 'Project details',
    projectLinks: [{ urlText: 'Website →', url: 'https://www.groupon.com/' }],
    customers: '17 000 000+',
    linkProjectPage: PAGES_URL.work.groupon,
  },
]
