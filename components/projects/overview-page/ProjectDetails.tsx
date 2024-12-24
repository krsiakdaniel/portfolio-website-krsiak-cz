import Heading2 from '@/components/shared/Heading2'

type ProjectDetailsProps = {
  title: string
  company: string
  role: string
  years?: string
  description: string
  customers?: string
}

const ProjectDetails = ({ title, company, role, years, description, customers }: ProjectDetailsProps) => (
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
    {customers && (
      <p className="mb-6 font-light text-neutral-600 md:text-lg">
        <span className="font-bold">{customers}</span> customers.
      </p>
    )}
  </div>
)

export default ProjectDetails
