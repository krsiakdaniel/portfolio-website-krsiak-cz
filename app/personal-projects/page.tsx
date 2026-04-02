import { Metadata } from 'next'

import PageContainer from '@/components/layout/page-container/PageContainer'
import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import ProjectsOverviewLayout from '@/components/layout/projects/ProjectsOverviewLayout'
import PersonalProjectsIntroduction from '@/components/pages/personal-projects/PersonalProjectsIntroduction'
import ProjectSection from '@/components/pages/projects/overview-page/ProjectSection'
import BreadCrumbs from '@/components/shared/breadcrumbs/Breadcrumbs'
import CallToActionGitHub from '@/components/shared/call-to-action/cta-banners/CallToActionGitHub'

import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { metaDataPersonalProjects } from '@/data/metadata/pages/projects/metaDataPersonalProjects'
import { projectsPersonalNext } from '@/data/pages/projects/personal/projects-overview/personalNext'
import { ARIA_LABELS, ICON_EMOJI, TEXT } from '@/localization'

export const metadata: Metadata = {
  ...metaDataPersonalProjects,
}

const ProjectsPersonal = () => {
  return (
    <PageContainer id={ID.projects.personal}>
      <BreadCrumbs
        level1Url={PAGES_URL.personalProjects}
        level1Icon={ICON_EMOJI.rocket}
        level1AriaLabel={ARIA_LABELS.emoji.rocket}
        level1Text={TEXT.personalProjects}
      />

      <ProjectsOverviewLayout
        icon={ICON_EMOJI.rocket}
        ariaLabel={ARIA_LABELS.emoji.rocket}
        heading={TEXT.personalProjects}
        description={<PersonalProjectsIntroduction />}
      >
        {/* NEXT */}
        <ProjectSection
          sectionId={ID.section.next}
          sectionText={TEXT.next}
          projectData={projectsPersonalNext}
        />

        <CallToActionGitHub />
      </ProjectsOverviewLayout>

      <div className="mt-20">
        <PageNavigation
          linkPrevious={PAGES_URL.resume}
          iconPrevious={ICON_EMOJI.memo}
          namePrevious={TEXT.resume}
          dataTestIdPrevious={DATA_TEST_IDS.pageNavigation.personalProjects.previous}
          linkNext={PAGES_URL.whoIAm}
          iconNext={ICON_EMOJI.wavingHand}
          nameNext={TEXT.whoIAm}
          dataTestIdNext={DATA_TEST_IDS.pageNavigation.personalProjects.next}
        />
      </div>
    </PageContainer>
  )
}

export default ProjectsPersonal
