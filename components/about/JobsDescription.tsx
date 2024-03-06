import { jobs } from '@/data/about'
import Image from 'next/image'

const JobsDescription = () => {
  return (
    <div className="sm:1/2 flex w-full flex-col lg:w-2/3">
      {jobs.map((item) => (
        <div key={item.title} className="flex flex-col gap-4 pb-4 pt-4">
          <div className="flex flex-col items-start lg:flex-row lg:items-center">
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full  bg-blue-100 dark:bg-blue-900 md:mr-4 lg:mb-0">
              <Image key={item.title} src={item.path} alt={item.title} width={22} height={22} />
            </div>
            <h3 className="flex items-center text-2xl font-bold dark:text-white">
              {item.title}{' '}
              <small className="text-md ml-1 text-neutral-500">
                {item.years && ' · '}
                {item.years} {item.years === '1' ? 'year' : 'years'}
              </small>
              {item.myCareerFocus && (
                <span
                  key={item.title}
                  className={`ml-2 rounded border border-violet-400 bg-violet-100 px-2.5 py-0.5 text-center text-xs font-medium text-violet-800 last:mr-0 dark:bg-gray-700 dark:text-violet-400 md:mb-0 md:mr-2`}
                >
                  My Career Focus
                </span>
              )}
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
