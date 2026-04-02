import { EmojiNameEnum, EmojiSizeEnum, ImageLoadingEnum } from '@/lib/types/enums'

export type EmojiAnimatedProps = {
  icon: EmojiNameEnum
  size: EmojiSizeEnum
  alt: string
  loading?: ImageLoadingEnum
  className?: string
}
