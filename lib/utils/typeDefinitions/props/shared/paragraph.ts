import { ReactNode } from 'react'

// Define possible margin top values
type MarginTop = 'mt-0' | 'mt-2' | 'mt-4' | 'mt-8' | 'mt-16'

// Define possible text colors
type TextColor = 'text-neutral-500' | 'text-neutral-600' | 'text-neutral-700' | 'text-neutral-900'

// Define possible text sizes
type TextSize = 'text-sm' | 'text-md' | 'text-lg' | 'text-xl' | 'text-2xl'

// Define the properties for the Paragraph component
export type ParagraphProps = {
  children: ReactNode
  customCss?: string
  dataTestId?: string
  marginTop?: MarginTop
  size?: TextSize
  textColor?: TextColor
}
