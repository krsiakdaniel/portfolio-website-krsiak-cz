import { FC } from 'react'

import Highlight from '@/components/shared/Highlight'
import Paragraph from '@/components/shared/Paragraph'

const PersonalProjectsIntroduction: FC = (): JSX.Element => {
  return (
    <div>
      <Paragraph>
        I enjoy learning <Highlight text="new technologies" /> and creating <Highlight text="personal projects" /> where
        I can apply my knowledge.
      </Paragraph>
    </div>
  )
}

export default PersonalProjectsIntroduction
