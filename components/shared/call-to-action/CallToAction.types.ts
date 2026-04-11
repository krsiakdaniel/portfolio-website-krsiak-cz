import { type StaticImageData } from 'next/image'

export type CallToActionProps = {
  highlight: string
  heading: string
  textMobileAndDesktop: string
  textDesktop: string
  link: string
  linkText: string
  isLinkExternal?: boolean
  dataTestId: string
  icon: string | StaticImageData
  iconAlt?: string
  hasPhoto?: boolean
}
