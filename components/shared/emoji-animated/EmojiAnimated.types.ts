import { type EmojiNameEnum, type EmojiSizeEnum, type ImageLoadingEnum } from '@/lib/types/enums'

export type EmojiAnimatedProps = {
  icon: EmojiNameEnum
  size: EmojiSizeEnum
  alt: string
  loading?: ImageLoadingEnum
  priority?: boolean
  className?: string
}
