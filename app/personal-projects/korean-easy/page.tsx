import { Metadata } from 'next'

import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import ProjectPageLayoutWrapper from '@/components/layout/projects/ProjectPageLayoutWrapper'
import Alert from '@/components/shared/Alert'
import SocialLink from '@/components/shared/SocialLink'

import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { EXTERNAL_URL } from '@/lib/utils/constants/urls/externalUrls'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { getBreadcrumbsPersonal } from '@/lib/utils/helpers/breadcrumbs/getBreadcrumbsPersonal'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { metaDataKoreanEasy } from '@/data/metadata/pages/projects/personal/metaDataKoreanEasy'
import { sections } from '@/data/pages/projects/personal/koreanEasy'
import { projectsPersonalNext } from '@/data/pages/projects/personal/projects-overview/personalNext'
import { AlertColorVariantEnum, GoBackLinkEnum } from '@/lib/types/enums'
import { ICON_EMOJI, PROJECTS, PROJECT_KOREAN_EASY, TEXT } from '@/localization'

export const metadata: Metadata = {
  ...metaDataKoreanEasy,
}

const ProjectPersonalKoreanEasy = () => {
  const AlertType = AlertColorVariantEnum.Info

  return (
    <>
      <ProjectPageLayoutWrapper
        showAlert={
          <Alert
            type={AlertType}
            title={PROJECT_KOREAN_EASY.alertTitle}
            description={PROJECT_KOREAN_EASY.alertDescription}
            linkComponent={
              <SocialLink
                href={EXTERNAL_URL.linkedIn}
                text={PROJECT_KOREAN_EASY.alertLinkText}
                type={AlertType}
                dataTestId={DATA_TEST_IDS.alert.alertLinkLinkedIn}
              />
            }
          />
        }
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
