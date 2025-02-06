'use client'

import { FC, useState } from 'react'

import GalleryPreview from '@/components/layout/projects/project-page/gallery/GalleryPreview'
import GalleryThumbnails from '@/components/layout/projects/project-page/gallery/GalleryThumbnails'
import Heading3 from '@/components/shared/Heading3'
import Paragraph from '@/components/shared/Paragraph'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import {
  GalleryImageProps,
  GalleryProps,
} from '@/lib/utils/typeDefinitions/props/layout/projects/project-page'
import { ARIA_LABELS, GALLERY } from '@/localization/english'

const Gallery: FC<GalleryProps> = ({ images = [] }): JSX.Element => {
  const [featuredImage, setFeaturedImage] = useState<GalleryImageProps>(images[0])

  return (
    <div className="mt-8">
      <Heading3>{GALLERY.heading}</Heading3>
      <Paragraph>{GALLERY.screenshots}</Paragraph>
      <div
        data-testid={DATA_TEST_IDS.gallery}
        className="mt-4 grid gap-4"
        role="region"
        aria-label={ARIA_LABELS.galleryProjectShowcase}
      >
        <GalleryPreview featuredImage={featuredImage} />
        <GalleryThumbnails
          images={images}
          featuredImage={featuredImage}
          setFeaturedImage={setFeaturedImage}
        />
      </div>
    </div>
  )
}

export default Gallery
