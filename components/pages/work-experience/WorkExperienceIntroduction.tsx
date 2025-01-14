import { FC } from 'react'

import Highlight from '@/components/shared/Highlight'
import Paragraph from '@/components/shared/Paragraph'

const WorkExperienceIntroduction: FC = (): JSX.Element => {
  return (
    <div>
      <Paragraph>
        I am experienced <Highlight text="React Developer" /> who knows <Highlight text="QA Automation" /> and can lead
        teams as a <Highlight text="Team Leader" />.
      </Paragraph>
    </div>
  )
}

export default WorkExperienceIntroduction
