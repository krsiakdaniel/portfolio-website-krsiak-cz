import Image from 'next/image'

import icon128 from '../public/icons/icon-128x128.png'

const DividerLogo = () => {
  return (
    <div className="py-30">
      <div className="flex justify-center relative pb-1 pt-5">
        <span className="absolute block h-px bg-white bottom-1/2 left-0 right-0 bg-skills-line"></span>
        <div className="bg-white px-6 pb-3 pt-0 relative">
          <div className="flex justify-center items-center pb-5">
            <Image src={icon128} alt="krsiak.cz" width={128} height={128} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DividerLogo
