import ImageComponent from '@/components/shared/ImageComponent'

import { DeviceTypeEnum, ImageLoading } from '@/lib/utils/typeDefinitions/enums'
import { SocialLinkIconProps } from '@/lib/utils/typeDefinitions/props/shared/social-link-icon'

const IMAGE_WIDTH_MOBILE = 32
const IMAGE_HEIGHT_MOBILE = 32

const IMAGE_WIDTH_DESKTOP = 28
const IMAGE_HEIGHT_DESKTOP = 28

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
  const width = isMobile ? IMAGE_WIDTH_MOBILE : IMAGE_WIDTH_DESKTOP
  const height = isMobile ? IMAGE_HEIGHT_MOBILE : IMAGE_HEIGHT_DESKTOP

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
        sizes={`${isMobile ? IMAGE_WIDTH_MOBILE : IMAGE_WIDTH_DESKTOP}px`}
      />
    </a>
  )
}

export default SocialLinkIcon
