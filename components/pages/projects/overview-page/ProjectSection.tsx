import { FC } from 'react'

import ExperienceSection from '@/components/pages/projects/other-experience/ExperienceSection'
import ProjectSummaryCard from '@/components/pages/projects/overview-page/ProjectSummaryCard'

import { ProjectSectionProps } from '@/lib/utils/typeDefinitions/props/pages/projects/overview-page'

const ProjectSection: FC<ProjectSectionProps> = ({
  projectData = [],
  sectionId = '',
  sectionText = '',
}): JSX.Element => {
  return (
    <>
      <ExperienceSection id={sectionId} text={sectionText} />

      {projectData.map((item, index) => (
        <ProjectSummaryCard
          key={item.id}
          isFeatured={item.isFeatured}
          image={item.image}
          title={item.title}
          company={item.company}
          role={item.role}
          description={item.description}
          skillsIcons={item.skillsIcons}
          customers={item.customers}
          personalProjectNote={item.personalProjectNote}
          linkText={item.linkText}
          linkProjectPage={item.linkProjectPage}
          dataTestId={item.id}
          className={index === 0 ? 'mt-8' : 'mt-20'}
        />
      ))}
    </>
  )
}

export default ProjectSection
