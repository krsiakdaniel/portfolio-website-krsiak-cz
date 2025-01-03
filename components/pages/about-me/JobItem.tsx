import { FC } from 'react'

import JobIcon from '@/components/about-me/JobIcon'
import Heading2 from '@/components/shared/Heading2'

type JobItemProps = {
  path: string
  title: string
  description: string
  years: number
}

const JobItem: FC<JobItemProps> = ({ path, title, description, years }): JSX.Element => {
  return (
    <li className="ms-6 mt-10 first:mt-0">
      <JobIcon path={path} title={title} />

      <Heading2
        textColor="text-neutral-900"
        customCss="ml-4 flex flex-col items-start text-3xl font-bold text-neutral-900 lg:flex-row"
      >
        {title}
        <small className="text-md ml-0 inline text-neutral-500 lg:ml-1">
          <span className="hidden lg:inline">{years && ' · '}</span>
          {years} {years === 1 ? 'year' : 'years'}
        </small>
      </Heading2>

      <p className="ml-4 mt-4 text-base font-normal text-neutral-500">{description}</p>
    </li>
  )
}

export default JobItem
