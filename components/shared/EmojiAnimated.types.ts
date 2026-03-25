import { EmojiNameEnum, EmojiSizeEnum, ImageLoading } from '@/lib/utils/typeDefinitions/enums'

export type EmojiAnimatedProps = {
  icon: EmojiNameEnum
  size: EmojiSizeEnum
  alt: string
  loading?: ImageLoading
  className?: string
}
