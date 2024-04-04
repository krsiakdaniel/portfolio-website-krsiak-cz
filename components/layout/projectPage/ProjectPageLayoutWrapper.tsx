import ProjectPageLayout from '@/components/layout/projectPage/ProjectPageLayout'
import { BreadCrumbsType, GoBackLinkType, Project, SectionItem } from '@/utils/types'

type Props = {
  breadCrumbs: BreadCrumbsType
  pageID: string
  goBackLink: GoBackLinkType
  sectionID: string
  projectData: Project
  sections: SectionItem[]
  nextPageNavigation: React.ReactNode
}

export const ProjectPageLayoutWrapper = ({
  breadCrumbs,
  pageID,
  goBackLink,
  sectionID,
  projectData,
  sections,
  nextPageNavigation,
}: Props) => {
  const { title, role, years, description, mySkills, customers, projectLinks, imageShowcase } = projectData

  return (
    <ProjectPageLayout
      breadCrumbs={breadCrumbs}
      pageID={pageID}
      title={title}
      role={role}
      years={years}
      goBackLink={goBackLink}
      sectionID={sectionID}
      description={description}
      mySkills={mySkills}
      customers={customers}
      projectLinks={projectLinks}
      sections={sections}
      imageShowcase={imageShowcase}
      nextPageNavigation={nextPageNavigation}
    />
  )
}
