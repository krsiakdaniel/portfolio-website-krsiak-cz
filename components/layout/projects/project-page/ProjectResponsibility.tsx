import { FC } from 'react'

import ProjectResponsibilitySection from '@/components/layout/projects/project-page/ProjectResponsibilitySection'

import { ProjectResponsibilityProps } from '@/lib/utils/typeDefinitions/props/layout/projects/project-page'

const ProjectResponsibility: FC<ProjectResponsibilityProps> = ({ sections = [] }): JSX.Element => {
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
