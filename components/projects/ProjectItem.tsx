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
      <div className="gap-8 items-start py-8 mx-auto xl:gap-16 md:grid md:grid-cols-2 lg:py-16">
        <div className="flex lg:justify-end mt-8 lg:mt-0 first:mt-0">
          <div className="relative">
            {isFeatured && <p className="text-4xl absolute -right-4 -top-5 z-10">⭐</p>}
            <a href={linkProjectPage}>
              <Image
                src={image}
                className={`
                  rounded-lg shadow-md bg-neutral-100 object-cover mb-4 md:mb-0 
                  cursor-pointer hover:opacity-85 hover:border-purple-500
                  border ${getFeaturedBorderColor(isFeatured)}
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
          <h2 className="text-4xl font-bold mb-2 tracking-tight text-gray-900 dark:text-white">{title}</h2>
          <h3 className="text-2xl font-semibold mb-8">
            {company}
            <small className="text-neutral-500">{' · '}</small>
            <span className="text-purple-500">{role}</span>
            <small className="text-neutral-500">
              {years && ' · '}
              {years}
            </small>
          </h3>

          <div className="mb-2">
            <hr />
          </div>

          <p className="mb-6 mt-6 font-light text-gray-500 md:text-lg dark:text-gray-400">{description}</p>

          <div className="flex flex-row mb-6">
            {mySkillsIcons.map((item) => {
              return <Image key={item.name} src={item.path} alt={item.name} className="mr-2" width={32} height={32} />
            })}
          </div>

          {customers && (
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              <span className="font-bold">{customers}</span> customers.
            </p>
          )}
          <a
            href={linkProjectPage}
            className="inline-flex items-center text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-purple-900"
          >
            {linkText} →
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
