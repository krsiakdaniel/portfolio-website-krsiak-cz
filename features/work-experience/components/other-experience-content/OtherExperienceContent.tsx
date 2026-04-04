import Heading from '@/components/shared/heading/Heading'

import ExperienceCard from '@/features/work-experience/components/experience-card/ExperienceCard'
import { TEXT } from '@/localization'

import { OtherExperienceContentProps } from './OtherExperienceContent.types'

const OtherExperienceContent = ({ experience = [] }: OtherExperienceContentProps) => {
  return (
    <div className="mt-8">
      <Heading as="h4">{TEXT.otherExperience}</Heading>
      <div className="mt-4">
        {experience.map((experience) => (
          <ExperienceCard
            key={experience.id}
            company={experience.company}
            role={experience.role}
            description={experience.description}
          />
        ))}
      </div>
    </div>
  )
}

export default OtherExperienceContent
