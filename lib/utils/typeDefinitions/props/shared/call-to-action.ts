import { StaticImageData } from 'next/image'

// Call To Action Props
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

// Call To Action Icon Props
export type CallToActionIconProps = {
  type: 'mobile' | 'desktop'
  icon: string | StaticImageData
}

// Call To Action Texts Props
export type CallToActionTextsProps = {
  icon: string | StaticImageData
  highlight: string
  heading: string
  textMobileAndDesktop: string
  textDesktop: string
}
