import { iconsWork1 } from '@/data/skills/projects-work'
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

const getFeaturedColors = (isFeatured: boolean): string => {
  if (isFeatured) {
    return 'border-l-4 bg-orange-100 border-orange-500'
  }
  return 'bg-neutral-50 border-neutral-400'
}

const ProjectItem = ({ isFeatured, image, title, role, years, description, customers, linkProjectPage }: Props) => {
  return (
    <>
      <div
        className={`flex flex-col lg:flex-row lg:space-x-10 mt-8 border rounded-lg px-8 py-6 relative ${getFeaturedColors(isFeatured || false)}`}
      >
        <div className="flex flex-col lg:w-1/2">
          <div className="mt-4">
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
              {isFeatured && <p className="text-5xl absolute -right-6 -top-6 z-10">⭐</p>}
              <div className="flex lg:justify-end mt-8 lg:mt-0 lg:w-1/2">
                <Image
                  src={image}
                  alt={title}
                  className="rounded-lg border bg-neutral-100 border-neutral-300 hover:border-primary-500 hover:scale-105 transition duration-500 cursor-pointer object-cover"
                  placeholder="blur"
                  blurDataURL={image}
                  width={622}
                  height={322}
                />
              </div>

              <div className="mt-4 md:mt-0">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{title}</h2>
                <p className="text-2xl font-semibold text-purple-500">
                  {role}{' '}
                  <small className="text-neutral-600">
                    {years && '· '}
                    {years}
                  </small>
                </p>
                <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">{description}</p>
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
          {/* FIXME: namapovat ruzne ikony podle projektu */}
          <div className="mt-4">
            <div className="flex flex-row">
              {iconsWork1.map((item) => {
                return <Image key={item.name} src={item.path} alt={item.name} className="mr-2" width={48} height={48} />
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectItem
