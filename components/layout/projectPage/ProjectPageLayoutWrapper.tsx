import ProjectPageLayout from '@/components/layout/projectPage/ProjectPageLayout'
import { GoBackLinkType, Project, SectionItem } from '@/utils/types'

type Props = {
  pageID: string
  goBackLink: GoBackLinkType
  sectionID: string
  projectData: Project
  sections: SectionItem[]
}

export const ProjectPageLayoutWrapper = ({ pageID, goBackLink, sectionID, projectData, sections }: Props) => {
  const { title, role, years, description, mySkills, customers, projectLinks, imageShowcase } = projectData

  return (
    <ProjectPageLayout
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
    />
  )
}
