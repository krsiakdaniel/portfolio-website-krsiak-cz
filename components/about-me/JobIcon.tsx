import Image from 'next/image'

type JobIconProps = {
  path: string
  title: string
}

const JobIcon = ({ path, title }: JobIconProps): JSX.Element => {
  return (
    <span className="absolute -start-5 flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 ring-1 ring-violet-600">
      <Image src={path} alt={title} width={28} height={28} loading="eager" />
    </span>
  )
}

export default JobIcon
