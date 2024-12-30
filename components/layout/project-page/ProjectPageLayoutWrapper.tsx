import { ReactNode } from 'react'

import ProjectPageLayout from '@/components/layout/project-page/ProjectPageLayout'

import { GoBackLinkEnum } from '@/lib/utils/interfaces/enums'
import { Project, Section } from '@/lib/utils/interfaces/interfaces'
import { BreadCrumbsType } from '@/lib/utils/interfaces/types'

type ProjectPageLayoutWrapperProps = {
  breadCrumbs: BreadCrumbsType
  pageID: string
  goBackLink: GoBackLinkEnum
  sectionID: string
  projectData: Project
  sections: Section[]
  PageNavigation: ReactNode
}

export const ProjectPageLayoutWrapper = ({
  breadCrumbs,
  pageID,
  goBackLink,
  sectionID,
  projectData,
  sections,
  PageNavigation,
}: ProjectPageLayoutWrapperProps): JSX.Element => {
  const { title, role, years, company, description, skillsOverview, customers, projectLinks, imageShowcase } =
    projectData

  return (
    <ProjectPageLayout
      breadCrumbs={breadCrumbs}
      pageID={pageID}
      title={title}
      role={role}
      years={years}
      company={company}
      goBackLink={goBackLink}
      sectionID={sectionID}
      description={description}
      skillsOverview={skillsOverview}
      customers={customers}
      projectLinks={projectLinks}
      sections={sections}
      imageShowcase={imageShowcase}
      PageNavigation={PageNavigation}
    />
  )
}
