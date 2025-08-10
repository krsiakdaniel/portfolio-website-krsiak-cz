import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import ProjectPageLayoutWrapper from '@/components/layout/projects/ProjectPageLayoutWrapper'
import Alert from '@/components/shared/Alert'
import SocialLink from '@/components/shared/SocialLink'

import { metaDataCryptomania } from '@/lib/data/metadata/pages/projects/personal/metaDataCryptomania'
import { sections } from '@/lib/data/pages/projects/personal/cryptoMania'
import { projectsPersonalReact } from '@/lib/data/pages/projects/personal/projects-overview/react/personalReact'

import { ICON_EMOJI, PROJECT_CRYPTOMANIA, TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { EXTERNAL_URL } from '@/lib/utils/constants/urls/externalUrls'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { getBreadcrumbsPersonal } from '@/lib/utils/helpers/breadcrumbs/getBreadcrumbsPersonal'
import { AlertTypeEnum, GoBackLinkEnum } from '@/lib/utils/typeDefinitions/enums'

export const metadata = {
  ...metaDataCryptomania,
}

const ProjectPersonalCryptomania = () => {
  const AlertType = AlertTypeEnum.Info

  return (
    <>
      <ProjectPageLayoutWrapper
        breadCrumbs={getBreadcrumbsPersonal(
          PAGES_URL.personal.cryptoMania,
          ICON_EMOJI.moneyBag,
          TEXT.cryptoMania,
        )}
        pageID={PROJECT_ID.personal.cryptoMania}
        goBackLink={GoBackLinkEnum.Personal}
        sectionID={ID.section.react}
        ariaLabel={TEXT.cryptoMania}
        projectData={projectsPersonalReact[0]}
        sections={sections}
        showAlert={
          <Alert
            type={AlertType}
            title={PROJECT_CRYPTOMANIA.alertTitle}
            description={PROJECT_CRYPTOMANIA.alertDescription}
            linkComponent={
              <SocialLink
                href={EXTERNAL_URL.gitHub}
                text={TEXT.gitHubKrsiak}
                type={AlertType}
                dataTestId={DATA_TEST_IDS.alert.alertLinkGitHub}
              />
            }
          />
        }
        PageNavigation={
          <PageNavigation
            linkPrevious={PAGES_URL.personal.krsiak}
            iconPrevious={ICON_EMOJI.manTechnologist.lightSkinTone}
            namePrevious={TEXT.portfolioWebsite}
            dataTestIdPrevious={DATA_TEST_IDS.projects.personal.cryptoMania.previous}
          />
        }
      />
    </>
  )
}

export default ProjectPersonalCryptomania
