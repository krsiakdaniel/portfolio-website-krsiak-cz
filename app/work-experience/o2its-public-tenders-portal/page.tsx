import { Metadata } from 'next'

import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import ProjectPageLayoutWrapper from '@/components/layout/projects/ProjectPageLayoutWrapper'
import Alert from '@/components/shared/Alert'
import SocialLink from '@/components/shared/SocialLink'

import { metaDataO2itsPublicTendersPortal } from '@/lib/data/metadata/pages/projects/work/metaDataO2itsPublicTendersPortal'
import { sections } from '@/lib/data/pages/projects/work/o2its-public-tenders-portal'
import { projectsWorkVite } from '@/lib/data/pages/projects/work/projects-overview/vite/workVite'

import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { EXTERNAL_URL } from '@/lib/utils/constants/urls/externalUrls'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { getBreadcrumbsWork } from '@/lib/utils/helpers/breadcrumbs/getBreadcrumbsWork'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { AlertTypeEnum, GoBackLinkEnum } from '@/lib/types/enums'
import { ICON_EMOJI, PROJECT_O2ITS, TEXT } from '@/localization'

export const metadata: Metadata = {
  ...metaDataO2itsPublicTendersPortal,
}

const ProjectWorkO2itsPublicTendersPortal = () => {
  const AlertType = AlertTypeEnum.Info

  return (
    <ProjectPageLayoutWrapper
      showAlert={
        <Alert
          type={AlertType}
          title={PROJECT_O2ITS.alertTitle}
          description={PROJECT_O2ITS.alertDescription}
          linkComponent={
            <SocialLink
              href={EXTERNAL_URL.linkedIn}
              text={PROJECT_O2ITS.alertLinkText}
              type={AlertType}
              dataTestId={DATA_TEST_IDS.alert.alertLinkLinkedIn}
            />
          }
        />
      }
      breadCrumbs={getBreadcrumbsWork(
        PAGES_URL.workO2itsPublicTendersPortal,
        ICON_EMOJI.robot,
        TEXT.O2itsPublicTendersPortal,
      )}
      pageID={PROJECT_ID.work.o2itsPublicTendersPortal}
      goBackLink={GoBackLinkEnum.Work}
      sectionID={ID.section.vite}
      ariaLabel={TEXT.workExperience}
      projectData={projectsWorkVite[0]}
      sections={sections}
      PageNavigation={
        <PageNavigation
          linkPrevious={PAGES_URL.workO2itsAiPoweredChatDashboard}
          iconPrevious={ICON_EMOJI.robot}
          namePrevious={TEXT.O2itsAiPoweredChatDashboard}
          dataTestIdPrevious={DATA_TEST_IDS.projects.work.O2itsPublicTendersPortal.previous}
          linkNext={PAGES_URL.workSmartsuppDashboard}
          iconNext={ICON_EMOJI.speechBalloon}
          nameNext={TEXT.smartsuppChatDashboard}
          dataTestIdNext={DATA_TEST_IDS.projects.work.O2itsPublicTendersPortal.next}
        />
      }
    />
  )
}

export default ProjectWorkO2itsPublicTendersPortal
