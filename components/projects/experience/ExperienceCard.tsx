import PartTimeLabel from '@/components/shared/PartTimeLabel'

type Props = {
  company: string
  role: string
  isPartTime?: boolean
  description: string
}

const ExperienceCard = ({ company, role, isPartTime, description }: Props) => {
  return (
    <div className="mb-8 w-full rounded-lg border border-gray-200 bg-white p-6 shadow-md md:max-w-[600px]">
      <div>
        <h5 className="mr-3 font-semibold">
          {company}
          {' · '}
          <span className="text-violet-600">{role}</span> {isPartTime && <PartTimeLabel />}
        </h5>
        <p className="text-neutral-500">{description}</p>
      </div>
    </div>
  )
}

export default ExperienceCard
