import { ReactNode } from 'react'

// Heading Props
export type HeadingProps = {
  id?: string
  dataTestId?: string
  textColor?: string
  customCss?: string
  children: ReactNode
}
