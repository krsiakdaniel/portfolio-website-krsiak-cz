import { FC } from 'react'

import Heading2 from '@/components/shared/Heading2'
import Heading3 from '@/components/shared/Heading3'

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
    <div>
      <Heading2 textColor="text-neutral-900">{title}</Heading2>
      <Heading3>
        <span className="text-violet-600">{role}</span>
      </Heading3>
      <div className="mt-0 text-xl font-semibold text-neutral-500">{company}</div>
      <p className="mt-8 font-light text-neutral-600 sm:max-w-[600px] md:text-lg">{description}</p>
    </div>
  )
}

export default ProjectDetails
