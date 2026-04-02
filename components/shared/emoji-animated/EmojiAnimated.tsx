import { EmojiAnimatedProps } from '@/components/shared/emoji-animated/EmojiAnimated.types'
import ImageComponent from '@/components/shared/image-component/ImageComponent'

import { ImageLoadingEnum } from '@/lib/types/enums'

const EmojiAnimated = ({
  icon,
  size,
  alt,
  loading = ImageLoadingEnum.LAZY,
  className = '',
}: EmojiAnimatedProps) => {
  const src = `/images/webp/emoji-animated/${size}x${size}/${icon}-animated-${size}x${size}.webp`
  const isPriority = loading === ImageLoadingEnum.EAGER

  return (
    <div className={className}>
      <ImageComponent
        src={src}
        width={size}
        height={size}
        alt={alt}
        loading={loading}
        priority={isPriority}
      />
    </div>
  )
}

export default EmojiAnimated
