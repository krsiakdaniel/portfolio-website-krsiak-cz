import { FC } from 'react'

import PageSection from '@/components/layout/projects/project-page/PageSection'

import { Section } from '@/lib/utils/interfaces/interfaces'

type ProjectResponsibilityProps = {
  sections: Section[]
}

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
