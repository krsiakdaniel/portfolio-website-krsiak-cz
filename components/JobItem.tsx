import React from 'react'
import Image from 'next/image'

type Props = {
  image: string
  title: string
  role: string
  description: string
  linkText: string
  link: string
  customers: string
}

const JobItem = ({ image, title, role, description, link, linkText, customers }: Props) => {
  return (
    <div className="flex basis-1/2 flex-col lg:odd:pl-0 lg:odd:pr-14 lg:even:pr-0 lg:even:pl-14 md:odd:pr-4 md:even:pl-4 px-0 md:odd:pb-10 md:even:pb-0 pb-10">
      <div className="flex flex-col self-stretch pt-8">
        <h3 className="text-display-xs font-semibold">{title}</h3>
        <p className="text-display-xxs font-semibold text-primary-600 pb-4">{role}</p>
        <p className="lg:text-body-md text-body-sm font-normal text-neutral-700">{description}</p>
      </div>
      <div className="mt-4">
        <Image src={image} alt={title} className="rounded-lg border border-neutral-300" width={620} height={310} />
      </div>
      <p className="pt-2">
        <span className="text-neutral-400">Used by {customers} people</span>
      </p>
      <p className="pt-0">
        <a href={link} target="_blank" className="underline hover:no-underline text-primary-600">
          {linkText}
        </a>
      </p>
    </div>
  )
}

export default JobItem
