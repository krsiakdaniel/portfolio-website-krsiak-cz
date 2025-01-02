import Image from 'next/image'

import { TEXT } from '@/localization/english'

import krsiak from '@/public/images/webp/photo/krsiak-daniel-400.webp'

const Photo = (): JSX.Element => {
  return (
    <div className="justify-star mt-16 flex w-full flex-col items-center lg:mt-0 lg:w-1/3">
      <Image
        src={krsiak}
        alt={TEXT.nameDanielKrsiak}
        className="h-auto w-96 rounded-lg bg-violet-100 p-1 ring-1 ring-violet-300 lg:mt-0"
        placeholder="blur"
        loading="eager"
      />
      <div className="mt-2 flex flex-row justify-start">
        <p className="text-sm text-gray-500">{TEXT.nameDanielKrsiak}</p>
      </div>
    </div>
  )
}

export default Photo
