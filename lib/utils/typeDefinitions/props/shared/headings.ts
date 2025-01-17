import { ReactNode } from 'react'

// TODO: refactor file
export type Heading1Props = {
  children: ReactNode
  dataTestId?: string
  textColor?: string
  textSize?: string
  textSizeSM?: string
  textSizeLG?: string
  customCss?: string | null
}

export type Heading2Props = {
  children: ReactNode
  dataTestId?: string
  textColor?: string
  customCss?: string
}

export type Heading3Props = {
  children: ReactNode
  dataTestId?: string
  textColor?: string
  customCss?: string
}

export type Heading4Props = {
  children: ReactNode
  dataTestId?: string
  textColor?: string
  customCss?: string
}

export type Heading5Props = {
  children: ReactNode
  dataTestId?: string
  textColor?: string
  customCss?: string
}
