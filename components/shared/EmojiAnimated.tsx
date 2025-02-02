import { FC } from 'react'

import ImageComponent from '@/components/shared/ImageComponent'

import { ImageLoading } from '@/lib/utils/typeDefinitions/enums'
import { EmojiAnimatedProps } from '@/lib/utils/typeDefinitions/props/shared/emoji-animated'

const EmojiAnimated: FC<EmojiAnimatedProps> = ({
  icon,
  size,
  alt,
  loading = ImageLoading.LAZY,
  className = '',
}): JSX.Element => {
  const src = `/images/webp/emoji-animated/${size}x${size}/${icon}-animated-${size}x${size}.webp`

  return (
    <div className={className}>
      <ImageComponent src={src} width={size} height={size} alt={alt} loading={loading} />
    </div>
  )
}

export default EmojiAnimated
