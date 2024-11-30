import NextPageNavigation from '@/components/NextPageNavigation'
import { ProjectPageLayoutWrapper } from '@/components/layout/projectPage/ProjectPageLayoutWrapper'
import { projectsWorkFrontEnd } from '@/data/projects/work/projectsOverview'
import { sections } from '@/data/projects/work/smartsuppWeb'
import { ID, PAGES_URL } from '@/utils/constants'
import { BreadCrumbsType } from '@/utils/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Smartsupp Web | Daniel Kršiak - Front End Developer',
  description:
    'Worked as a Front End Developer at Smartsupp for 1 year. Created company website Front End, collaborated with UX designer on brand theme and layout.',
  keywords: [
    'Smartsupp Web',
    'SaaS Company - Website',
    'Front End Developer',
    'Company Website Front End',
    'Documentation Site',
    'Jekyll',
    'Markdown',
    'Shopify Liquid',
    'VuePress',
  ],
}

const breadCrumbs: BreadCrumbsType = {
  linkLevel1: '/work-experience',
  textLevel1: 'Work Experience',
  linkLevel2: '/work-experience/smartsupp-web',
  textLevel2: 'Smartsupp Web',
}

const ProjectWorkSmartsuppWeb = () => {
  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={breadCrumbs}
      pageID={PAGES_URL.work.smartsupp.web}
      goBackLink="work"
      sectionID={ID.section.frontEnd}
      projectData={projectsWorkFrontEnd[0]}
      sections={sections}
      nextPageNavigation={
        <NextPageNavigation
          pageLinkPrevious="/work-experience/kooperativa"
          pageNamePrevious="Kooperativa"
          dataTestIDPrevious="page-navigation-previous-kooperativa"
          pageLinkNext="/work-experience/smartsupp-help"
          pageNameNext="Smartsupp HELP"
          dataTestIDNext="page-navigation-next-smartsupp-help"
        />
      }
    />
  )
}

export default ProjectWorkSmartsuppWeb
