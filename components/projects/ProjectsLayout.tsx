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
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="flex flex-row items-center gap-8 lg:col-span-8 lg:pr-8 xl:col-span-6">
            <h2 className="text-4xl font-bold uppercase text-violet-600 dark:text-violet-600">{heading}</h2>
          </div>
        </div>
        <div>
          <p className="my-4 text-lg text-neutral-600">{description}</p>
        </div>
        {/* This is ProjectItem */}
        <div>{children}</div>
      </div>
    </>
  )
}

export default ProjectsLayout
