import ImageComponent from '@/components/shared/image-component/ImageComponent'

import { PROJECT_IMAGE_PREVIEW } from '@/lib/utils/constants/imageGalleryConfig'

import { ImageLoadingEnum } from '@/lib/types/enums'
import { ARIA_LABELS, ICON_EMOJI } from '@/localization'

import { type ProjectImageProps } from './ProjectImage.types'

const ProjectImage = ({ isFeatured, image, title }: ProjectImageProps) => {
  const featuredProjectCss = `${isFeatured ? 'bg-yellow-50 border-yellow-300' : 'bg-violet-50 border-violet-300'}`

  return (
    <div className="flex first:mt-0 lg:mt-0 lg:justify-start">
      <div className="relative">
        {isFeatured && (
          <span
            role="img"
            aria-label={ARIA_LABELS.emoji.star}
            className="absolute -top-5 -left-4 z-10 text-4xl select-none"
          >
            {ICON_EMOJI.star}
          </span>
        )}

        <ImageComponent
          src={image}
          width={PROJECT_IMAGE_PREVIEW.WIDTH}
          height={PROJECT_IMAGE_PREVIEW.HEIGHT}
          alt={title}
          priority={isFeatured}
          loading={isFeatured ? ImageLoadingEnum.EAGER : ImageLoadingEnum.LAZY}
          customCss={`rounded-lg border p-1 ${featuredProjectCss}`}
          sizes={`(max-width: 768px) 100vw, (max-width: 1024px) 50vw, ${PROJECT_IMAGE_PREVIEW.WIDTH}px`}
        />
      </div>
    </div>
  )
}

export default ProjectImage
