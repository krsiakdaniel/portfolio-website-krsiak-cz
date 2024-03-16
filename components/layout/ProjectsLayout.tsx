import PageHeading from '@/components/PageHeading'
type Props = {
  heading: string
  description: string
  children: React.ReactNode
}

const ProjectsLayout = ({ heading, description, children }: Props) => {
  return (
    <>
      <div className="flex flex-col">
        <PageHeading title={heading} />
        <p className="mt-4 text-lg text-neutral-600">{description}</p>
      </div>
      {/* This is ProjectItem */}
      <div>{children}</div>
    </>
  )
}

export default ProjectsLayout
