import krsiak from '@/public/images/krsiak.jpg'
import Image from 'next/image'

const Photo = () => {
  return (
    <div className="flex flex-col w-full sm:1/2 lg:w-1/3 items-center justify-start lg:justify-center">
      <Image
        src={krsiak}
        className="rounded-lg shadow-md bg-neutral-100 border border-neutral-300 mt-4 mb-8 md:mt-0 md:mb-0"
        alt="Daniel Kršiak"
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
