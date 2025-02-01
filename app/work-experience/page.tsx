import { FC } from 'react'

import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import PageContainer from '@/components/layout/PageContainer'
import ProjectsOverviewLayout from '@/components/layout/projects/ProjectsOverviewLayout'
import OtherExperienceContent from '@/components/pages/projects/other-experience/OtherExperienceContent'
import ProjectSection from '@/components/pages/projects/overview-page/ProjectSection'
import WorkExperienceIntroduction from '@/components/pages/work-experience/WorkExperienceIntroduction'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import CallToActionResume from '@/components/shared/call-to-action/cta-banners/CallToActionResume'

import { metaDataWorkExperience } from '@/lib/data/metadata/pages/projects/metaDataWorkExperience'
import { otherExperienceFrontEnd } from '@/lib/data/pages/projects/work/other-experience/otherExperienceFrontEnd'
import { otherExperienceLocalization } from '@/lib/data/pages/projects/work/other-experience/otherExperienceLocalization'
import { otherExperienceQA } from '@/lib/data/pages/projects/work/other-experience/otherExperienceQA'
import { otherExperienceWordPress } from '@/lib/data/pages/projects/work/other-experience/otherExperienceWordPress'
import { projectsWorkFrontEnd } from '@/lib/data/pages/projects/work/projects-overview/front-end/workFrontEnd'
import { projectsWorkLocalization } from '@/lib/data/pages/projects/work/projects-overview/localization/workLocalization'
import { projectsWorkQA } from '@/lib/data/pages/projects/work/projects-overview/quality-assurance/workQA'
import { projectsWorkReact } from '@/lib/data/pages/projects/work/projects-overview/react/workReact'
import { projectsWorkWordPress } from '@/lib/data/pages/projects/work/projects-overview/wordpress/workWordpress'

import { ICON_EMOJI, TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

export const metadata = {
  ...metaDataWorkExperience,
}

const ProjectsWork: FC = (): JSX.Element => {
  return (
    <PageContainer id={ID.projects.work}>
      <BreadCrumbs
        level1Url={PAGES_URL.work.mainUrl}
        level1Icon={ICON_EMOJI.manTechnologist.lightSkinTone}
        level1Text={TEXT.workExperience}
      />

      <ProjectsOverviewLayout
        icon={ICON_EMOJI.manTechnologist.lightSkinTone}
        heading={TEXT.workExperience}
        description={<WorkExperienceIntroduction />}
      >
        {/* REACT */}
        <ProjectSection sectionId={ID.section.react} sectionText="React" projectData={projectsWorkReact} />

        {/* FRONT END */}
        <ProjectSection sectionId={ID.section.frontEnd} sectionText="Front End" projectData={projectsWorkFrontEnd} />
        <OtherExperienceContent experience={otherExperienceFrontEnd} />

        {/* CTA */}
        <CallToActionResume dataTestId={DATA_TEST_IDS.callToAction.linkResumeWorkExperience1} />

        {/* WORDPRESS */}
        <ProjectSection sectionId={ID.section.wordpress} sectionText="WordPress" projectData={projectsWorkWordPress} />
        <OtherExperienceContent experience={otherExperienceWordPress} />

        {/* QA */}
        <ProjectSection
          sectionId={ID.section.qa}
          sectionText={`QA Automation &\u00A0Testing`}
          projectData={projectsWorkQA}
        />
        <OtherExperienceContent experience={otherExperienceQA} />

        {/* LOCALIZATION */}
        <ProjectSection
          sectionId={ID.section.localization}
          sectionText="Localization"
          projectData={projectsWorkLocalization}
        />
        <OtherExperienceContent experience={otherExperienceLocalization} />

        {/* CTA */}
        <CallToActionResume dataTestId={DATA_TEST_IDS.callToAction.linkResumeWorkExperience2} />
      </ProjectsOverviewLayout>

      <PageNavigation
        linkPrevious={PAGES_URL.whoIAm}
        iconPrevious={ICON_EMOJI.wavingHand}
        namePrevious={TEXT.whoIAm}
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
