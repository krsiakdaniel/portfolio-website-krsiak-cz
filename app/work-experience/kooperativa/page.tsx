import NextPageNavigation from '@/components/NextPageNavigation'
import { ProjectPageLayoutWrapper } from '@/components/layout/projectPage/ProjectPageLayoutWrapper'
import { sections } from '@/data/projects/work/kooperativa'
import { projectsWorkReact } from '@/data/projects/work/projectsOverview'
import { ID, PAGES_URL } from '@/utils/constants'
import { BreadCrumbsType } from '@/utils/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kooperativa | Daniel Kršiak - React Developer',
  description: 'I worked on an application for managing insurance policies for citizens property and products.',
  keywords: [
    'Daniel Kršiak',
    'Kooperativa',
    'Insurance company app',
    'React Developer',
    'JavaScript',
    'TypeScript',
    'React',
    'Redux',
    'Tailwind CSS',
    'Figma',
    'Storybook',
  ],
}

const breadCrumbs: BreadCrumbsType = {
  linkLevel1: '/work-experience',
  textLevel1: 'Work Experience',
  linkLevel2: '/work-experience/kooperativa',
  textLevel2: 'Kooperativa',
}

const ProjectWorkKooperativa = () => {
  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={breadCrumbs}
      pageID={PAGES_URL.work.kooperativa}
      goBackLink="work"
      sectionID={ID.section.react}
      projectData={projectsWorkReact[2]}
      sections={sections}
      nextPageNavigation={
        <NextPageNavigation
          pageLinkPrevious="/work-experience/komercni-banka"
          pageNamePrevious="Komerční banka"
          dataTestIDPrevious="page-navigation-previous-komercni-banka"
          pageLinkNext="/work-experience/smartsupp-web"
          pageNameNext="Smartsupp Web"
          dataTestIDNext="page-navigation-next-smartsupp-web"
        />
      }
    />
  )
}

export default ProjectWorkKooperativa
