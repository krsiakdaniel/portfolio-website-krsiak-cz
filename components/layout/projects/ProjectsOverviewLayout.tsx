import { FC } from 'react'

import Heading1 from '@/components/shared/Heading1'

import { ProjectsOverviewLayoutProps } from '@/lib/utils/typeDefinitions/props/layout/projects/project-page-layout'

const ProjectsOverviewLayout: FC<ProjectsOverviewLayoutProps> = ({
  icon,
  heading,
  description,
  children,
}): JSX.Element => {
  return (
    <>
      <div className="mt-10 flex flex-col">
        <Heading1>
          <span role="img" className="mr-4 select-none">
            {icon}
          </span>
          <span>{heading}</span>
        </Heading1>
        <div>{description}</div>
      </div>

      {/* Content for 'ProjectSummaryCard.tsx' */}
      <div>{children}</div>
    </>
  )
}

export default ProjectsOverviewLayout
