import ExperienceSection from '@/components/projects/experience/ExperienceSection'
import ProjectItem from '@/components/projects/overview-page/ProjectItem'

import { Project } from '@/utils/interfaces/interfaces'

type ProjectSectionProps = {
  projectData: Project[]
  sectionId: string
  sectionText: string
}

export const ProjectSection = ({ projectData, sectionId, sectionText }: ProjectSectionProps) => {
  return (
    <>
      <ExperienceSection id={sectionId} text={sectionText} />
      {projectData.map((item) => (
        <ProjectItem
          key={item.id}
          isFeatured={item.isFeatured}
          image={item.image}
          title={item.title}
          company={item.company}
          role={item.role}
          years={item.years}
          description={item.description}
          mySkillsIcons={item.mySkillsIcons}
          customers={item.customers}
          linkText={item.linkText}
          linkProjectPage={item.linkProjectPage}
          dataTestId={item.id}
        />
      ))}
    </>
  )
}
