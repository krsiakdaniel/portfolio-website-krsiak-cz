import { ProjectPageLayoutWrapper } from '@/components/layout/projectPage/ProjectPageLayoutWrapper'
import { sections } from '@/data/projects/work/groupon'
import { projectsWorkQA } from '@/data/projects/work/projectsOverview'
import { ID, PAGES_URL } from '@/utils/constants'
import { BreadCrumbsType } from '@/utils/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Groupon | QA Automation - Team Leader',
  description:
    'QA Automation SDET - Team Lead at Groupon. Responsible for new QA team, hiring, coordinating testing for online marketplace with 17 million customers.',
  keywords: [
    'Groupon',
    'SDET',
    'E-Commerce - Marketplace',
    'QA Automation - Team Leader',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Playwright',
    'Figma',
    'Storybook',
    'Jira',
    'Confluence',
    'Tempo',
    'QA',
    'Team Management',
  ],
}

const breadCrumbs: BreadCrumbsType = {
  linkLevel1: '/work-experience',
  textLevel1: 'Work Experience',
  linkLevel2: '/work-experience/groupon',
  textLevel2: 'Groupon',
}

const ProjectWorkGroupon = () => {
  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={breadCrumbs}
      pageID={PAGES_URL.work.groupon}
      goBackLink="work"
      sectionID={ID.section.qa}
      projectData={projectsWorkQA[0]}
      sections={sections}
    />
  )
}

export default ProjectWorkGroupon
