import { FC } from 'react'

import Heading2 from '@/components/shared/Heading2'

import { CSS_GLOBAL_CLASSES } from '@/lib/utils/constants/cssGlobalClasses'

import { HeadingSectionProps } from '@/lib/utils/typeDefinitions/props/shared/heading-section'

const HeadingSection: FC<HeadingSectionProps> = ({
  text,
  icon = '',
  id = '',
  dataTestId = '',
}): JSX.Element => {
  return (
    <Heading2
      id={id}
      textColor="text-neutral-600"
      data-testid={dataTestId}
      customCss={`mt-20 border-b pb-2 font-medium uppercase flex items-center ${CSS_GLOBAL_CLASSES.HEADING_SECTION}`}
    >
      <span>{text}</span>
      {icon && (
        <span role="img" className="ml-2 text-3xl">
          {icon}
        </span>
      )}
    </Heading2>
  )
}

export default HeadingSection
