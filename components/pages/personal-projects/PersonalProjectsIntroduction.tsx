import { FC } from 'react'

import Highlight from '@/components/shared/Highlight'

const PersonalProjectsIntroduction: FC = (): JSX.Element => {
  return (
    <div>
      <p className="mt-4 text-lg text-neutral-600">
        I enjoy learning <Highlight text="new technologies" /> and creating <Highlight text="personal projects" /> where
        I can apply my knowledge.
      </p>
    </div>
  )
}

export default PersonalProjectsIntroduction
