import PageSection from '@/components/layout/project-page/PageSection'

import { Section } from '@/lib/utils/interfaces/interfaces'

type ProjectResponsibilityProps = {
  sections: Section[]
}

const ProjectResponsibility = ({ sections }: ProjectResponsibilityProps) => {
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
