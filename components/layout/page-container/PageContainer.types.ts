import { type ReactNode } from 'react'

export type MarginTop = 'mt-0' | 'mt-20'

export type PageContainerProps = {
  children: ReactNode
  id?: string
  marginTop?: MarginTop
}
