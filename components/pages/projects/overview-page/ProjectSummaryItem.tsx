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
  years?: string
  description: string
  mySkillsIcons: Icon[]
  customers: string | undefined
  linkText: string
  linkProjectPage: string
  dataTestId: string
}

const ProjectSummaryItem: FC<ProjectSummaryItemProps> = ({
  isFeatured,
  image,
  title,
  company,
  role,
  years,
  description,
  mySkillsIcons,
  customers,
  linkText,
  linkProjectPage,
  dataTestId,
}): JSX.Element => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-10">
      <div className="mx-auto mt-8 items-start gap-8 md:grid md:grid-cols-2">
        <ProjectImage isFeatured={isFeatured} image={image} title={title} />
        <div>
          <ProjectDetails
            title={title}
            company={company}
            role={role}
            years={years}
            description={description}
            customers={customers}
          />
          <ProjectSkills mySkillsIcons={mySkillsIcons} />
          <ProjectLink linkText={linkText} linkProjectPage={linkProjectPage} dataTestId={dataTestId} />
        </div>
      </div>
    </div>
  )
}

export default ProjectSummaryItem
