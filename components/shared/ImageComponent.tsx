'use client'

import Image from 'next/image'
import { FC } from 'react'
import { Tooltip } from 'react-tooltip'

import { IMAGE_ALT } from '@/localization/english'

import { CSS_GLOBAL_CLASSES } from '@/lib/utils/constants/cssGlobalClasses'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { ImageComponentProps } from '@/lib/utils/typeDefinitions/props/shared/image-component'

const IMAGE_WIDTH = 128
const IMAGE_HEIGHT = 128

const ImageComponent: FC<ImageComponentProps> = ({
  src = '',
  width = IMAGE_WIDTH,
  height = IMAGE_HEIGHT,
  alt = IMAGE_ALT.defaultAlt,
  loading = 'lazy',
  customCss = '',
  placeholder = 'empty',
  blurDataURL = '',
  caption = '',
  dataTooltipContent = '',
  dataTestId = '',
}) => {
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
      {hasTooltip && <Tooltip id={ID.reactTooltip} className={`select-none ${CSS_GLOBAL_CLASSES.REACT_TOOLTIP}`} />}

      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        loading={loading}
        className={`select-none ${customCss}`}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
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
