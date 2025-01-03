import { FC, ReactNode } from 'react'

import Heading1 from '@/components/shared/Heading1'

type ProjectsLayoutProps = {
  heading: string
  description: ReactNode
  children: ReactNode
}

const ProjectsLayout: FC<ProjectsLayoutProps> = ({ heading, description, children }): JSX.Element => {
  return (
    <>
      <div className="mt-10 flex flex-col">
        <Heading1>{heading}</Heading1>
        <div>{description}</div>
      </div>

      {/* Content for 'ProjectItem' */}
      <div>{children}</div>
    </>
  )
}

export default ProjectsLayout
