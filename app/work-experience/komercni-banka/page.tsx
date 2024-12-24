import { ProjectPageLayoutWrapper } from '@/components/layout/project-page/ProjectPageLayoutWrapper'
import PageNavigation from '@/components/page-navigation/PageNavigation'
import { sections } from '@/data/projects/work/komercniBanka'
import { projectsWorkReact } from '@/data/projects/work/projects-overview/workReact'
import { TEXT } from '@/localization/english'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'
import { ID } from '@/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/utils/constants/urls/pageUrls'
import { getBreadcrumbsWork } from '@/utils/helpers/breadcrumbs/getBreadcrumbsWork'
import { GoBackLinkEnum } from '@/utils/interfaces/enums'
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

const ProjectWorkKomercniBanka = () => {
  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={getBreadcrumbsWork(PAGES_URL.work.komercniBanka, TEXT.komercniBanka)}
      pageID={PAGES_URL.work.komercniBanka}
      goBackLink={GoBackLinkEnum.Work}
      sectionID={ID.section.react}
      projectData={projectsWorkReact[1]}
      sections={sections}
      PageNavigation={
        <PageNavigation
          linkPrevious={PAGES_URL.work.smartsupp.dashboard}
          namePrevious={TEXT.smartsuppDashboard}
          dataTestIdPrevious={DATA_TEST_IDS.projects.work.komercniBanka.previous}
          linkNext={PAGES_URL.work.kooperativa}
          nameNext={TEXT.kooperativa}
          dataTestIdNext={DATA_TEST_IDS.projects.work.komercniBanka.next}
        />
      }
    />
  )
}

export default ProjectWorkKomercniBanka
