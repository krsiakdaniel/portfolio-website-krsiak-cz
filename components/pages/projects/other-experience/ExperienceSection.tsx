import { FC } from 'react'

import { ExperienceSectionProps } from '@/lib/utils/typeDefinitions/props/pages/projects/other-experience'

const ExperienceSection: FC<ExperienceSectionProps> = ({ id, text }): JSX.Element => {
  return (
    <div id={id} className="mt-20 border-b pb-2 text-2xl font-bold uppercase">
      {text}
    </div>
  )
}

export default ExperienceSection
