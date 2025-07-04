import { FC } from 'react'

import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import ProjectPageLayoutWrapper from '@/components/layout/projects/ProjectPageLayoutWrapper'

import { metaDataKomercniBanka } from '@/lib/data/metadata/pages/projects/work/metaDataKomercniBanka'
import { sections } from '@/lib/data/pages/projects/work/komercniBanka'
import { projectsWorkReact } from '@/lib/data/pages/projects/work/projects-overview/react/workReact'

import { ICON_EMOJI, TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { getBreadcrumbsWork } from '@/lib/utils/helpers/breadcrumbs/getBreadcrumbsWork'
import { GoBackLinkEnum } from '@/lib/utils/typeDefinitions/enums'

export const metadata = {
  ...metaDataKomercniBanka,
}

const ProjectWorkKomercniBanka: FC = (): JSX.Element => {
  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={getBreadcrumbsWork(
        PAGES_URL.work.komercniBanka,
        ICON_EMOJI.bank,
        TEXT.komercniBanka,
      )}
      pageID={PROJECT_ID.work.komercniBanka}
      goBackLink={GoBackLinkEnum.Work}
      sectionID={ID.section.react}
      ariaLabel={TEXT.workExperience}
      projectData={projectsWorkReact[1]}
      sections={sections}
      PageNavigation={
        <PageNavigation
          linkPrevious={PAGES_URL.work.smartsupp.dashboard}
          iconPrevious={ICON_EMOJI.speechBalloon}
          namePrevious={TEXT.smartsuppDashboard}
          dataTestIdPrevious={DATA_TEST_IDS.projects.work.komercniBanka.previous}
          linkNext={PAGES_URL.work.kooperativa}
          iconNext={ICON_EMOJI.umbrellaWithRainDrops}
          nameNext={TEXT.kooperativa}
          dataTestIdNext={DATA_TEST_IDS.projects.work.komercniBanka.next}
        />
      }
    />
  )
}

export default ProjectWorkKomercniBanka
