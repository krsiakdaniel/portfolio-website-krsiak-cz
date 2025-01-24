import { StaticImageData } from 'next/image'

// Social Link Icon Props
export type SocialLinkIconProps = {
  href: string
  dataTestId: string
  title: string
  ariaLabel: string
  imgSrc: StaticImageData
  width: number
  height: number
  imgAlt: string
}
