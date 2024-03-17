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
      <span className="absolute -start-6 flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 ring-2 ring-violet-600">
        <Image src={path} alt={title} width={32} height={32} />
      </span>
      <h3 className="mb-1 ml-4 flex flex-col items-start text-3xl font-bold text-neutral-900 lg:flex-row">
        {title}
        <small className="text-md ml-0 inline text-neutral-500 lg:ml-1">
          <span className="hidden lg:inline">{years && ' · '}</span>
          {years} {years === '1' ? 'year' : 'years'}
        </small>
      </h3>
      <p className="mb-4 ml-4 text-base font-normal text-neutral-500 last:mb-2">{description}</p>
    </li>
  )
}

export default JobItem
