'use client'

import Image from 'next/image'
import { FC } from 'react'
import { Tooltip } from 'react-tooltip'

import { IMAGE_ALT } from '@/localization/english'

import { ID } from '@/lib/utils/constants/ids/elementIds'
import { ImageLoading } from '@/lib/utils/typeDefinitions/enums'
import { ImageComponentProps } from '@/lib/utils/typeDefinitions/props/shared/image-component'

const IMAGE_WIDTH = 128
const IMAGE_HEIGHT = 128

const ImageComponent: FC<ImageComponentProps> = ({
  src = '',
  width = IMAGE_WIDTH,
  height = IMAGE_HEIGHT,
  alt = IMAGE_ALT.altDefault,
  priority = false,
  loading = ImageLoading.LAZY,
  customCss = '',
  sizes,
  placeholder = 'empty',
  blurDataURL = '',
  caption = '',
  dataTooltipContent = '',
  dataTestId = '',
}): JSX.Element => {
  const hasTooltip = dataTooltipContent !== ''

  // Is image src 'object' ? 'extract the image path from imported image object' : 'get string from direct image path'
  const imagePath = typeof src === 'object' ? src.src : src

  /**
   * Detect animated images by checking if filename contains 'animated'
   * Skip Next.js optimization as it can break animations (.webp, .gif)
   */
  const isImageAnimated = imagePath.toLowerCase().includes('animated')

  return (
    <figure>
      {hasTooltip && <Tooltip id={ID.reactTooltip} className={`z-20 select-none`} />}

      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        priority={priority}
        loading={loading}
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
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

export default ImageComponent
