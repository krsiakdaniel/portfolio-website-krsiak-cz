import { ReactNode } from 'react'

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type HeadingSize =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl'

export interface HeadingProps {
  as?: HeadingLevel
  size?: HeadingSize
  sizeSM?: HeadingSize
  sizeMD?: HeadingSize
  id?: string
  dataTestId?: string
  textColor?: string
  customCss?: string
  children: ReactNode
}
