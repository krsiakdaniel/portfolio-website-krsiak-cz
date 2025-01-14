import { FC } from 'react'

import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'

import { jobs } from '@/lib/data/pages/resume'

import { formatExperienceMonthsYears } from '@/lib/utils/helpers/formatExperienceMonthsYears'

const CareerPathList: FC = (): JSX.Element => {
  return (
    <div className="mt-8">
      <List>
        {jobs.map((job) => (
          <ListItem key={job.id}>
            <div>
              <p>
                <span className="font-bold">{job.title}</span>
                <span className="hidden sm:inline">
                  {' · '}
                  {job.duration} {formatExperienceMonthsYears({ duration: job.duration, unit: job.unit })}
                </span>
              </p>
            </div>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default CareerPathList
