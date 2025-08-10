import ProjectSummaryCard from '@/components/pages/projects/overview-page/ProjectSummaryCard'
import HeadingSection from '@/components/shared/HeadingSection'

import { ProjectSectionProps } from '@/lib/utils/typeDefinitions/props/pages/projects/overview-page'

const ProjectSection = ({
  projectData = [],
  sectionId = '',
  sectionText = '',
}: ProjectSectionProps) => {
  return (
    <>
      <HeadingSection text={sectionText} id={sectionId} />

      {projectData.map((item, index) => (
        <ProjectSummaryCard
          key={item.id}
          isFeatured={item.isFeatured}
          image={item.image}
          icon={item.icon}
          ariaLabel={item.ariaLabel}
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
