import { FC } from 'react'

import Heading3 from '@/components/shared/Heading3'
import ImageComponent from '@/components/shared/ImageComponent'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import Paragraph from '@/components/shared/Paragraph'

import { ImageLoading } from '@/lib/utils/typeDefinitions/enums'
import { GalleryProps } from '@/lib/utils/typeDefinitions/props/layout/projects/project-page'

const IMAGE_WIDTH = 1240
const IMAGE_HEIGHT = 1272

const Gallery: FC<GalleryProps> = ({ imageShowcase = [] }): JSX.Element => {
  return (
    <div className="mt-8">
      <Heading3>{TEXT.gallery}</Heading3>
      <Paragraph>See project screenshots below.</Paragraph>
      <div data-testid={DATA_TEST_IDS.gallery}>
        {imageShowcase.map((image) => (
          <div data-testid={`gallery-image-${image.id}`} key={image.id}>
            <ImageComponent
              src={image.src}
              width={IMAGE_WIDTH}
              height={IMAGE_HEIGHT}
              customCss="border-1 mt-8 rounded-lg border border-violet-300 bg-violet-50 p-1 shadow-md"
              alt={`project-image-${image.id}`}
              loading={ImageLoading.LAZY}
              placeholder="blur"
              blurDataURL={image.src}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
