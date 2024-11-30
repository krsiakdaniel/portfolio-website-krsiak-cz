import JobItem from '@/components/aboutMe/JobItem'
import { jobs } from '@/data/about'

const JobsDescription = () => {
  return (
    <div className="mt-16 flex w-full flex-col md:mt-0 md:w-2/3">
      <ol className="relative border-s border-neutral-200">
        {jobs.map((job) => (
          <JobItem key={job.id} path={job.path} title={job.title} description={job.description} years={job.years} />
        ))}
      </ol>
    </div>
  )
}

export default JobsDescription
