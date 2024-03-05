import krsiak from '@/public/images/krsiak.jpg'
import Image from 'next/image'

const Photo = () => {
  return (
    <div className="sm:1/2 flex w-full flex-col items-center justify-start lg:w-1/3 lg:justify-center">
      <Image
        src={krsiak}
        className="mb-8 mt-4 rounded-lg border border-neutral-300 bg-neutral-100 shadow-md md:mb-0 md:mt-0"
        alt="Daniel Krsiak"
        placeholder="blur"
        style={{
          width: '385px',
          height: 'auto',
        }}
      />
    </div>
  )
}

export default Photo
