import Heading1 from '@/components/shared/Heading1'

import { TEXT } from '@/localization/english'

const HeroHeading = () => {
  return (
    <>
      <Heading1 dataTestId="hero-heading" textColor="text-neutral-900" customCss="flex flex-col text-center">
        <span>{TEXT.nameDanielKrsiak}</span>
        <span className="mt-2 text-violet-600">{TEXT.reactDeveloper}</span>
      </Heading1>
    </>
  )
}

export default HeroHeading
