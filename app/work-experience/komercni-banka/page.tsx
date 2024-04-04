import NextPageNavigation from '@/components/NextPageNavigation'
import { ProjectPageLayoutWrapper } from '@/components/layout/projectPage/ProjectPageLayoutWrapper'
import { sections } from '@/data/projects/work/komercniBanka'
import { projectsWorkReact } from '@/data/projects/work/projectsOverview'
import { ID, PAGES_URL } from '@/utils/constants'
import { BreadCrumbsType } from '@/utils/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Komerční banka | Daniel Krsiak -React Developer',
  description:
    'Worked as a React Developer at Komerční banka. Developed search page for branches & ATMs, exchange rates. Enhanced UX, improved responsive design across devices.',
  keywords: [
    'Komerční banka',
    'Commerce Bank - Website',
    'React Developer',
    'Search Page',
    'Exchange Rates Page',
    'Geolocation API',
    'Google Places Autocomplete API',
    'Responsive Design',
  ],
}

const breadCrumbs: BreadCrumbsType = {
  linkLevel1: '/work-experience',
  textLevel1: 'Work Experience',
  linkLevel2: '/work-experience/komercni-banka',
  textLevel2: 'Komerční banka',
}

const ProjectWorkKomercniBanka = () => {
  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={breadCrumbs}
      pageID={PAGES_URL.work.komercniBanka}
      goBackLink="work"
      sectionID={ID.section.react}
      projectData={projectsWorkReact[1]}
      sections={sections}
      nextPageNavigation={
        <NextPageNavigation
          pageLinkPrevious="/work-experience/smartsupp-dashboard"
          pageNamePrevious="Smartsupp Dashboard"
          dataTestIDPrevious="page-navigation-previous-smartsupp-dashboard"
          pageLinkNext="/work-experience/smartsupp-web"
          pageNameNext="Smartsupp Web"
          dataTestIDNext="page-navigation-next-smartsupp-web"
        />
      }
    />
  )
}

export default ProjectWorkKomercniBanka
