import { FC } from 'react'

import { IMAGE_ALT } from '@/localization/english'

import ImageComponent from '@/components/shared/ImageComponent'
import smilingFaceWithSunglasses from '@/public/images/webp/emoji-animated/smiling-face-with-sunglasses-animated.webp'

// TODO: add 'ImageComponent' props so they can be passed down from <EmojiAnimated /> to <ImageComponent />
// TODO: add more based on 'type' showing different emoji passed via props, update where is used
const EmojiAnimated: FC = (): JSX.Element => {
  return (
    <div className="mt-8">
      <ImageComponent src={smilingFaceWithSunglasses} width={80} height={80} alt={IMAGE_ALT.welcome} loading="eager" />
    </div>
  )
}

export default EmojiAnimated
