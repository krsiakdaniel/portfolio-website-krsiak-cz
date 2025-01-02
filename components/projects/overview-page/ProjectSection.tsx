import { FC } from 'react'

import ExperienceSection from '@/components/projects/experience/ExperienceSection'
import ProjectItem from '@/components/projects/overview-page/ProjectItem'

import { Project } from '@/lib/utils/interfaces/interfaces'

type ProjectSectionProps = {
  projectData: Project[]
  sectionId: string
  sectionText: string
}

// FIXME: export default + update imports
export const ProjectSection: FC<ProjectSectionProps> = ({ projectData, sectionId, sectionText }): JSX.Element => {
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
