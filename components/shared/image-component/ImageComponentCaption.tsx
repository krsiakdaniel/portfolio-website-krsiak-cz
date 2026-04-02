import { ImageComponentCaptionProps } from '@/components/shared/image-component/ImageComponentCaption.types'
import Paragraph from '@/components/shared/paragraph/Paragraph'

const ImageComponentCaption = ({
  text = '',
  alignSelf = 'self-start',
}: ImageComponentCaptionProps) => {
  return (
    <div className={alignSelf}>
      <Paragraph marginTop="mt-2" size="text-sm" textColor="text-neutral-600">
        {text}
      </Paragraph>
    </div>
  )
}

export default ImageComponentCaption
