import { Metadata } from 'next'

import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import ProjectPageLayoutWrapper from '@/components/layout/projects/ProjectPageLayoutWrapper'
import Alert from '@/components/shared/Alert'
import SocialLink from '@/components/shared/SocialLink'

import { metaDataO2itsAiPoweredChatDashboard } from '@/lib/data/metadata/pages/projects/work/metaDataO2itsAiPoweredChatDashboard'
import { sections } from '@/lib/data/pages/projects/work/o2its-ai-powered-chat-dashboard'
import { projectsWorkNext } from '@/lib/data/pages/projects/work/projects-overview/next/workNext'

import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { EXTERNAL_URL } from '@/lib/utils/constants/urls/externalUrls'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { getBreadcrumbsWork } from '@/lib/utils/helpers/breadcrumbs/getBreadcrumbsWork'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { AlertTypeEnum, GoBackLinkEnum } from '@/lib/types/enums'
import { ICON_EMOJI, PROJECT_O2ITS, TEXT } from '@/localization'

export const metadata: Metadata = {
  ...metaDataO2itsAiPoweredChatDashboard,
}

const ProjectWorkO2itsAiPoweredChatDashboard = () => {
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
        PAGES_URL.workO2itsAiPoweredChatDashboard,
        ICON_EMOJI.robot,
        TEXT.O2itsAiPoweredChatDashboard,
      )}
      pageID={PROJECT_ID.work.o2itsAiPoweredChatDashboard}
      goBackLink={GoBackLinkEnum.Work}
      sectionID={ID.section.next}
      ariaLabel={TEXT.workExperience}
      projectData={projectsWorkNext[0]}
      sections={sections}
      PageNavigation={
        <PageNavigation
          linkNext={PAGES_URL.workO2itsPublicTendersPortal}
          iconNext={ICON_EMOJI.robot}
          nameNext={TEXT.O2itsPublicTendersPortal}
          dataTestIdNext={DATA_TEST_IDS.projects.work.O2itsAiPoweredChatDashboard.next}
        />
      }
    />
  )
}

export default ProjectWorkO2itsAiPoweredChatDashboard
