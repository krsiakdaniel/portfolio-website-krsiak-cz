import ProjectResponsibilitySection from '@/components/layout/projects/project-page/ProjectResponsibilitySection'

import { ProjectResponsibilityProps } from './ProjectResponsibility.types'

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
