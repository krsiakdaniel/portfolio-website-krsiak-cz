import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  image: string
  title: string
  role: string
  description: string
  mySkills: string
  linkText: string
  link: string[]
  customers: string
  linkProjectPage: string
}

const ProjectItem = ({ image, title, role, description, mySkills, customers, linkProjectPage }: Props) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:space-x-10 mt-8 bg-neutral-50 border border-neutral-400 rounded-lg px-8 py-6">
        <div className="flex flex-col lg:w-1/2">
          <div>
            <h4 className="text-display-xs font-semibold">{title}</h4>
            <p className="text-body-lg font-semibold text-primary-500">{role}</p>
          </div>

          <div className="mt-4">
            <p className="text-body-md text-neutral-700 w-11/12">{description}</p>
          </div>

          <div className="mt-4">
            <p className="text-body-sm text-primary-500">{mySkills}</p>
            {customers && (
              <p className="text-body-sm">
                <span className="text-neutral-500">Customers: {customers}</span>
              </p>
            )}
          </div>

          <div className="mt-8">
            <Link
              href={linkProjectPage}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary-500 hover:opacity-90 rounded-lg focus:outline-none w-[128px]"
            >
              Read more →
            </Link>
          </div>
        </div>

        <div className="flex lg:justify-end mt-8 lg:mt-0 lg:w-1/2">
          <Link href={linkProjectPage}>
            <Image
              src={image}
              alt={title}
              className="rounded-lg border bg-neutral-100 border-neutral-300 hover:border-primary-500 hover:scale-105 transition duration-500 cursor-pointer object-cover"
              placeholder="blur"
              blurDataURL={image}
              width={622}
              height={322}
            />
          </Link>
        </div>
      </div>
    </>
  )
}

export default ProjectItem
