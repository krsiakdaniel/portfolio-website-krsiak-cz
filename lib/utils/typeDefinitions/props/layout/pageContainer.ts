import { ReactNode } from 'react'

// Margin Top
export type MarginTop = 'mt-0' | 'mt-20'

// Page Container Props
export type PageContainerProps = {
  children: ReactNode
  id?: string
  marginTop?: MarginTop
}
