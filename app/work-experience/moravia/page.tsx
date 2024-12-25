import { Metadata } from 'next'

import { ProjectPageLayoutWrapper } from '@/components/layout/project-page/ProjectPageLayoutWrapper'
import PageNavigation from '@/components/page-navigation/PageNavigation'

import { sections } from '@/data/projects/work/moravia'
import { projectsWorkLocalization } from '@/data/projects/work/projects-overview/workLocalization'

import { TEXT } from '@/localization/english'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'
import { ID } from '@/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/utils/constants/urls/pageUrls'

import { getBreadcrumbsWork } from '@/utils/helpers/breadcrumbs/getBreadcrumbsWork'
import { GoBackLinkEnum } from '@/utils/interfaces/enums'

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

const ProjectWorkMoravia = () => {
  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={getBreadcrumbsWork(PAGES_URL.work.moravia, TEXT.moravia)}
      pageID={PAGES_URL.work.moravia}
      goBackLink={GoBackLinkEnum.Work}
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
