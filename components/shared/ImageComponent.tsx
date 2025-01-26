import Image from 'next/image'

import { IMAGE_ALT } from '@/localization/english'

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
}) => {
  return (
    <figure>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        loading={loading}
        className={customCss}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
      />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

export default ImageComponent
