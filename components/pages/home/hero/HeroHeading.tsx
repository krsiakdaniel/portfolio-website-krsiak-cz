import { FC } from 'react'

import Heading1 from '@/components/shared/Heading1'

import { TEXT } from '@/localization/english'

const HeroHeading: FC = (): JSX.Element => {
  return (
    <Heading1 dataTestId="hero-heading" textColor="text-neutral-900" customCss="flex flex-col text-center">
      <span>{TEXT.nameDanielKrsiak}</span>
      <small className="mt-2">
        <span className="text-violet-600">{TEXT.reactDeveloperTypeScript}</span>
      </small>
    </Heading1>
  )
}

export default HeroHeading
