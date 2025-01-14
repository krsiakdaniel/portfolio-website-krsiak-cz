import { FC, ReactNode } from 'react'

import Heading1 from '@/components/shared/Heading1'

type ProjectsOverviewLayoutProps = {
  heading: string
  description: ReactNode
  children: ReactNode
}

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
