import PartTimeLabel from '@/components/shared/PartTimeLabel'
import { jobs } from '@/data/about'
import Image from 'next/image'

const JobsDescription = () => {
  return (
    <div className="sm:1/2 flex w-full flex-col lg:w-2/3">
      {jobs.map((item) => (
        <div key={item.title} className="flex flex-col gap-4 pb-4 pt-4">
          <div className="flex flex-col items-start lg:flex-row lg:items-center">
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full  bg-blue-100 dark:bg-blue-900 md:mr-4 lg:mb-0">
              <Image key={item.title} src={item.path} alt={item.title} width={20} height={20} />
            </div>
            <h3 className="text-2xl font-bold dark:text-white">
              {item.title}{' '}
              <small className="text-md text-neutral-500">
                {item.years && '· '}
                {item.years} years {item.partTimeJob && <PartTimeLabel />}
              </small>
            </h3>
          </div>
          <p className="mb-3 text-neutral-600 last:mb-0 dark:text-neutral-600 md:max-w-[640px] lg:max-w-[768px]">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  )
}

export default JobsDescription
