import Heading2 from '@/components/shared/Heading2'

import { CSS_GLOBAL_CLASSES } from '@/lib/utils/constants/cssGlobalClasses'

import { HeadingSectionProps } from '@/lib/utils/typeDefinitions/props/shared/heading-section'
import { ARIA_LABELS } from '@/localization/english'

const HeadingSection = ({ text, icon = '', id = '', dataTestId = '' }: HeadingSectionProps) => {
  return (
    <Heading2
      id={id}
      textColor="text-neutral-600"
      data-testid={dataTestId}
      customCss={`mt-20 border-b pb-2 font-medium uppercase flex items-center ${CSS_GLOBAL_CLASSES.HEADING_SECTION}`}
    >
      <span className="flex items-start space-x-2 md:items-center">
        {icon && (
          <span role="img" aria-label={ARIA_LABELS.emoji.icon} className="inline-flex text-4xl">
            {icon}
          </span>
        )}
        <span>{text}</span>
      </span>
    </Heading2>
  )
}

export default HeadingSection
