import { Metadata } from 'next'

import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import ProjectPageLayoutWrapper from '@/components/layout/projects/ProjectPageLayoutWrapper'

import { metaDataKoreanEasy } from '@/lib/data/metadata/pages/projects/personal/metaDataKoreanEasy'
import { sections } from '@/lib/data/pages/projects/personal/koreanEasy'
import { projectsPersonalNext } from '@/lib/data/pages/projects/personal/projects-overview/next/personalNext'

import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { getBreadcrumbsPersonal } from '@/lib/utils/helpers/breadcrumbs/getBreadcrumbsPersonal'
import { GoBackLinkEnum } from '@/lib/utils/typeDefinitions/enums'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { ICON_EMOJI, PROJECTS, TEXT } from '@/localization'

export const metadata: Metadata = {
  ...metaDataKoreanEasy,
}

const ProjectPersonalKoreanEasy = () => {
  return (
    <>
      <ProjectPageLayoutWrapper
        breadCrumbs={getBreadcrumbsPersonal(
          PAGES_URL.personalKoreanEasy,
          ICON_EMOJI.flagSouthKorea,
          PROJECTS.koreanEasy,
        )}
        pageID={PROJECT_ID.personal.koreanEasy}
        goBackLink={GoBackLinkEnum.Personal}
        sectionID={ID.section.next}
        ariaLabel={PROJECTS.koreanEasy}
        projectData={projectsPersonalNext[0]}
        sections={sections}
        PageNavigation={
          <PageNavigation
            linkNext={PAGES_URL.personalKrsiak}
            iconNext={ICON_EMOJI.manTechnologist.lightSkinTone}
            nameNext={TEXT.portfolioWebsite}
            dataTestIdNext={DATA_TEST_IDS.projects.personal.koreanEasy.next}
          />
        }
      />
    </>
  )
}

export default ProjectPersonalKoreanEasy
