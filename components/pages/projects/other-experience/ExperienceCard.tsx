import Heading from '@/components/shared/Heading'
import Highlight from '@/components/shared/Highlight'
import Paragraph from '@/components/shared/Paragraph'

import { MIDDLE_DOT } from '@/lib/utils/constants/specialCharacters'

import { ExperienceCardProps } from '@/lib/utils/typeDefinitions/props/pages/projects/other-experience'

const ExperienceCard = ({ company, role, description }: ExperienceCardProps) => {
  return (
    <div className="mt-4 w-full rounded-lg border border-gray-200 bg-white p-4 first:mt-0 sm:max-w-[600px]">
      <Heading as="h5">
        {company}
        <span className="mx-1">{MIDDLE_DOT}</span>
        <Highlight text={role} />
      </Heading>
      <Paragraph marginTop="mt-0" size="text-base" textColor="text-neutral-600">
        {description}
      </Paragraph>
    </div>
  )
}

export default ExperienceCard
