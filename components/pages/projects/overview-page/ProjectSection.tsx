import { FC } from 'react'

import ExperienceSection from '@/components/pages/projects/other-experience/ExperienceSection'
import ProjectSummaryItem from '@/components/pages/projects/overview-page/ProjectSummaryItem'

import { Project } from '@/lib/utils/interfaces/interfaces'

type ProjectSectionProps = {
  projectData: Project[]
  sectionId: string
  sectionText: string
}

const ProjectSection: FC<ProjectSectionProps> = ({ projectData, sectionId, sectionText }): JSX.Element => {
  return (
    <>
      <ExperienceSection id={sectionId} text={sectionText} />
      {projectData.map((item) => (
        <ProjectSummaryItem
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

export default ProjectSection
