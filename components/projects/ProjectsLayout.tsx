type Props = {
  dividerText: string
  heading: string
  rolesHeading: string
  rolesDescription: string
  children: React.ReactNode
}

const ProjectsLayout = ({ dividerText, heading, rolesHeading, rolesDescription, children }: Props) => {
  return (
    <>
      <div className="flex justify-center relative pb-1 pt-5">
        <span className="absolute block h-px bg-white bottom-1/2 left-0 right-0 bg-skills-line"></span>
        <div className="bg-white px-6 pb-3 pt-0 relative">
          <p className="text-body-sm font-semibold tracking-2 text-neutral-500 uppercase">{dividerText}</p>
        </div>
      </div>
      <div className="flex flex-col pt-5">
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-8 items-center">
          <div className="xl:col-span-6 lg:col-span-8 flex flex-row items-center gap-8 lg:pr-8">
            <h2 className="md:text-display-lg text-display-md font-semibold md:pb-6 pb-4 text-primary-500 uppercase">
              {heading}
            </h2>
          </div>
        </div>
        <div>
          <h3 className="text-display-xs font-semibold">{rolesHeading}</h3>
          <p className="text-body-md font-normal text-neutral-700">{rolesDescription}</p>
        </div>
        {/* Here goes ProjectItem */}
        <div>{children}</div>
      </div>
    </>
  )
}

export default ProjectsLayout
