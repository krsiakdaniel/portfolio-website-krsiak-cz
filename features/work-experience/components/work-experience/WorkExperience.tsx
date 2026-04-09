'use client'

import { useState } from 'react'

import CallToActionResume from '@/components/shared/call-to-action/cta-banners/CallToActionResume'
import LayoutToggle from '@/components/shared/projects/layout-toggle/LayoutToggle'
import ProjectSectionGrid from '@/components/shared/projects/project-section-grid/ProjectSectionGrid'
import ProjectWorkListView from '@/components/shared/projects/project-work-list-view/ProjectWorkListView'

import { ID } from '@/lib/utils/constants/ids/elementIds'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { otherExperienceFrontEnd } from '@/data/pages/projects/work/other-experience/otherExperienceFrontEnd'
import { otherExperienceLocalization } from '@/data/pages/projects/work/other-experience/otherExperienceLocalization'
import { otherExperienceQA } from '@/data/pages/projects/work/other-experience/otherExperienceQA'
import { otherExperienceWordPress } from '@/data/pages/projects/work/other-experience/otherExperienceWordPress'
import { projectsWorkFrontEnd } from '@/data/pages/projects/work/projects-overview/workFrontEnd'
import { projectsWorkLocalization } from '@/data/pages/projects/work/projects-overview/workLocalization'
import { projectsWorkNext } from '@/data/pages/projects/work/projects-overview/workNext'
import { projectsWorkQA } from '@/data/pages/projects/work/projects-overview/workQA'
import { projectsWorkReact } from '@/data/pages/projects/work/projects-overview/workReact'
import { projectsWorkVite } from '@/data/pages/projects/work/projects-overview/workVite'
import { projectsWorkWordPress } from '@/data/pages/projects/work/projects-overview/workWordpress'
import { LayoutViewEnum } from '@/lib/types/enums'
import { COMMON_VALUES } from '@/localization'

const allProjects = [
  ...projectsWorkReact,
  ...projectsWorkNext,
  ...projectsWorkVite,
  ...projectsWorkFrontEnd,
  ...projectsWorkWordPress,
  ...projectsWorkQA,
  ...projectsWorkLocalization,
]

const WorkExperience = () => {
  const [activeView, setActiveView] = useState<LayoutViewEnum>(LayoutViewEnum.Grid)

  return (
    <div className="relative">
      <div className="absolute top-1 right-0 z-10">
        <LayoutToggle
          activeView={activeView}
          onListClick={() => setActiveView(LayoutViewEnum.List)}
          onGridClick={() => setActiveView(LayoutViewEnum.Grid)}
        />
      </div>

      {activeView === LayoutViewEnum.List ? (
        <ProjectWorkListView projects={allProjects} />
      ) : (
        <div className="mt-8">
          {/* NEXT.JS / VITE / REACT */}
          <ProjectSectionGrid
            sectionId={ID.section.react}
            sectionText={COMMON_VALUES.react}
            projectData={[...projectsWorkReact, ...projectsWorkNext, ...projectsWorkVite]}
            showPlaceholder={true}
          />

          {/* FRONT END */}
          <ProjectSectionGrid
            sectionId={ID.section.frontEnd}
            sectionText={COMMON_VALUES.frontEnd}
            projectData={projectsWorkFrontEnd}
            otherExperience={otherExperienceFrontEnd}
            showPlaceholder={true}
          />

          {/* WORDPRESS */}
          <ProjectSectionGrid
            sectionId={ID.section.wordpress}
            sectionText={COMMON_VALUES.wordpress}
            projectData={projectsWorkWordPress}
            otherExperience={otherExperienceWordPress}
            showPlaceholder={true}
          />

          {/* QUALITY ASSURANCE */}
          <ProjectSectionGrid
            sectionId={ID.section.qualityAssurance}
            sectionText={COMMON_VALUES.qaAutomationTesting}
            projectData={projectsWorkQA}
            otherExperience={otherExperienceQA}
          />

          {/* LOCALIZATION */}
          <ProjectSectionGrid
            sectionId={ID.section.localization}
            sectionText={COMMON_VALUES.localization}
            projectData={projectsWorkLocalization}
            otherExperience={otherExperienceLocalization}
            showPlaceholder={true}
          />
        </div>
      )}

      {/* CTA */}
      <CallToActionResume dataTestId={DATA_TEST_IDS.callToAction.linkResumeWorkExperience} />
    </div>
  )
}

export default WorkExperience
