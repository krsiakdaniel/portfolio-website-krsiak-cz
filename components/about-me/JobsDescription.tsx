import JobItem from '@/components/about-me/JobItem'

import { jobs } from '@/lib/data/about-me'

const JobsDescription = (): JSX.Element => {
  return (
    <div className="mt-16 flex w-full flex-col lg:mt-0 lg:w-2/3">
      <ol className="relative border-s border-neutral-200">
        {jobs.map((job) => (
          <JobItem key={job.id} path={job.path} title={job.title} description={job.description} years={job.years} />
        ))}
      </ol>
    </div>
  )
}

export default JobsDescription
