'use client'

import Image from 'next/image'
import { Tooltip } from 'react-tooltip'

import { IMAGE_ALT } from '@/localization/english'

import { CSS_GLOBAL_CLASSES } from '@/lib/utils/constants/cssGlobalClasses'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { ImageComponentProps } from '@/lib/utils/typeDefinitions/props/shared/image-component'

const IMAGE_WIDTH = 128
const IMAGE_HEIGHT = 128

const ImageComponent: React.FC<ImageComponentProps> = ({
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
}) => {
  const hasTooltip = dataTooltipContent !== ''

  return (
    <figure>
      {hasTooltip && <Tooltip id={ID.reactTooltip} className={CSS_GLOBAL_CLASSES.REACT_TOOLTIP} />}

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
        data-tooltip-content={hasTooltip ? dataTooltipContent : ''}
      />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

export default ImageComponent
