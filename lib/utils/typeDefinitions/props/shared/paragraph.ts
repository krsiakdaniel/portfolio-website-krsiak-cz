import { ReactNode } from 'react'

import { MarginTopType, TextColorType, TextSizeType } from '@/lib/utils/typeDefinitions/types'

// Properties for Paragraph component
export type ParagraphProps = {
  marginTop?: MarginTopType
  dataTestId?: string
  textColor?: TextColorType
  size?: TextSizeType
  customCss?: string
  children: ReactNode
}
