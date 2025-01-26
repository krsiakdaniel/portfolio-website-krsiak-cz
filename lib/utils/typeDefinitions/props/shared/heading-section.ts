import { ReactElement } from 'react'

// Heading Section Props
export type HeadingSectionProps = {
  text: string | ReactElement<HTMLSpanElement>
  id?: string
  dataTestId?: string
}
