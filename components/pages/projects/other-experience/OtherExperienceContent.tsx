import { FC } from 'react'

import ExperienceCard from '@/components/pages/projects/other-experience/ExperienceCard'
import Heading4 from '@/components/shared/Heading4'

import { TEXT } from '@/localization/english'

import { OtherExperienceContentProps } from '@/lib/utils/typeDefinitions/props'

const OtherExperienceContent: FC<OtherExperienceContentProps> = ({ experience }): JSX.Element => {
  return (
    <>
      <Heading4>{TEXT.otherExperience}</Heading4>
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
    </>
  )
}

export default OtherExperienceContent
