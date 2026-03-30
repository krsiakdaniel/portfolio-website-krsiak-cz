import { StaticImageData } from 'next/image'

export type CallToActionTextsProps = {
  icon: string | StaticImageData
  highlight: string
  heading: string
  textMobileAndDesktop: string
  textDesktop: string
}
