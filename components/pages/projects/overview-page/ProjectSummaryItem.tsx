import { FC } from 'react'

import ProjectDetails from '@/components/pages/projects/overview-page/ProjectDetails'
import ProjectImage from '@/components/pages/projects/overview-page/ProjectImage'
import ProjectLink from '@/components/pages/projects/overview-page/ProjectLink'
import ProjectSkills from '@/components/pages/projects/overview-page/ProjectSkills'

import { Icon } from '@/lib/utils/interfaces/interfaces'

type ProjectSummaryItemProps = {
  isFeatured?: boolean | undefined
  image: string
  title: string
  company: string
  role: string
  description: string
  mySkillsIcons: Icon[]
  customers: string | undefined
  personalProjectNote: string | undefined
  linkText: string
  linkProjectPage: string
  dataTestId: string
  className: string
}

const ProjectSummaryItem: FC<ProjectSummaryItemProps> = ({
  isFeatured,
  image,
  title,
  company,
  role,
  description,
  mySkillsIcons,
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
              company={company}
              role={role}
              description={description}
              customers={customers}
              personalProjectNote={personalProjectNote}
            />
            <ProjectSkills mySkillsIcons={mySkillsIcons} />

            <ProjectLink linkText={linkText} linkProjectPage={linkProjectPage} dataTestId={dataTestId} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectSummaryItem
