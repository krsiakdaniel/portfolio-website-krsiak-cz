import React from 'react'

import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'

import { jobs } from '@/lib/data/pages/resume'

import { formatExperienceMonthsYears } from '@/lib/utils/helpers/formatExperienceMonthsYears'

const CareerPathList: React.FC = () => {
  return (
    <>
      <div className="mt-16 border-b pb-2 text-2xl font-bold uppercase">My Career Since High School</div>
      <div>
        <p className="mt-4 text-lg text-neutral-600">
          My journey since high school has been diverse, encompassing a range of roles in different fields all coming
          nicely together.
        </p>
      </div>

      <div className="mt-8">
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
      </div>
    </>
  )
}

export default CareerPathList
