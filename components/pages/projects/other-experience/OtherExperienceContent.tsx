import ExperienceCard from '@/components/pages/projects/other-experience/ExperienceCard'
import { OtherExperienceContentProps } from '@/components/pages/projects/other-experience/OtherExperience.types'
import Heading from '@/components/shared/Heading'

import { TEXT } from '@/localization'

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
