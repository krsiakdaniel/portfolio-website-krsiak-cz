import { FC } from 'react'

import Heading3 from '@/components/shared/Heading3'

import { GLOBAL_CSS_CLASS } from '@/lib/utils/constants/global-css-classes'

import { HeadingSectionProps } from '@/lib/utils/typeDefinitions/props/shared/heading-section'

const HeadingSection: FC<HeadingSectionProps> = ({ text = '', id = '', dataTestId = '' }) => {
  return (
    <Heading3
      id={id}
      textColor="text-neutral-600"
      data-testid={dataTestId}
      customCss={`mt-20 border-b pb-2 text-xl font-bold uppercase ${GLOBAL_CSS_CLASS.HEADING_SECTION}`}
    >
      {text}
    </Heading3>
  )
}

export default HeadingSection
