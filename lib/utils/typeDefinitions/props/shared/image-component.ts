import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

import { ImageLoading } from '@/lib/utils/typeDefinitions/enums'
import { PlaceholderValue } from '@/node_modules/next/dist/shared/lib/get-img-props'

// Image Component Props
export type ImageComponentProps = {
  src: StaticImageData | string
  width?: number
  height?: number
  alt: string
  loading: ImageLoading | undefined
  customCss?: string
  placeholder?: PlaceholderValue
  blurDataURL?: string
  caption?: string | ReactNode
  dataTooltipContent?: string | null
  dataTestId?: string
}
