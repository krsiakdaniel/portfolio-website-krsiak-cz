import { Section } from '@/utils/interfaces/interfaces'
import PageSection from './PageSection'

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
