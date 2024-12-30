import { ReactNode } from 'react'

import Heading1 from '@/components/shared/Heading1'

type ProjectsLayoutProps = {
  heading: string
  description: ReactNode
  children: ReactNode
}

const ProjectsLayout = ({ heading, description, children }: ProjectsLayoutProps): JSX.Element => {
  return (
    <>
      <div className="mt-10 flex flex-col">
        <Heading1>{heading}</Heading1>
        <div>{description}</div>
      </div>
      {/* This is ProjectItem */}
      <div>{children}</div>
    </>
  )
}

export default ProjectsLayout
