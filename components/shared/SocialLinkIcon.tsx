import ImageComponent from '@/components/shared/ImageComponent'

import { DeviceTypeEnum, ImageLoading } from '@/lib/utils/typeDefinitions/enums'
import { SocialLinkIconProps } from '@/lib/utils/typeDefinitions/props/shared/social-link-icon'
import { SOCIAL_ICON } from '@/components/layout/header/constants'

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
        loading={ImageLoading.EAGER}
        customCss="shadow-md"
        sizes={`${isMobile ? SOCIAL_ICON.MOBILE.WIDTH : SOCIAL_ICON.DESKTOP.WIDTH}px`}
      />
    </a>
  )
}

export default SocialLinkIcon
