import Heading from '@/components/shared/Heading'

import { ProjectsOverviewLayoutProps } from '@/lib/utils/typeDefinitions/props/layout/projects/project-page-layout'

const ProjectsOverviewLayout = ({
  icon,
  ariaLabel,
  heading,
  description,
  children,
}: ProjectsOverviewLayoutProps) => {
  return (
    <>
      <div className="mt-10 flex flex-col">
        <Heading as="h1">
          <span role="img" aria-label={ariaLabel} className="mr-4 select-none">
            {icon}
          </span>
          <span>{heading}</span>
        </Heading>
        <div>{description}</div>
      </div>

      {/* Content for 'ProjectSummaryCard.tsx' */}
      <div>{children}</div>
    </>
  )
}

export default ProjectsOverviewLayout
