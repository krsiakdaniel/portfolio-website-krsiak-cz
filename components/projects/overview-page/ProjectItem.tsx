import { Icon } from '@/utils/interfaces/interfaces'

import ProjectDetails from '@/components/projects/overview-page/ProjectDetails'
import ProjectImage from '@/components/projects/overview-page/ProjectImage'
import ProjectLink from '@/components/projects/overview-page/ProjectLink'
import ProjectSkills from '@/components/projects/overview-page/ProjectSkills'

type ProjectItemProps = {
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

const ProjectItem = ({
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
}: ProjectItemProps) => {
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

export default ProjectItem
