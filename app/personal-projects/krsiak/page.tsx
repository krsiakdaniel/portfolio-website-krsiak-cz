import { Metadata } from 'next'

import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import ProjectPageLayoutWrapper from '@/components/layout/projects/ProjectPageLayoutWrapper'
import Alert from '@/components/shared/Alert'
import SocialLink from '@/components/shared/SocialLink'

import { metaDataKrsiak } from '@/lib/data/metadata/pages/projects/personal/metaDataKrsiak'
import { sections } from '@/lib/data/pages/projects/personal/krsiak'
import { projectsPersonalNext } from '@/lib/data/pages/projects/personal/projects-overview/next/personalNext'

import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { EXTERNAL_URL } from '@/lib/utils/constants/urls/externalUrls'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { getBreadcrumbsPersonal } from '@/lib/utils/helpers/breadcrumbs/getBreadcrumbsPersonal'
import { AlertTypeEnum, GoBackLinkEnum } from '@/lib/utils/typeDefinitions/enums'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { ICON_EMOJI, PROJECTS, PROJECT_CRYPTOMANIA, PROJECT_KRSIAK, TEXT } from '@/localization'

export const metadata: Metadata = {
  ...metaDataKrsiak,
}

const ProjectPersonalKrsiak = () => {
  const AlertType = AlertTypeEnum.Info

  return (
    <ProjectPageLayoutWrapper
      showAlert={
        <Alert
          type={AlertType}
          title={PROJECT_KRSIAK.alertTitle}
          description={PROJECT_KRSIAK.alertDescription}
          linkComponent={
            <SocialLink
              href={EXTERNAL_URL.gitHub}
              text={PROJECT_CRYPTOMANIA.alertLinkText}
              type={AlertType}
              dataTestId={DATA_TEST_IDS.alert.alertLinkGitHub}
            />
          }
        />
      }
      breadCrumbs={getBreadcrumbsPersonal(
        PAGES_URL.personalKrsiak,
        ICON_EMOJI.manTechnologist.lightSkinTone,
        TEXT.portfolioWebsite,
      )}
      pageID={PROJECT_ID.personal.krsiak}
      goBackLink={GoBackLinkEnum.Personal}
      sectionID={ID.section.next}
      ariaLabel={TEXT.portfolioWebsite}
      projectData={projectsPersonalNext[1]}
      sections={sections}
      PageNavigation={
        <PageNavigation
          linkPrevious={PAGES_URL.personalKoreanEasy}
          iconPrevious={ICON_EMOJI.flagSouthKorea}
          namePrevious={PROJECTS.koreanEasy}
          dataTestIdPrevious={DATA_TEST_IDS.projects.personal.krsiak.previous}
          linkNext={PAGES_URL.personalCryptoMania}
          iconNext={ICON_EMOJI.moneyBag}
          nameNext={TEXT.cryptoMania}
          dataTestIdNext={DATA_TEST_IDS.projects.personal.krsiak.next}
        />
      }
    />
  )
}

export default ProjectPersonalKrsiak
