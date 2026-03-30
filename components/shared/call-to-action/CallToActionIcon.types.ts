import { StaticImageData } from 'next/image'

export type CallToActionIconProps = {
  type: 'mobile' | 'desktop'
  icon: string | StaticImageData
}
