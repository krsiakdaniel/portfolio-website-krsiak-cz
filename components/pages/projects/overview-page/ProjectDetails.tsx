import { ProjectDetailsProps } from '@/components/pages/projects/overview-page/OverviewPage.types'
import Heading from '@/components/shared/Heading'
import Paragraph from '@/components/shared/Paragraph'

const ProjectDetails = ({
  icon = '',
  ariaLabel = '',
  title,
  company,
  role,
  description,
}: ProjectDetailsProps) => {
  return (
    <div className="sm:max-w-[600px]">
      <Heading as="h2" textColor="text-neutral-900">
        <span role="img" aria-label={ariaLabel} className="select-none">
          {icon}
        </span>
        <span className="ml-1">{title}</span>
      </Heading>
      <Heading as="h3" textColor="text-violet-600">
        {role}
      </Heading>
      <Paragraph marginTop="mt-0" size="text-lg" textColor="text-neutral-600" customCss="font-bold">
        {company}
      </Paragraph>
      <Paragraph marginTop="mt-8" textColor="text-neutral-600">
        {description}
      </Paragraph>
    </div>
  )
}

export default ProjectDetails
