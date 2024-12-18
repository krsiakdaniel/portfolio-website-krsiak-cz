import { IconArrow } from '@/components/icons'
import Heading2 from '@/components/shared/Heading2'
import { Icon } from '@/utils/interfaces/interfaces'
import Image from 'next/image'

type ProjectItemProps = {
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
  dataTestId: string
}

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
  dataTestId,
}: ProjectItemProps) => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-10">
      <div className="mx-auto mt-8 items-start gap-8 md:grid md:grid-cols-2">
        <div className="mt-8 flex first:mt-0 lg:mt-0 lg:justify-start">
          <div className="relative">
            {isFeatured && <p className="absolute -right-4 -top-5 z-10 text-4xl">⭐</p>}

            {/* TODO: change to webp or avif format */}
            <Image
              src={image}
              className="mb-4 rounded-lg border bg-neutral-100 shadow-md md:mb-0"
              alt={title}
              width={600}
              height={617}
            />
          </div>
        </div>

        <div className="mt-4 md:mt-0">
          <Heading2 textColor="text-neutral-900">{title}</Heading2>
          <h3 className="mb-4 text-3xl font-bold">
            <span className="text-violet-600">{role}</span>
            <small className="text-neutral-500">
              {years && ' · '}
              {years}
            </small>
          </h3>
          <div className="mb-4 text-xl font-semibold text-neutral-500">{company}</div>

          <p className="mb-6 mt-6 font-light text-neutral-600 md:text-lg">{description}</p>

          <div className="mb-6 flex flex-wrap">
            {mySkillsIcons.map((item) => {
              return (
                <Image
                  key={item.name}
                  src={item.path}
                  alt={item.name}
                  className="mb-2 mr-2 lg:mb-0"
                  width={32}
                  height={32}
                />
              )
            })}
          </div>

          {customers && (
            <p className="mb-6 font-light text-neutral-600 md:text-lg">
              <span className="font-bold">{customers}</span> customers.
            </p>
          )}
          <p>
            <a
              data-testid={dataTestId}
              href={linkProjectPage}
              className="flex w-[162px] items-center space-x-2 rounded-lg bg-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-800 focus:ring-4 focus:ring-purple-300"
            >
              <span>{linkText}</span> <IconArrow type="right" />
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
