import DividerWithText from '@/components/shared/DividerWithText'
import Image from 'next/image'

type Props = {
  dividerText: string
  heading: string
  description: string
  children: React.ReactNode
}

const ProjectsLayout = ({ dividerText, heading, description, children }: Props) => {
  return (
    <>
      <DividerWithText text={dividerText} />
      <div className="flex flex-col pt-5">
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-8 items-center">
          <div className="xl:col-span-6 lg:col-span-8 flex flex-row items-center gap-8 lg:pr-8">
            <h2 className="text-4xl font-bold text-purple-600 dark:text-purple-500 uppercase">{heading}</h2>
          </div>
        </div>
        <div>
          <p className="my-4 text-lg text-gray-500">{description}</p>
        </div>

        <div>
          <section className="bg-white dark:bg-gray-900">
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
              <Image
                className="w-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
                alt="i"
                width={500}
                height={500}
              />
              <div className="mt-4 md:mt-0">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  Create more tools and ideas that brings us together.
                </h2>
                <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                  Flowbite helps you connect with friends and communities of people who share your interests. Connecting
                  with your friends and family as well as discovering new ones is easy with features like Groups.
                </p>
                <a
                  href="#"
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
          </section>
        </div>
        {/* This is ProjectItem */}
        <div>{children}</div>
      </div>
    </>
  )
}

export default ProjectsLayout
