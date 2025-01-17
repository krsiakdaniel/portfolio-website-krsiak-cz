import { ReactNode } from 'react'

// Heading 1 Props
export type Heading1Props = {
  children: ReactNode
  customCss?: string | null
  dataTestId?: string
  textColor?: string
  textSize?: string
  textSizeLG?: string
  textSizeSM?: string
}

// Heading 2 Props
export type Heading2Props = {
  children: ReactNode
  customCss?: string
  dataTestId?: string
  textColor?: string
}

// Heading 3 Props
export type Heading3Props = {
  children: ReactNode
  customCss?: string
  dataTestId?: string
  textColor?: string
}

// Heading 4 Props
export type Heading4Props = {
  children: ReactNode
  customCss?: string
  dataTestId?: string
  textColor?: string
}
