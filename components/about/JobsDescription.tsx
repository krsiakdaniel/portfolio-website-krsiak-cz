import JobItem from '@/components/about/JobItem'
import { jobs } from '@/data/about'

const JobsDescription = () => {
  return (
    <div className="flex w-full flex-col md:w-2/3">
      <ol className="relative border-s border-neutral-200 dark:border-neutral-700">
        {jobs.map((job, index) => (
          <JobItem key={index} path={job.path} title={job.title} description={job.description} years={job.years} />
        ))}
      </ol>
    </div>
  )
}

export default JobsDescription
