import { ProjectResponsibilityProps } from '@/components/layout/projects/project-page/ProjectPage.types'
import ProjectResponsibilitySection from '@/components/layout/projects/project-page/ProjectResponsibilitySection'

const ProjectResponsibility = ({ sections = [] }: ProjectResponsibilityProps) => {
  return (
    <>
      {sections.map((section) => (
        <ProjectResponsibilitySection
          key={section.id}
          title={section.title}
          titleHighlight={section.titleHighlight}
          items={section.items}
        />
      ))}
    </>
  )
}

export default ProjectResponsibility
