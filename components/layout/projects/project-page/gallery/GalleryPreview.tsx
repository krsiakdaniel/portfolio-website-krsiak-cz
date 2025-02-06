import { FC } from 'react'

import ImageComponent from '@/components/shared/ImageComponent'

import { ARIA_LABELS } from '@/localization/english'

import { ImageLoading } from '@/lib/utils/typeDefinitions/enums'
import { GalleryPreviewProps } from '@/lib/utils/typeDefinitions/props/layout/projects/project-page'

const IMAGE_WIDTH = 1240
const IMAGE_HEIGHT = 1272

const GalleryPreview: FC<GalleryPreviewProps> = ({ featuredImage }): JSX.Element => {
  return (
    <div className="overflow-hidden">
      <ImageComponent
        src={featuredImage.src}
        width={IMAGE_WIDTH}
        height={IMAGE_HEIGHT}
        customCss="border-1 rounded-lg border border-violet-300 bg-violet-50 p-1 shadow-md transition-all duration-500 ease-in-out animate-fadeIn"
        alt={`${ARIA_LABELS.galleryActiveImage}: ${featuredImage.id}`}
        loading={ImageLoading.LAZY}
        placeholder="blur"
        blurDataURL={featuredImage.src}
        aria-label={ARIA_LABELS.galleryActiveImage}
      />
    </div>
  )
}

export default GalleryPreview
