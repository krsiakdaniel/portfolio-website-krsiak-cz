import { FC } from 'react'

import Heading2 from '@/components/shared/Heading2'
import Heading3 from '@/components/shared/Heading3'
import Paragraph from '@/components/shared/Paragraph'

import { ProjectDetailsProps } from '@/lib/utils/typeDefinitions/props/pages/projects/overview-page'

const ProjectDetails: FC<ProjectDetailsProps> = ({
  icon = '',
  title,
  company,
  role,
  description,
}): JSX.Element => {
  return (
    <div className="sm:max-w-[600px]">
      <Heading2 textColor="text-neutral-900">
        <span className="select-none">{icon}</span> <span className="ml-1">{title}</span>
      </Heading2>
      <Heading3 textColor="text-violet-600">{role}</Heading3>
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
