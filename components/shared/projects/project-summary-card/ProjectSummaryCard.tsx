import LinkButton from '@/components/shared/link-button/LinkButton'
import ProjectDetails from '@/components/shared/projects/project-details/ProjectDetails'
import ProjectImage from '@/components/shared/projects/project-image/ProjectImage'
import ProjectSkillsIcons from '@/components/shared/projects/project-skills-icons/ProjectSkillsIcons'

import { ProjectSummaryCardProps } from './ProjectSummaryCard.types'

const ProjectSummaryCard = ({
  isFeatured,
  image,
  icon,
  ariaLabel,
  title,
  company,
  role,
  description,
  skillsIcons,
  customers,
  personalProjectNote,
  linkText,
  linkProjectPage,
  dataTestId,
  className,
}: ProjectSummaryCardProps) => {
  return (
    <section>
      <div className={`grid grid-cols-1 gap-8 lg:grid-cols-2 ${className}`}>
        <ProjectImage isFeatured={isFeatured} image={image} title={title} />
        <div>
          <ProjectDetails
            title={title}
            icon={icon}
            ariaLabel={ariaLabel}
            company={company}
            role={role}
            description={description}
            customers={customers}
            personalProjectNote={personalProjectNote}
          />
          <ProjectSkillsIcons skillsIcons={skillsIcons} />
          <div className="mt-8 flex max-w-[248px]">
            <LinkButton
              href={linkProjectPage}
              linkText={linkText}
              isLinkExternal={false}
              dataTestId={dataTestId}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectSummaryCard
