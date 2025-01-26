import { FC } from 'react'

import Heading5 from '@/components/shared/Heading5'
import Highlight from '@/components/shared/Highlight'
import Paragraph from '@/components/shared/Paragraph'

import { ExperienceCardProps } from '@/lib/utils/typeDefinitions/props/pages/projects/other-experience'

const ExperienceCard: FC<ExperienceCardProps> = ({ company, role, description }): JSX.Element => {
  return (
    <div className="mt-4 w-full rounded-lg border border-gray-200 bg-white p-4 first:mt-0 sm:max-w-[600px]">
      <Heading5>
        {company}
        {' · '}
        <Highlight text={role} />
      </Heading5>
      <Paragraph marginTop="mt-0" size="text-md" textColor="text-neutral-500">
        {description}
      </Paragraph>
    </div>
  )
}

export default ExperienceCard
