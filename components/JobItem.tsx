import React from 'react'
import Image from 'next/image'

type Props = {
  image: string
  title: string
  role: string
  description: string
  link: string
  customers: string
}

const JobItem = ({ image, title, role, description, link, customers }: Props) => {
  return (
    <div className="flex basis-1/2 flex-col lg:odd:pl-10 lg:odd:pr-14 lg:even:pr-10 lg:even:pl-14 md:odd:pr-4 md:even:pl-4 px-0 md:odd:pb-10 md:even:pb-0 pb-12">
      <div className="flex flex-col self-stretch pt-6">
        <h3 className="text-display-xs font-semibold">{title}</h3>
        <p className="text-display-xxs font-semibold text-primary-600 pb-4">{role}</p>
        <p className="lg:text-body-md text-body-sm font-normal text-neutral-700">{description}</p>
      </div>
      <div className="mt-4">
        <Image src={image} alt={title} className="rounded-lg border border-neutral-300" width={400} height={350} />
      </div>
      <p className="text-primary-600 pt-2 underline hover:no-underline">
        <a href={link} target="_blank">
          {link}
        </a>
      </p>
      <p className="text-neutral-400 pt-0">Used by {customers} people</p>
    </div>
  )
}

export default JobItem
