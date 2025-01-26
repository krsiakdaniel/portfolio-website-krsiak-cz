import { FC } from 'react'

import ImageComponent from '@/components/shared/ImageComponent'
import ImageComponentCaption from '@/components/shared/ImageComponentCaption'

import { TEXT } from '@/localization/english'

import { PhotoProps } from '@/lib/utils/typeDefinitions/props/pages/resume'

import openToWork from '@/public/images/png/open-to-work.png'
import krsiak from '@/public/images/webp/photo/krsiak-daniel-296x296.webp'

const IMAGE_WIDTH = 296
const IMAGE_HEIGHT = 296

const Photo: FC<PhotoProps> = ({ isOpenToWork }): JSX.Element => {
  return (
    <div className="flex flex-col">
      <div className="relative rounded-full bg-black">
        {/* base image */}
        <ImageComponent
          src={krsiak}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          alt={TEXT.nameDanielKrsiak}
          loading="lazy"
          customCss="rounded-full border border-violet-300 bg-violet-50 p-1"
        />

        {/* image overlay */}
        {isOpenToWork && (
          <ImageComponent
            src={openToWork}
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
            alt="Open To Work"
            loading="lazy"
            customCss="absolute left-0 top-0 h-full w-full"
          />
        )}
      </div>

      <ImageComponentCaption text={TEXT.nameDanielKrsiak} alignSelf="self-center" />
    </div>
  )
}

export default Photo
