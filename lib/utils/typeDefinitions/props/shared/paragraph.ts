import { ReactNode } from 'react'

import { MarginTopType, TextColorType } from '@/lib/utils/typeDefinitions/types'

// Properties for Paragraph component
export type ParagraphProps = {
  marginTop?: MarginTopType
  dataTestId?: string
  textColor?: TextColorType
  customCss?: string
  children: ReactNode
}
