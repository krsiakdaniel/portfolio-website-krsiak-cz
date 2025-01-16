import { FC } from 'react'

import Heading1 from '@/components/shared/Heading1'

import { ProjectsOverviewLayoutProps } from '@/lib/utils/typeDefinitions/componentProps'

const ProjectsOverviewLayout: FC<ProjectsOverviewLayoutProps> = ({ heading, description, children }): JSX.Element => {
  return (
    <>
      <div className="mt-10 flex flex-col">
        <Heading1>{heading}</Heading1>
        <div>{description}</div>
      </div>

      {/* Content for 'ProjectSummaryCard.tsx' */}
      <div>{children}</div>
    </>
  )
}

export default ProjectsOverviewLayout
