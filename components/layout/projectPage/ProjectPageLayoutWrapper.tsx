import ProjectPageLayout from '@/components/layout/projectPage/ProjectPageLayout'
import { Project, Section } from '@/utils/interfaces'
import { BreadCrumbsType, GoBackLinkType } from '@/utils/types'

type ProjectPageLayoutWrapperProps = {
  breadCrumbs: BreadCrumbsType
  pageID: string
  goBackLink: GoBackLinkType
  sectionID: string
  projectData: Project
  sections: Section[]
  PageNavigation: React.ReactNode
}

export const ProjectPageLayoutWrapper = ({
  breadCrumbs,
  pageID,
  goBackLink,
  sectionID,
  projectData,
  sections,
  PageNavigation,
}: ProjectPageLayoutWrapperProps) => {
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
