import { ProjectPageLayoutWrapper } from '@/components/layout/projectPage/ProjectPageLayoutWrapper'
import { sections } from '@/data/projects/work/moravia'
import { projectsWorkLocalization } from '@/data/projects/work/projectsOverview'
import { ID, PAGES_URL } from '@/utils/constants'
import { BreadCrumbsType } from '@/utils/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RWS Moravia IT | QA Automation - Team Leader',
  description:
    'QA Automation - Team Leader at Moravia for 1 year. Microsoft projects Windows 8 + Windows Phone, managing translation delivery and ensuring quality.',
  keywords: [
    'RWS (Moravia - IT)',
    'Windows',
    'QA Automation - Team Leader',
    'HTML',
    'CSS',
    'JavaScript',
    'Localization',
    'Quality Checks',
    'Microsoft Projects',
    'Windows 8',
    'Windows Phone',
  ],
}

const breadCrumbs: BreadCrumbsType = {
  linkLevel1: '/work-experience',
  textLevel1: 'Work Experience',
  linkLevel2: '/work-experience/moravia',
  textLevel2: 'Moravia',
}

const ProjectWorkMoravia = () => {
  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={breadCrumbs}
      pageID={PAGES_URL.work.moravia}
      goBackLink="work"
      sectionID={ID.section.localization}
      projectData={projectsWorkLocalization[0]}
      sections={sections}
    />
  )
}

export default ProjectWorkMoravia
