import { getFeaturedBorderColor } from '@/utils/getFeaturedBorderColor'
import { Icon } from '@/utils/types'
import Image from 'next/image'

type Props = {
  isFeatured?: boolean | undefined
  image: string
  title: string
  company: string
  role: string
  years?: string
  description: string
  mySkillsIcons: Icon[]
  customers: string | undefined
  linkText: string
  linkProjectPage: string
}

// TODO: Add WordPress experience? tutorials, sceenshots, text from Linkedin
// TODO: split the work into sub groups with small header? REACT, FRONTEND (web), WODPRESS, QA AUTOMATION + PRIDAT CYPRESS SMARTSUPP NEJAK JAKO TIMELINE MEZI TO?

const ProjectItem = ({
  isFeatured,
  image,
  title,
  company,
  role,
  years,
  description,
  mySkillsIcons,
  customers,
  linkText,
  linkProjectPage,
}: Props) => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-10">
      <div className="mx-auto items-start gap-8 py-8 md:grid md:grid-cols-2 lg:py-16 xl:gap-16">
        <div className="mt-8 flex first:mt-0 lg:mt-0 lg:justify-end">
          <div className="relative">
            {isFeatured && <p className="absolute -right-4 -top-5 z-10 text-4xl">⭐</p>}
            <a href={linkProjectPage}>
              <Image
                src={image}
                className={`
                  mb-4 cursor-pointer rounded-lg border bg-neutral-100 object-cover 
                  shadow-md hover:border-purple-500 hover:opacity-85
                  md:mb-0 ${getFeaturedBorderColor(isFeatured)}
                `}
                alt={title}
                placeholder="blur"
                blurDataURL={image}
                width={588}
                height={604}
              />
            </a>
          </div>
        </div>

        <div className="mt-4 md:mt-0">
          <h2 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h2>
          <h3 className="mb-8 text-2xl font-semibold">
            {company}
            <small className="text-neutral-500">{' · '}</small>
            <span className="text-violet-600">{role}</span>
            <small className="text-neutral-500">
              {years && ' · '}
              {years}
            </small>
          </h3>

          <div className="mb-2">
            <hr />
          </div>

          <p className="mb-6 mt-6 font-light text-neutral-600 dark:text-neutral-600 md:text-lg">{description}</p>

          <div className="mb-6 flex flex-row">
            {mySkillsIcons.map((item) => {
              return <Image key={item.name} src={item.path} alt={item.name} className="mr-2" width={32} height={32} />
            })}
          </div>

          {customers && (
            <p className="mb-6 font-light text-neutral-600 dark:text-neutral-600 md:text-lg">
              <span className="font-bold">{customers}</span> customers.
            </p>
          )}
          <a
            href={linkProjectPage}
            className="inline-flex items-center rounded-lg bg-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900"
          >
            {linkText} →
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
