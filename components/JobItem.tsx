import React from 'react'
import Image from 'next/image'

type Props = {
  image: string
  title: string
  role: string
  description: string
  techStack: string
  linkText: string
  link: string | undefined
  customers: string | undefined
}

const JobItem = ({ image, title, role, description, techStack, link, linkText, customers }: Props) => {
  return (
    <div className="flex basis-1/2 flex-col lg:odd:pl-0 lg:odd:pr-14 lg:even:pr-0 lg:even:pl-14 md:odd:pr-4 md:even:pl-4 px-0 md:odd:pb-10 md:even:pb-0 pb-10">
      <div className="flex flex-col self-stretch pt-8">
        <h4 className="text-display-xs font-semibold">{title}</h4>
        <p className="text-body-lg font-semibold text-primary-500 pb-4">{role}</p>
        <p className="text-body-md font-normal text-neutral-700">{description}</p>
      </div>
      <div className="mt-4">
        <Image
          src={image}
          alt={title}
          className="rounded-lg border-4 border-neutral-300 bg-neutral-700"
          placeholder="blur"
          blurDataURL={image}
          width={544}
          height={337}
          style={{
            maxHeight: '345px',
          }}
        />
      </div>
      <p className="pt-2 text-body-sm">{techStack}</p>
      {customers && (
        <p className="pt-2 text-body-sm">
          <span className="text-neutral-500">Used by {customers} people</span>
        </p>
      )}
      {link && (
        <p className="pt-0 text-body-sm">
          <a href={link} target="_blank" className="underline hover:no-underline text-primary-500">
            {linkText}
          </a>
        </p>
      )}
    </div>
  )
}

export default JobItem
