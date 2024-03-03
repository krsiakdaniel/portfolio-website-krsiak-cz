import { jobs } from '@/data/about'
import Image from 'next/image'

const JobsDescription = () => {
  return (
    <div className="flex flex-col w-full sm:1/2 lg:w-2/3">
      {jobs.map((item) => (
        <div key={item.title} className="flex flex-col gap-4 pt-4 pb-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center">
            <div className="flex justify-center items-center w-10 h-10 rounded-full bg-blue-100  dark:bg-blue-900 mb-2 lg:mb-0 md:mr-4">
              <Image key={item.title} src={item.path} alt={item.title} width={20} height={20} />
            </div>
            <h3 className="text-2xl font-bold dark:text-white">
              {item.title}{' '}
              <small className="text-md text-neutral-500">
                {item.years && '· '}
                {item.years} years{' '}
                {item.partTimeJob && (
                  <small className="text-xs text-neutral-500">
                    <em>(part-time job)</em>
                  </small>
                )}
              </small>
            </h3>
          </div>
          <p className="mb-3 text-neutral-600 dark:text-neutral-600 last:mb-0 md:max-w-[640px] lg:max-w-[768px]">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  )
}

export default JobsDescription
