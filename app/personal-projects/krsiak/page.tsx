import { FC } from 'react'

import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import ProjectPageLayout from '@/components/layout/projects/ProjectPageLayout'

import { metaDataKrsiak } from '@/lib/data/metadata/pages/projects/personal/metaDataKrsiak'
import { sections } from '@/lib/data/pages/projects/personal/krsiak'
import { projectsPersonalNext } from '@/lib/data/pages/projects/personal/projects-overview/next/personalNext'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { getBreadcrumbsPersonal } from '@/lib/utils/helpers/breadcrumbs/getBreadcrumbsPersonal'
import { GoBackLinkEnum } from '@/lib/utils/interfaces/enums'

export const metadata = {
  ...metaDataKrsiak,
}

const ProjectPersonalKrsiak: FC = (): JSX.Element => {
  const { title, role, description, skillsOverview, projectLinks, linkGitHub, imageShowcase } = projectsPersonalNext[0]

  return (
    <>
      <ProjectPageLayout
        breadCrumbs={getBreadcrumbsPersonal(PAGES_URL.personal.krsiak, TEXT.portfolioWebsite)}
        pageID={PAGES_URL.personal.krsiak}
        title={title}
        role={role}
        goBackLink={GoBackLinkEnum.Personal}
        sectionID={ID.section.next}
        description={description}
        skillsOverview={skillsOverview}
        projectLinks={projectLinks}
        linkGitHub={linkGitHub}
        sections={sections}
        imageShowcase={imageShowcase}
        PageNavigation={
          <PageNavigation
            linkPrevious={PAGES_URL.personal.mainUrl}
            namePrevious={TEXT.personalProjects}
            dataTestIdPrevious={DATA_TEST_IDS.projects.personal.krsiak.previous}
            linkNext={PAGES_URL.personal.cryptoMania}
            nameNext={TEXT.cryptoMania}
            dataTestIdNext={DATA_TEST_IDS.projects.personal.krsiak.next}
          />
        }
      />
    </>
  )
}

export default ProjectPersonalKrsiak
