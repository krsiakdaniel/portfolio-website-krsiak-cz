'use client'

import Image from 'next/image'

import { Tooltip } from 'react-tooltip'

import { type ImageComponentProps } from '@/components/shared/image-component/ImageComponent.types'

import { ID } from '@/lib/utils/constants/ids/elementIds'

import { ImageLoadingEnum } from '@/lib/types/enums'
import { IMAGE_ALT } from '@/localization'

import { IMAGE_COMPONENT_DEFAULTS } from './ImageComponent.constants'

const ImageComponent = ({
  src = '',
  width = IMAGE_COMPONENT_DEFAULTS.WIDTH,
  height = IMAGE_COMPONENT_DEFAULTS.HEIGHT,
  alt = IMAGE_ALT.default,
  priority = false,
  loading = ImageLoadingEnum.LAZY,
  customCss = '',
  sizes,
  placeholder = 'empty',
  blurDataURL = '',
  dataTooltipContent = '',
  dataTestId = '',
}: ImageComponentProps) => {
  const hasTooltip = dataTooltipContent !== ''

  // Is image src 'object' ? 'extract the image path from imported image object' : 'get string from direct image path'
  const imagePath = typeof src === 'object' ? src.src : src

  /**
   * Detect animated images by checking if filename contains 'animated'
   * Skip Next.js optimization as it can break animations (.webp, .gif)
   */
  const isImageAnimated = imagePath.toLowerCase().includes('animated')

  return (
    <>
      {hasTooltip && <Tooltip id={ID.reactTooltip} className={`z-20 select-none`} />}

      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        priority={priority}
        loading={priority ? undefined : loading}
        className={`select-none ${customCss}`}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        {...(sizes && { sizes })}
        data-tooltip-id={ID.reactTooltip}
        data-tooltip-place="top"
        data-tooltip-variant="dark"
        {...(dataTooltipContent && { 'data-tooltip-content': dataTooltipContent })}
        {...(dataTestId && { 'data-testid': dataTestId })}
        unoptimized={isImageAnimated}
      />
    </>
  )
}

export default ImageComponent
