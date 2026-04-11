import { type StaticImageData } from 'next/image'

import { type DeviceTypeEnum } from '@/lib/types/enums'

export type SocialLinkIconProps = {
  type: DeviceTypeEnum
  href: string
  dataTestId: string
  title: string
  ariaLabel: string
  imgSrc: StaticImageData
  imgAlt: string
}
