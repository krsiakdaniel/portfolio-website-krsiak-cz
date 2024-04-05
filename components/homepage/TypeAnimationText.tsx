'use client' // need for the react-type-animation package

import { TypeAnimation } from 'react-type-animation'

const TypeAnimationText = () => {
  return (
    <TypeAnimation
      sequence={['React Developer', 2000, 'QA Automation', 1500]}
      wrapper="span"
      preRenderFirstString={true}
      cursor={true}
      repeat={Infinity}
      className="mt-2 inline-block min-h-[96px] text-violet-600 sm:min-h-[60px] lg:min-h-[72px]"
    />
  )
}

export default TypeAnimationText
