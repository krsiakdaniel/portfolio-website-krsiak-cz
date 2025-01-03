import Image from 'next/image'
import { FC } from 'react'

type JobIconProps = {
  path: string
  title: string
}

const JobIcon: FC<JobIconProps> = ({ path, title }): JSX.Element => {
  return (
    <span className="absolute -start-5 flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 ring-1 ring-violet-600">
      <Image src={path} width={28} height={28} alt={title} loading="eager" />
    </span>
  )
}

export default JobIcon
