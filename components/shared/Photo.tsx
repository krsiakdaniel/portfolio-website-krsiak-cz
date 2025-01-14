import Image from 'next/image'
import { FC } from 'react'

import Paragraph from './Paragraph'

import { TEXT } from '@/localization/english'

import krsiak from '@/public/images/webp/photo/krsiak-daniel-296x296.webp'

const Photo: FC = (): JSX.Element => {
  return (
    <div className="flex flex-col">
      <Image
        src={krsiak}
        alt={TEXT.nameDanielKrsiak}
        className="rounded-lg bg-violet-100 p-1 ring-1 ring-violet-300 lg:mt-0"
        placeholder="blur"
        loading="eager"
      />
      <div>
        <Paragraph marginTop="mt-2" size="text-sm" textColor="text-neutral-500">
          {TEXT.nameDanielKrsiak}
        </Paragraph>
      </div>
    </div>
  )
}

export default Photo
