import Image from 'next/image'
import { FC } from 'react'

import Paragraph from '@/components/shared/Paragraph'

import { TEXT } from '@/localization/english'

import openToWork from '@/public/images/png/open-to-work.png'
import krsiak from '@/public/images/webp/photo/krsiak-daniel-296x296.webp'

import { PhotoProps } from '@/lib/utils/typeDefinitions/props/pages/resume'

const Photo: FC<PhotoProps> = ({ isOpenToWork }): JSX.Element => {
  return (
    <div className="flex flex-col">
      <div className="relative rounded-full bg-black">
        <Image
          src={krsiak}
          alt={TEXT.nameDanielKrsiak}
          className="rounded-full border border-violet-300 bg-violet-50 p-1"
          placeholder="blur"
          loading="eager"
        />
        {isOpenToWork && <Image src={openToWork} alt="Open To Work" className="absolute left-0 top-0 h-full w-full" />}
      </div>
      <div>
        <Paragraph marginTop="mt-2" size="text-sm" textColor="text-neutral-500" customCss="text-center">
          {TEXT.nameDanielKrsiak}
        </Paragraph>
      </div>
    </div>
  )
}

export default Photo
