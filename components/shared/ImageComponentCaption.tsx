import { FC } from 'react'

import Paragraph from '@/components/shared/Paragraph'

import { ImageComponentCaptionProps } from '@/lib/utils/typeDefinitions/props/shared/image-component-caption'

const ImageComponentCaption: FC<ImageComponentCaptionProps> = ({ text = '', alignSelf = 'self-start' }) => {
  return (
    <div className={alignSelf}>
      <Paragraph marginTop="mt-2" size="text-sm" textColor="text-neutral-500">
        {text}
      </Paragraph>
    </div>
  )
}

export default ImageComponentCaption