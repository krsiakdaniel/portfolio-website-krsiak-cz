import Heading from '@/components/shared/Heading'

import { CSS_GLOBAL_CLASSES } from '@/lib/utils/constants/cssGlobalClasses'

import { HeadingSectionProps } from '@/lib/utils/typeDefinitions/props/shared/heading-section'

const HeadingSection = ({
  text = '',
  icon = '',
  iconAria = '',
  id = '',
  dataTestId = '',
}: HeadingSectionProps) => {
  return (
    <Heading
      as="h2"
      id={id}
      textColor="text-neutral-600"
      dataTestId={dataTestId}
      customCss={`mt-20 border-b pb-2 font-medium uppercase flex items-center ${CSS_GLOBAL_CLASSES.HEADING_SECTION}`}
    >
      <span className="flex items-start space-x-2 md:items-center">
        {icon && (
          <span role="img" aria-label={iconAria} className="inline-flex text-4xl">
            {icon}
          </span>
        )}
        <span>{text}</span>
      </span>
    </Heading>
  )
}

export default HeadingSection
