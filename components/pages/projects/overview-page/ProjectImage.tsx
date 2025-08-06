import { FC } from 'react'

import ImageComponent from '@/components/shared/ImageComponent'

import { ARIA_LABELS, ICON_EMOJI } from '@/localization/english'

import { PROJECT_IMAGE_PREVIEW } from '@/lib/utils/constants/imageGalleryConfig'
import { ImageLoading } from '@/lib/utils/typeDefinitions/enums'
import { ProjectImageProps } from '@/lib/utils/typeDefinitions/props/pages/projects/overview-page'

const ProjectImage: FC<ProjectImageProps> = ({ isFeatured, image, title }): JSX.Element => {
  const featuredProjectCSS = `${isFeatured ? 'bg-yellow-50 border-yellow-300' : 'bg-violet-50 border-violet-300'}`

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
          loading={ImageLoading.LAZY}
          customCss={`shadow-md rounded-lg border p-1 ${featuredProjectCSS}`}
          sizes={`(max-width: 768px) 100vw, (max-width: 1024px) 50vw, ${PROJECT_IMAGE_PREVIEW.WIDTH}px`}
        />
      </div>
    </div>
  )
}

export default ProjectImage
