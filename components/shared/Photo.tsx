import Image from 'next/image'

import { TEXT } from '@/localization/english'

import krsiak from '@/public/images/webp/photo/krsiak-daniel-400.webp'

const Photo = (): JSX.Element => {
  return (
    <>
      <Image
        src={krsiak}
        alt={TEXT.nameDanielKrsiak}
        className="rounded-lg bg-violet-100 p-1 ring-1 ring-violet-300 lg:mt-0"
        placeholder="blur"
        loading="eager"
      />
      <div className="mt-2">
        <p className="text-sm text-gray-500">{TEXT.nameDanielKrsiak}</p>
      </div>
    </>
  )
}

export default Photo
