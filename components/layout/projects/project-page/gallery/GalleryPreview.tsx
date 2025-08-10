import ImageComponent from '@/components/shared/ImageComponent'

import { ARIA_LABELS } from '@/localization/english'

import { GALLERY_PREVIEW_4_3 } from '@/lib/utils/constants/imageGalleryConfig'
import { ImageLoading } from '@/lib/utils/typeDefinitions/enums'
import { GalleryPreviewProps } from '@/lib/utils/typeDefinitions/props/layout/projects/project-page'

const GalleryPreview = ({ activeImage }: GalleryPreviewProps) => {
  return (
    <div className="overflow-hidden">
      <div
        role="img"
        aria-live="polite"
        aria-atomic="true"
        aria-label={`${ARIA_LABELS.galleryActiveImage}: ${activeImage.id}`}
      >
        <ImageComponent
          src={activeImage.src}
          width={GALLERY_PREVIEW_4_3.WIDTH}
          height={GALLERY_PREVIEW_4_3.HEIGHT}
          customCss="border rounded-lg border border-violet-300 bg-violet-50 p-1 shadow-md transition-all duration-500 ease-in-out animate-fade-in"
          alt={`${ARIA_LABELS.galleryActiveImage}: ${activeImage.id}`}
          loading={ImageLoading.LAZY}
          placeholder="blur"
          blurDataURL={activeImage.src}
          sizes={`(max-width: 768px) 100vw, (max-width: 1200px) 80vw, ${GALLERY_PREVIEW_4_3.WIDTH}px`}
        />
      </div>
    </div>
  )
}

export default GalleryPreview
