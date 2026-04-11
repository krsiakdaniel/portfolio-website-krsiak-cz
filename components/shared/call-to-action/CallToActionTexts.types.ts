import { type StaticImageData } from 'next/image'

export type CallToActionTextsProps = {
  icon: string | StaticImageData
  iconAlt?: string
  highlight: string
  heading: string
  textMobileAndDesktop: string
  textDesktop: string
}
