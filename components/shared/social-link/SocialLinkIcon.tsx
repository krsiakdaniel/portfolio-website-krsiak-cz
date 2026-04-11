import ImageComponent from '@/components/shared/image-component/ImageComponent'
import { type SocialLinkIconProps } from '@/components/shared/social-link/SocialLinkIcon.types'

import { DeviceTypeEnum, ImageLoadingEnum } from '@/lib/types/enums'

import { SOCIAL_ICON } from './SocialLinkIcon.constants'

const SocialLinkIcon = ({
  type,
  href,
  dataTestId,
  title,
  ariaLabel,
  imgSrc,
  imgAlt,
}: SocialLinkIconProps) => {
  const isMobile = type === DeviceTypeEnum.Mobile
  const width = isMobile ? SOCIAL_ICON.MOBILE.WIDTH : SOCIAL_ICON.DESKTOP.WIDTH
  const height = isMobile ? SOCIAL_ICON.MOBILE.HEIGHT : SOCIAL_ICON.DESKTOP.HEIGHT

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={dataTestId}
      className="transition-opacity duration-500 hover:opacity-70"
      title={title}
      aria-label={ariaLabel}
    >
      <ImageComponent
        src={imgSrc}
        width={width}
        height={height}
        alt={imgAlt}
        loading={ImageLoadingEnum.EAGER}
        sizes={`${isMobile ? SOCIAL_ICON.MOBILE.WIDTH : SOCIAL_ICON.DESKTOP.WIDTH}px`}
      />
    </a>
  )
}

export default SocialLinkIcon
