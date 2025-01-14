import { FC } from 'react'

import Heading2 from '@/components/shared/Heading2'
import Heading3 from '@/components/shared/Heading3'
import Paragraph from '@/components/shared/Paragraph'

type ProjectDetailsProps = {
  title: string
  company: string
  role: string
  description: string
  customers?: string
  personalProjectNote?: string
}

const ProjectDetails: FC<ProjectDetailsProps> = ({
  title,
  company,
  role,
  description,
  customers,
  personalProjectNote,
}): JSX.Element => {
  return (
    <div className="sm:max-w-[600px]">
      <Heading2 textColor="text-neutral-900">{title}</Heading2>
      <Heading3 textColor="text-violet-600">{role}</Heading3>
      <Paragraph marginTop="mt-0" size="text-xl" textColor="text-neutral-500" customCss="font-semibold">
        {company}
      </Paragraph>
      <Paragraph marginTop="mt-8" textColor="text-neutral-500">
        {description}
      </Paragraph>
    </div>
  )
}

export default ProjectDetails
