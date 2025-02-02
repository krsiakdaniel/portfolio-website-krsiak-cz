import { FC } from 'react'

import Highlight from '@/components/shared/Highlight'
import Paragraph from '@/components/shared/Paragraph'

const StatusIntroduction: FC = (): JSX.Element => {
  return (
    <>
      <Paragraph>
        Current <Highlight text="status" /> showing the health and <Highlight text="performance" />{' '}
        of the <Highlight text="project" /> integrations and workflows.
      </Paragraph>
    </>
  )
}

export default StatusIntroduction
