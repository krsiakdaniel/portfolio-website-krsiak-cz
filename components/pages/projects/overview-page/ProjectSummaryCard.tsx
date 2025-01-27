import { FC } from 'react'

import ProjectDetails from '@/components/pages/projects/overview-page/ProjectDetails'
import ProjectImage from '@/components/pages/projects/overview-page/ProjectImage'
import ProjectSkillsIcons from '@/components/pages/projects/overview-page/ProjectSkillsIcons'
import LinkButton from '@/components/shared/LinkButton'

import { ProjectSummaryCardProps } from '@/lib/utils/typeDefinitions/props/pages/projects/overview-page'

const ProjectSummaryCard: FC<ProjectSummaryCardProps> = ({
  isFeatured,
  image,
  icon,
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
}): JSX.Element => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row lg:space-x-10">
        <div className={`grid grid-cols-1 items-start gap-8 lg:mx-auto lg:grid lg:grid-cols-2 ${className}`}>
          <ProjectImage isFeatured={isFeatured} image={image} title={title} />

          <div>
            <ProjectDetails
              title={title}
              icon={icon}
              company={company}
              role={role}
              description={description}
              customers={customers}
              personalProjectNote={personalProjectNote}
            />
            <ProjectSkillsIcons skillsIcons={skillsIcons} />
            <div className="mt-8 flex max-w-[248px]">
              <LinkButton href={linkProjectPage} linkText={linkText} isLinkExternal={false} dataTestId={dataTestId} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectSummaryCard
