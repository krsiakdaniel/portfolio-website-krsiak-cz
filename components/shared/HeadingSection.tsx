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
      <span className="flex items-start space-x-2 md:items-center">
        {icon && (
          <span role="img" className="inline-flex text-4xl">
            {icon}
          </span>
        )}
        <span>{text}</span>
      </span>
    </Heading2>
  )
}

export default HeadingSection
