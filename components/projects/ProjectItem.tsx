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
}: Props) => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-10">
      <div className="mx-auto items-start gap-8 py-8 md:grid md:grid-cols-2 lg:py-8">
        <div className="mt-8 flex first:mt-0 lg:mt-0 lg:justify-start">
          <div className="relative">
            {isFeatured && <p className="absolute -right-4 -top-5 z-10 text-4xl">⭐</p>}

            {/* FIXME: remove gallery, include screenshots directly */}
            {/* TODO: optimize images dimensions + format webp */}
            {/* TODO: img source set */}
            <Image
              src={image}
              className={`
                  mb-4 rounded-lg border bg-neutral-100 shadow-md md:mb-0 
                  ${getFeaturedBorderColor(isFeatured)}
                `}
              alt={title}
              placeholder="blur"
              blurDataURL={image}
              width={600}
              height={617}
            />
          </div>
        </div>

        <div className="mt-4 md:mt-0">
          <h2 className="mb-2 text-4xl font-bold tracking-tight text-neutral-900">{title}</h2>
          <div className="mb-4 text-xl font-semibold text-neutral-500">{company}</div>
          <h3 className="mb-4 text-2xl font-semibold">
            <span className="text-violet-600">{role}</span>
            <small className="text-neutral-500">
              {years && ' · '}
              {years}
            </small>
          </h3>

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
          <a
            data-testid={dataTestId}
            href={linkProjectPage}
            className="inline-flex items-center rounded-lg bg-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-800 focus:ring-4 focus:ring-purple-300"
          >
            {linkText} →
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
