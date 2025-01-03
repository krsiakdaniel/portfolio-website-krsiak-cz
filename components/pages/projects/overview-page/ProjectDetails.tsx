import { FC } from 'react'

import Heading2 from '@/components/shared/Heading2'
import Heading3 from '@/components/shared/Heading3'

type ProjectDetailsProps = {
  title: string
  company: string
  role: string
  years?: string
  description: string
  customers?: string
}

const ProjectDetails: FC<ProjectDetailsProps> = ({
  title,
  company,
  role,
  years,
  description,
  customers,
}): JSX.Element => (
  <div>
    <Heading2 textColor="text-neutral-900" customCss="mt-8 md:mt-0">
      {title}
    </Heading2>

    <Heading3>
      <span className="text-violet-600">{role}</span>
      <small className="text-neutral-500">
        {years && ' · '}
        {years}
      </small>
    </Heading3>

    <div className="mt-0 text-xl font-semibold text-neutral-500">{company}</div>

    <p className="mt-4 font-light text-neutral-600 md:text-lg">{description}</p>
    {customers && (
      <p className="mt-4 font-light text-neutral-600 md:text-lg">
        <span className="font-bold">{customers}</span> customers.
      </p>
    )}
  </div>
)

export default ProjectDetails
