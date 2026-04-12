import { type ReactNode } from 'react'

import { type StaticImageData } from 'next/image'

export type CallToActionTextsProps = {
  icon: string | StaticImageData
  iconAlt?: string
  highlight: ReactNode
  heading: string
  textMobileAndDesktop: string
  textDesktop: string
}
