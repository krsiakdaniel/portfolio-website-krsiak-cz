import { StaticImageData } from 'next/image'

import { DeviceTypeEnum } from '@/lib/utils/typeDefinitions/enums'

export type SocialLinkIconProps = {
  type: DeviceTypeEnum
  href: string
  dataTestId: string
  title: string
  ariaLabel: string
  imgSrc: StaticImageData
  imgAlt: string
}
