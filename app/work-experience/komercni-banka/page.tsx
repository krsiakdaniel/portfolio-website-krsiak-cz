import { ProjectPageLayoutWrapper } from '@/components/layout/projectPage/ProjectPageLayoutWrapper'
import PageNavigation from '@/components/pageNavigation/PageNavigation'
import { sections } from '@/data/projects/work/komercniBanka'
import { projectsWorkReact } from '@/data/projects/work/projectsOverview/workReact'
import { TEXT } from '@/localization/texts_en'
import { ID } from '@/utils/constants/ids/ids'
import { PAGES_URL, URL_WORK_EXPERIENCE } from '@/utils/constants/pageUrls'
import { DATA_TEST_IDS } from '@/utils/dataTestIds'
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
  textLevel1: TEXT.workExperience,
  linkLevel2: PAGES_URL.work.komercniBanka,
  textLevel2: TEXT.komercniBanka,
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
