import { ReactNode } from 'react'

import Heading1 from '@/components/shared/Heading1'

type ProjectsLayoutProps = {
  heading: string
  description: string
  children: ReactNode
}

const ProjectsLayout = ({ heading, description, children }: ProjectsLayoutProps) => {
  return (
    <>
      <div className="flex flex-col">
        <Heading1>{heading}</Heading1>
        <p className="mt-4 text-lg text-neutral-600">{description}</p>
      </div>
      {/* This is ProjectItem */}
      <div>{children}</div>
    </>
  )
}

export default ProjectsLayout
