import Heading2 from '@/components/shared/Heading2'
import Image from 'next/image'

type JobItemProps = {
  path: string
  title: string
  description: string
  years: number
}

type JobIconProps = {
  path: string
  title: string
}

const JobIcon = ({ path, title }: JobIconProps) => {
  return (
    <span className="absolute -start-5 flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 ring-1 ring-violet-600">
      <Image src={path} alt={title} width={28} height={28} loading="eager" />
    </span>
  )
}

const JobItem = ({ path, title, description, years }: JobItemProps) => {
  return (
    <li className="mb-10 ms-6 last:mb-0">
      <JobIcon path={path} title={title} />

      <Heading2
        textColor="text-neutral-900"
        customCss="mb-1 ml-4 flex flex-col items-start text-3xl font-bold text-neutral-900 lg:flex-row"
      >
        {title}
        <small className="text-md ml-0 inline text-neutral-500 lg:ml-1">
          <span className="hidden lg:inline">{years && ' · '}</span>
          {years} {years === 1 ? 'year' : 'years'}
        </small>
      </Heading2>

      <p className="mb-4 ml-4 text-base font-normal text-neutral-500 last:mb-2">{description}</p>
    </li>
  )
}

export default JobItem
