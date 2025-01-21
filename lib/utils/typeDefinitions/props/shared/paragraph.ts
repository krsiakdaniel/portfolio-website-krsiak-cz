import { ReactNode } from 'react'

import { MarginTopType, TextColorType, TextSizeType } from '@/lib/utils/typeDefinitions/types'

// Properties for Paragraph component
export type ParagraphProps = {
  children: ReactNode
  customCss?: string
  dataTestId?: string
  marginTop?: MarginTopType
  size?: TextSizeType
  textColor?: TextColorType
}
