import { Metadata } from 'next'

import PageNavigation from '@/components/layout/pages/navigation-previous-next/PageNavigation'
import ProjectPageLayout from '@/components/layout/projects/project-page/ProjectPageLayout'

import { metaDataCryptomania } from '@/lib/data/metadata/pages/projects/personal/metaDataCryptomania'
import { sections } from '@/lib/data/pages/projects/personal/cryptoMania'
import { projectsPersonalReact } from '@/lib/data/pages/projects/personal/projects-overview/personalReact'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { getBreadcrumbsPersonal } from '@/lib/utils/helpers/breadcrumbs/getBreadcrumbsPersonal'
import { GoBackLinkEnum } from '@/lib/utils/interfaces/enums'

export const metadata: Metadata = {
  ...metaDataCryptomania,
}

const ProjectPersonalCryptomania = (): JSX.Element => {
  const { title, role, description, skillsOverview, projectLinks, linkGitHub, imageShowcase } = projectsPersonalReact[0]

  return (
    <>
      <ProjectPageLayout
        breadCrumbs={getBreadcrumbsPersonal(PAGES_URL.personal.cryptoMania, TEXT.cryptoMania)}
        pageID={PAGES_URL.personal.cryptoMania}
        title={title}
        role={role}
        goBackLink={GoBackLinkEnum.Personal}
        sectionID={ID.section.react}
        description={description}
        skillsOverview={skillsOverview}
        projectLinks={projectLinks}
        linkGitHub={linkGitHub}
        sections={sections}
        imageShowcase={imageShowcase}
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
