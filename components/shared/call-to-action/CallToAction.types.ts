import { type ReactNode } from 'react'

import { type StaticImageData } from 'next/image'

export type CallToActionProps = {
  highlight: ReactNode
  heading: string
  textMobileAndDesktop: string
  textDesktop: string
  link: string
  linkText: string
  linkTextMobile?: string
  isLinkExternal?: boolean
  dataTestId: string
  icon: string | StaticImageData
  iconAlt?: string
  hasPhoto?: boolean
}
