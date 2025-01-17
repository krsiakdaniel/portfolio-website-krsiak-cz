import { ReactNode } from 'react'

type SharedHeadingProps = {
  children: ReactNode
  customCss?: string
  dataTestId?: string
  textColor?: string
}

// Heading 1 Props
export type Heading1Props = SharedHeadingProps & {
  textSize?: string
  textSizeLG?: string
  textSizeSM?: string
}

// Heading 2 Props
export type Heading2Props = SharedHeadingProps

// Heading 3 Props
export type Heading3Props = SharedHeadingProps

// Heading 4 Props
export type Heading4Props = SharedHeadingProps

// Heading 5 Props
export type Heading5Props = SharedHeadingProps
