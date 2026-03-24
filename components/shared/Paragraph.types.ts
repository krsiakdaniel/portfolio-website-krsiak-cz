import { ReactNode } from 'react'

import { MarginTopType, TextColorType, TextSizeType } from '@/lib/utils/typeDefinitions/types'

export type ParagraphProps = {
  marginTop?: MarginTopType
  dataTestId?: string
  textColor?: TextColorType
  size?: TextSizeType
  customCss?: string
  children: ReactNode
}
