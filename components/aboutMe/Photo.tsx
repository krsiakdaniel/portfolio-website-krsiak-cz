import krsiak from '@/public/images/krsiak-daniel.webp'
import Image from 'next/image'

type PhotoProps = {
  isMediumWidth?: boolean
}

const Photo = ({ isMediumWidth = false }: PhotoProps) => {
  return (
    <div className={`flex w-full flex-col items-center justify-start ${isMediumWidth ? 'md:w-1/3' : ''}`}>
      <Image
        src={krsiak}
        className="rounded-lg border border-neutral-300 bg-neutral-100 shadow-md md:mb-0 md:mt-0"
        alt="Daniel Krsiak"
        placeholder="blur"
        style={{
          width: '400px',
          height: 'auto',
        }}
      />
      <div className="mt-2 flex flex-row justify-start">
        <p className="text-sm text-gray-500">Daniel Kršiak</p>
      </div>
    </div>
  )
}

export default Photo
