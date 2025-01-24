import Image from 'next/image'
import { FC } from 'react'

import { ProjectImageProps } from '@/lib/utils/typeDefinitions/props/pages/projects/overview-page'

const IMAGE_WIDTH = 600
const IMAGE_HEIGHT = 340

const ProjectImage: FC<ProjectImageProps> = ({ isFeatured, image, title }): JSX.Element => {
  const featuredProjectCSS = `${isFeatured ? 'bg-yellow-50 border-yellow-300' : 'bg-violet-50 border-violet-300'}`

  return (
    <div className="flex first:mt-0 lg:mt-0 lg:justify-start">
      <div className="relative">
        {isFeatured && <div className="absolute -right-4 -top-5 z-10 text-4xl">⭐</div>}
        <Image
          src={image}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          alt={title}
          className={`rounded-lg border p-1 ${featuredProjectCSS}`}
        />
      </div>
    </div>
  )
}

export default ProjectImage
