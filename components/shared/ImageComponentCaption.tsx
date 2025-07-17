import { FC } from 'react'

import SmallText from '@/components/shared/SmallText'

import { ImageComponentCaptionProps } from '@/lib/utils/typeDefinitions/props/shared/image-component-caption'

const ImageComponentCaption: FC<ImageComponentCaptionProps> = ({
  text = '',
  alignSelf = 'self-start',
}): JSX.Element => {
  return (
    <div className={alignSelf}>
      <SmallText marginTop="mt-2" textColor="text-neutral-600">
        {text}
      </SmallText>
    </div>
  )
}

export default ImageComponentCaption
