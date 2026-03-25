import { ImageComponentCaptionProps } from '@/components/shared/ImageComponentCaption.types'
import Paragraph from '@/components/shared/Paragraph'

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
