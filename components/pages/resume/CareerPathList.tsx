import { FC } from 'react'

import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'

import { jobs } from '@/lib/data/pages/resume'

import { formatExperienceMonthsYears } from '@/lib/utils/helpers/formatExperienceMonthsYears'

const CareerPathList: FC = (): JSX.Element => {
  return (
    <List>
      {jobs.map((job) => (
        <ListItem key={job.id}>
          <span className="mr-1 font-bold">{job.title}</span>
          {' · '}
          <span className="ml-1">
            {job.duration} {formatExperienceMonthsYears({ duration: job.duration, unit: job.unit })}
          </span>
        </ListItem>
      ))}
    </List>
  )
}

export default CareerPathList
