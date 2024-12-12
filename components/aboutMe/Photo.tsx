import krsiak from '@/public/images/webp/krsiak-daniel-400.webp'
import Image from 'next/image'

const Photo = () => {
  return (
    <div className="flex w-full flex-col items-center justify-start lg:w-1/3">
      <Image
        src={krsiak}
        className="h-auto w-96 rounded-lg border border-neutral-300 bg-neutral-100 shadow-md lg:mb-0 lg:mt-0"
        alt="Daniel Kršiak"
        placeholder="blur"
        loading="eager"
      />
      <div className="mt-2 flex flex-row justify-start">
        <p className="text-sm text-gray-500">Daniel Kršiak</p>
      </div>
    </div>
  )
}

export default Photo
