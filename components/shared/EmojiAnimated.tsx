import { FC } from 'react'

import ImageComponent from '@/components/shared/ImageComponent'

import { EmojiNameEnum, EmojiSizeEnum, ImageLoading } from '@/lib/utils/typeDefinitions/enums'

interface EmojiAnimatedProps {
  type: EmojiNameEnum
  size: EmojiSizeEnum
  alt: string
  loading?: ImageLoading
  className?: string
}

const EmojiAnimated: FC<EmojiAnimatedProps> = ({
  type,
  size,
  alt,
  loading = ImageLoading.LAZY,
  className = '',
}): JSX.Element => {
  const src = `/images/webp/emoji-animated/${size}x${size}/${type}-animated-${size}x${size}.webp`

  return (
    <div className={className}>
      <ImageComponent src={src} width={size} height={size} alt={alt} loading={loading} />
    </div>
  )
}

export default EmojiAnimated
