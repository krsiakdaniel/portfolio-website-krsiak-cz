import { iconsWork1 } from '@/data/skills/projects-work'
import { getFeaturedBorderColor } from '@/utils/getFeaturedBorderColor'
import Image from 'next/image'

type Props = {
  isFeatured?: boolean | undefined
  image: string
  title: string
  role: string
  years?: string
  description: string
  customers: string | undefined
  linkText: string
  linkProjectPage: string
}

const ProjectItem = ({ isFeatured, image, title, role, years, description, customers, linkProjectPage }: Props) => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-10">
      <div className="gap-8 items-center py-8 mx-auto xl:gap-16 md:grid md:grid-cols-2 sm:py-16">
        <div className="flex lg:justify-end mt-8 lg:mt-0 relative">
          {isFeatured && <p className="text-5xl absolute -left-6 -top-6 z-10">⭐</p>}
          {/* TODO: take new screenshots in more 'square' format in Firefox visible part of site */}
          <Image
            src={image}
            className={`rounded-lg shadow-md bg-neutral-100 object-cover border ${getFeaturedBorderColor(isFeatured)} mb-4 md:mb-0`}
            alt={title}
            placeholder="blur"
            blurDataURL={image}
            width={592}
            height={515}
          />
        </div>

        <div className="mt-4 md:mt-0">
          <h2 className="mb-2 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{title}</h2>
          <h3 className="text-2xl font-semibold text-purple-500 mb-8">
            {role}{' '}
            <small className="text-neutral-500">
              {years && '· '}
              {years}
            </small>
          </h3>

          <div className="mb-2">
            <hr />
          </div>

          <p className="mb-6 mt-6 font-light text-gray-500 md:text-lg dark:text-gray-400">{description}</p>

          {/* FIXME: namapovat ruzne ikony podle projektu */}
          <div className="flex flex-row mb-6">
            {iconsWork1.map((item) => {
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
            Read more
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
