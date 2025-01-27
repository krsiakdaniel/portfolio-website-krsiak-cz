import { FC } from 'react'

import Highlight from '@/components/shared/Highlight'
import Paragraph from '@/components/shared/Paragraph'

const StatusPageIntroduction: FC = (): JSX.Element => {
  return (
    <>
      <Paragraph>
        Current <Highlight text="status" /> showcasing the health and <Highlight text="performance" /> of the{' '}
        <Highlight text="project" /> integrations and workflows.
      </Paragraph>
    </>
  )
}

export default StatusPageIntroduction
