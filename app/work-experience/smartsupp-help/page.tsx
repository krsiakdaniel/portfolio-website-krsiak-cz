import { ProjectPageLayoutWrapper } from '@/components/layout/projectPage/ProjectPageLayoutWrapper'
import { projectsWorkWordPress } from '@/data/projects/work/projectsOverview'
import { sections } from '@/data/projects/work/smartsuppHelp'
import { ID, PAGES_URL } from '@/utils/constants'
import { BreadCrumbsType } from '@/utils/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Smartsupp Help | Daniel Krsiak - Content Writer',
  description:
    'Admin & Content Writer at Smartsupp for 6 months. Managed HELP website on WordPress, wrote tutorials, and handled localization into 9 languages.',
  keywords: [
    'Smartsupp Help',
    'SaaS Company - HELP Website',
    'Admin & Content Writer',
    'WordPress',
    'Tutorials',
    'Localization',
  ],
}

const breadCrumbs: BreadCrumbsType = {
  linkLevel1: '/work-experience',
  textLevel1: 'Work Experience',
  linkLevel2: '/work-experience/smartsupp-help',
  textLevel2: 'Smartsupp Help',
}

const ProjectWorkSmartsuppHelp = () => {
  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={breadCrumbs}
      pageID={PAGES_URL.work.smartsupp.help}
      goBackLink="work"
      sectionID={ID.section.wordpress}
      projectData={projectsWorkWordPress[0]}
      sections={sections}
    />
  )
}

export default ProjectWorkSmartsuppHelp
