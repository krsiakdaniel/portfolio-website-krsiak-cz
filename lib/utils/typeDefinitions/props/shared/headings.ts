import { ReactNode } from 'react'

// Heading Props
export type HeadingProps = {
  id?: string
  dataTestId?: string
  textColor?: string
  textSize?: string
  textSizeSM?: string
  textSizeMD?: string
  customCss?: string
  children: ReactNode
}
