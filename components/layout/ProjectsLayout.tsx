type Props = {
  dividerText: string
  heading: string
  description: string
  children: React.ReactNode
}

const ProjectsLayout = ({ dividerText, heading, description, children }: Props) => {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-5xl font-bold uppercase text-violet-600">{heading}</h1>
        <p className="mt-4 text-lg text-neutral-600">{description}</p>
      </div>
      {/* This is ProjectItem */}
      <div>{children}</div>
    </>
  )
}

export default ProjectsLayout
