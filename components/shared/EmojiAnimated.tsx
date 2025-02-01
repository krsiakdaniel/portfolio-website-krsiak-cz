import ImageComponent from '@/components/shared/ImageComponent'
import { FC } from 'react'

// FIXME: opravit, bdue mi chybet slozka, udelat a k tomu ikony
// SM = 32,
// MD = 80,
// LG = 128,

// TODO: to pak upravit v 'CallToActionTexts' a overit i veliskot ikon EMOJI, jeslti to nerozbiji tech 32x32

export enum EmojiSizeEnum {
  SM = 80,
  MD = 128,
  LG = 256,
}

export enum EmojiTypeEnum {
  SUNGLASSES = 'smiling-face-with-sunglasses',
  ROCKET = 'rocket',
  ROBOT = 'robot',
}

interface EmojiAnimatedProps {
  type: EmojiTypeEnum
  size: EmojiSizeEnum
  alt: string
  loading?: 'lazy' | 'eager'
  className?: string
}

const EmojiAnimated: FC<EmojiAnimatedProps> = ({
  type,
  size = EmojiSizeEnum.MD,
  alt,
  loading = 'lazy',
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
