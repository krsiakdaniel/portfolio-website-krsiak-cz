import Image from 'next/image'
import { FC } from 'react'

import { ProjectImageProps } from '@/lib/utils/typeDefinitions/props/pages/projects/overview-page'

const ProjectImage: FC<ProjectImageProps> = ({ isFeatured, image, title }): JSX.Element => {
  const imageCSS = `rounded-lg p-1 border ${
    isFeatured ? 'bg-yellow-50 border-yellow-300' : 'bg-violet-50 border-violet-300'
  }`

  return (
    <div className="flex first:mt-0 lg:mt-0 lg:justify-start">
      <div className="relative">
        {isFeatured && <div className="absolute -right-4 -top-5 z-10 text-4xl">⭐</div>}
        <Image src={image} width={600} height={340} alt={title} className={imageCSS} />
      </div>
    </div>
  )
}

export default ProjectImage
