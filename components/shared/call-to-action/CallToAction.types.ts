import { StaticImageData } from 'next/image'

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
  hasPhoto?: boolean
}

export type CallToActionIconProps = {
  type: 'mobile' | 'desktop'
  icon: string | StaticImageData
}

export type CallToActionTextsProps = {
  icon: string | StaticImageData
  highlight: string
  heading: string
  textMobileAndDesktop: string
  textDesktop: string
}
