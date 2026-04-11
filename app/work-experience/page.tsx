import { type Metadata } from 'next'

import PageContainer from '@/components/layout/page-container/PageContainer'
import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import ProjectsOverviewLayout from '@/components/layout/projects/ProjectsOverviewLayout'
import BreadCrumbs from '@/components/shared/breadcrumbs/Breadcrumbs'

import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import WorkExperienceIntroduction from '@/features/work-experience/components/work-experience-introduction/WorkExperienceIntroduction'
import WorkExperience from '@/features/work-experience/components/work-experience/WorkExperience'
import { metaDataWorkExperience } from '@/features/work-experience/metadata'
import { ARIA_LABELS, ICON_EMOJI, TEXT } from '@/localization'

export const metadata: Metadata = {
  ...metaDataWorkExperience,
}

const ProjectsWork = () => {
  return (
    <PageContainer id={ID.projects.work}>
      <BreadCrumbs
        level1Url={PAGES_URL.workExperience}
        level1Icon={ICON_EMOJI.manTechnologist.lightSkinTone}
        level1AriaLabel={ARIA_LABELS.emoji.manTechnologist.lightSkinTone}
        level1Text={TEXT.workExperience}
      />

      <ProjectsOverviewLayout
        icon={ICON_EMOJI.manTechnologist.lightSkinTone}
        ariaLabel={ARIA_LABELS.emoji.manTechnologist.lightSkinTone}
        heading={TEXT.workExperience}
        description={<WorkExperienceIntroduction />}
      >
        <WorkExperience />
      </ProjectsOverviewLayout>

      <PageNavigation
        linkPrevious={PAGES_URL.home}
        iconPrevious={ICON_EMOJI.house}
        namePrevious={TEXT.home}
        dataTestIdPrevious={DATA_TEST_IDS.pageNavigation.workExperience.previous}
        linkNext={PAGES_URL.resume}
        iconNext={ICON_EMOJI.memo}
        nameNext={TEXT.resume}
        dataTestIdNext={DATA_TEST_IDS.pageNavigation.workExperience.next}
      />
    </PageContainer>
  )
}

export default ProjectsWork
