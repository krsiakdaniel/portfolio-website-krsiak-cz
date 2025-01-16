import { FC } from 'react'

import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import ProjectPageLayoutWrapper from '@/components/layout/projects/ProjectPageLayoutWrapper'
import Alert from '@/components/shared/Alert'
import SocialLink from '@/components/shared/SocialLink'

import { metaDataCryptomania } from '@/lib/data/metadata/pages/projects/personal/metaDataCryptomania'
import { sections } from '@/lib/data/pages/projects/personal/cryptoMania'
import { projectsPersonalReact } from '@/lib/data/pages/projects/personal/projects-overview/react/personalReact'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { EXTERNAL_URL } from '@/lib/utils/constants/urls/externalUrls'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { getBreadcrumbsPersonal } from '@/lib/utils/helpers/breadcrumbs/getBreadcrumbsPersonal'
import { GoBackLinkEnum, LinkColors } from '@/lib/utils/interfaces/enums'

export const metadata = {
  ...metaDataCryptomania,
}

const ProjectPersonalCryptomania: FC = (): JSX.Element => {
  return (
    <>
      <ProjectPageLayoutWrapper
        breadCrumbs={getBreadcrumbsPersonal(PAGES_URL.personal.cryptoMania, TEXT.cryptoMania)}
        pageID={PROJECT_ID.personal.cryptoMania}
        goBackLink={GoBackLinkEnum.Personal}
        sectionID={ID.section.react}
        projectData={projectsPersonalReact[0]}
        sections={sections}
        showAlert={
          <Alert
            title="'CryptoMania' web is simple project"
            description="For my latest production-level code, visit GitHub repo: 'Portfolio Website'."
            linkComponent={
              <SocialLink
                href={EXTERNAL_URL.github}
                text="GitHub: portfolio-website-krsiak-cz"
                linkColor={LinkColors.Yellow}
                dataTestId={DATA_TEST_IDS.alert.alertLinkGitHub}
              />
            }
          />
        }
        PageNavigation={
          <PageNavigation
            linkPrevious={PAGES_URL.personal.krsiak}
            namePrevious={TEXT.portfolioWebsite}
            dataTestIdPrevious={DATA_TEST_IDS.projects.personal.cryptoMania.previous}
          />
        }
      />
    </>
  )
}

export default ProjectPersonalCryptomania
