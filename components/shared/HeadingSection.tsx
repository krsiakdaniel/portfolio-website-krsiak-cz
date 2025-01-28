import { FC } from 'react'

import Heading3 from '@/components/shared/Heading3'

import { CSS_GLOBAL_CLASSES } from '@/lib/utils/constants/cssGlobalClasses'

import { HeadingSectionProps } from '@/lib/utils/typeDefinitions/props/shared/heading-section'

const HeadingSection: FC<HeadingSectionProps> = ({ text = '', id = '', dataTestId = '' }) => {
  return (
    <Heading3
      id={id}
      textColor="text-neutral-600"
      data-testid={dataTestId}
      customCss={`mt-20 border-b pb-2 font-medium uppercase ${CSS_GLOBAL_CLASSES.HEADING_SECTION}`}
    >
      {text}
    </Heading3>
  )
}

export default HeadingSection
