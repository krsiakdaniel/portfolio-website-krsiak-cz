import Image from 'next/image'
import { FC } from 'react'

import Heading3 from '@/components/shared/Heading3'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import Paragraph from '@/components/shared/Paragraph'

import { GalleryProps } from '@/lib/utils/typeDefinitions/props'

const Gallery: FC<GalleryProps> = ({ imageShowcase }): JSX.Element => {
  return (
    <div className="mt-8">
      <Heading3>{TEXT.gallery}</Heading3>
      <Paragraph>See project screenshots below.</Paragraph>
      <div data-testid={DATA_TEST_IDS.gallery}>
        {imageShowcase.map((image) => (
          <div data-testid={`gallery-image-${image.id}`} key={image.id}>
            <Image
              src={image.src}
              width={1240}
              height={1272}
              className="mt-8 rounded-lg bg-violet-100 p-1 ring-1 ring-violet-300"
              alt={`project-image-${image.id}`}
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
