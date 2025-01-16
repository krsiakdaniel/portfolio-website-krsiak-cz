import { FC } from 'react'

import { ExperienceSectionProps } from '@/lib/utils/typeDefinitions/componentProps'

const ExperienceSection: FC<ExperienceSectionProps> = ({ id, text }): JSX.Element => {
  return (
    <div id={id} className="mt-16 border-b pb-2 text-2xl font-bold uppercase">
      {text}
    </div>
  )
}

export default ExperienceSection
