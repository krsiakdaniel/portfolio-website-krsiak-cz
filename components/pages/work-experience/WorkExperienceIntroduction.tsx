import { FC } from 'react'

import Highlight from '@/components/shared/Highlight'

const WorkExperienceIntroduction: FC = (): JSX.Element => {
  return (
    <div>
      <p className="mt-4 text-lg text-neutral-600">
        I am experienced <Highlight text="React Developer" /> who knows <Highlight text="QA Automation" /> and can lead
        teams as a <Highlight text="Team Leader" />.
      </p>
    </div>
  )
}

export default WorkExperienceIntroduction
