import { FC } from 'react'

import PageSection from '@/components/layout/projects/project-page/PageSection'

import { ProjectResponsibilityProps } from '@/lib/utils/typeDefinitions/componentProps'

const ProjectResponsibility: FC<ProjectResponsibilityProps> = ({ sections }): JSX.Element => {
  return (
    <div>
      {sections.map((section) => (
        <PageSection
          key={section.id}
          title={section.title}
          titleHighlight={section.titleHighlight}
          items={section.items}
        />
      ))}
    </div>
  )
}

export default ProjectResponsibility
