import { FC } from 'react'

import ImageComponent from '@/components/shared/ImageComponent'

import { ICON_EMOJI } from '@/localization/english'

import { ProjectImageProps } from '@/lib/utils/typeDefinitions/props/pages/projects/overview-page'

const IMAGE_WIDTH = 600
const IMAGE_HEIGHT = 340

const ProjectImage: FC<ProjectImageProps> = ({ isFeatured, image, title }): JSX.Element => {
  const featuredProjectCSS = `${isFeatured ? 'bg-yellow-50 border-yellow-300' : 'bg-violet-50 border-violet-300'}`

  return (
    <div className="flex first:mt-0 lg:mt-0 lg:justify-start">
      <div className="relative">
        {isFeatured && <span className="absolute -left-4 -top-5 z-10 select-none text-4xl">{ICON_EMOJI.star}</span>}

        <ImageComponent
          src={image}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          alt={title}
          loading="lazy"
          customCss={`shadow-md rounded-lg border p-1 ${featuredProjectCSS}`}
        />
      </div>
    </div>
  )
}

export default ProjectImage
