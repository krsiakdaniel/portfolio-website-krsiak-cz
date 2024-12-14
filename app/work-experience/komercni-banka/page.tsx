import NextPageNavigation from '@/components/NextPageNavigation'
import { ProjectPageLayoutWrapper } from '@/components/layout/projectPage/ProjectPageLayoutWrapper'
import { sections } from '@/data/projects/work/komercniBanka'
import { projectsWorkReact } from '@/data/projects/work/projectsOverview/workReact'
import { TEXT } from '@/localization/texts_en'
import { ID, PAGES_URL, URL_WORK_EXPERIENCE } from '@/utils/constants'
import { BreadCrumbsType } from '@/utils/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Komerční banka | ${TEXT.nameDanielKrsiak} - ${TEXT.reactDeveloper}`,
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
  linkLevel1: URL_WORK_EXPERIENCE,
  textLevel1: 'Work Experience',
  linkLevel2: PAGES_URL.work.komercniBanka,
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
          dataTestIdPrevious="page-navigation-previous-smartsupp-dashboard"
          pageLinkNext="/work-experience/kooperativa"
          pageNameNext="Kooperativa"
          dataTestIdNext="page-navigation-next-kooperativa"
        />
      }
    />
  )
}

export default ProjectWorkKomercniBanka
