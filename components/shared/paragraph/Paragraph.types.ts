import { ReactNode } from 'react'

type MarginTopType = 'mt-0' | 'mt-2' | 'mt-4' | 'mt-8' | 'mt-16'

type TextColorType = 'text-neutral-600' | 'text-neutral-700' | 'text-neutral-900'

type TextSizeType =
  | 'text-sm'
  | 'text-base'
  | 'text-lg'
  | 'text-xl'
  | 'text-2xl'
  | 'text-3xl'
  | 'text-4xl'
  | 'text-5xl'
  | 'text-6xl'
  | 'text-7xl'
  | 'text-8xl'
  | 'text-9xl'

export type ParagraphProps = {
  marginTop?: MarginTopType
  dataTestId?: string
  textColor?: TextColorType
  size?: TextSizeType
  customCss?: string
  children: ReactNode
}
