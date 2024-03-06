import Image from 'next/image'

interface Props {
  path: string
  title: string
  description: string
  years: string
}

const JobItem = ({ path, title, description, years }: Props) => {
  return (
    <li className="mb-10 ms-6 last:mb-0">
      <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-neutral-900">
        <Image src={path} alt={title} width={14} height={14} />
      </span>
      <h3 className="mb-1 flex flex-col items-start text-lg font-semibold text-neutral-900 dark:text-white lg:flex-row">
        {title}
        <small className="text-md ml-0 inline text-neutral-500 lg:ml-1">
          <span className="hidden lg:inline">{years && ' · '}</span>
          {years} {years === '1' ? 'year' : 'years'}
        </small>
      </h3>
      <p className="mb-4 text-base font-normal text-neutral-500 last:mb-0 dark:text-neutral-400">{description}</p>
    </li>
  )
}

export default JobItem
