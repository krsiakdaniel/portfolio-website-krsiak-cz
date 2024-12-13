import { ProjectPageLayoutWrapper } from '@/components/layout/projectPage/ProjectPageLayoutWrapper'
import PageNavigation from '@/components/pageNavigation/PageNavigation'
import { sections } from '@/data/projects/work/moravia'
import { projectsWorkLocalization } from '@/data/projects/work/projectsOverview/workLocalization'
import { TEXT } from '@/localization/english'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'
import { ID } from '@/utils/constants/ids/elementIds'
import { PAGES_URL, URL_WORK_EXPERIENCE } from '@/utils/constants/urls/pageUrls'
import { BreadCrumbsType } from '@/utils/interfaces/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `RWS - Moravia IT | ${TEXT.nameDanielKrsiak} - QA Automation Team Leader`,
  description:
    'QA Automation - Team Leader at Moravia for 1 year. Microsoft projects Windows 8 + Windows Phone, managing translation delivery and ensuring quality.',
  keywords: [
    `${TEXT.nameDanielKrsiak}`,
    'RWS - Moravia IT',
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
  linkLevel1: URL_WORK_EXPERIENCE,
  textLevel1: TEXT.workExperience,
  linkLevel2: PAGES_URL.work.moravia,
  textLevel2: TEXT.moravia,
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
      PageNavigation={
        <PageNavigation
          linkPrevious={PAGES_URL.work.groupon}
          namePrevious={TEXT.groupon}
          dataTestIdPrevious={DATA_TEST_IDS.projects.work.moravia.previous}
        />
      }
    />
  )
}

export default ProjectWorkMoravia
