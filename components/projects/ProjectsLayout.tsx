import DividerWithText from '@/components/shared/DividerWithText'

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
        {/* This is ProjectItem */}
        <div>{children}</div>
      </div>
    </>
  )
}

export default ProjectsLayout
