import Heading5 from '@/components/shared/Heading5'
import Highlight from '@/components/shared/Highlight'

type ExperienceCardProps = {
  company: string
  role: string
  description: string
}

const ExperienceCard = ({ company, role, description }: ExperienceCardProps): JSX.Element => {
  return (
    <div className="mt-4 w-full rounded-lg border border-gray-200 bg-white p-6 shadow-md first:mt-0 md:max-w-[600px]">
      <Heading5>
        {company}
        {' · '}
        <Highlight text={role} />
      </Heading5>
      <p className="text-neutral-500">{description}</p>
    </div>
  )
}

export default ExperienceCard
