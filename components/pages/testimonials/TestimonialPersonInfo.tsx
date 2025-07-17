import { FC } from 'react'

import ImageComponent from '@/components/shared/ImageComponent'

import ExternalLink from '@/components/shared/ExternalLink'
import { ImageLoading } from '@/lib/utils/typeDefinitions/enums'
import { TestimonialPersonInfoProps } from '@/lib/utils/typeDefinitions/props/pages/testimonials'
import { ARIA_LABELS, TEXT } from '@/localization/english'

// Import typography design tokens
import { TYPOGRAPHY_CLASSES } from '@/lib/design-tokens/typography'

const IMAGE_WIDTH = 48
const IMAGE_HEIGHT = 48

const TestimonialPersonInfo: FC<TestimonialPersonInfoProps> = ({
  photo,
  icon,
  name,
  job,
  company,
  link = '',
}): JSX.Element => (
  <>
    <ImageComponent
      src={photo}
      width={IMAGE_WIDTH}
      height={IMAGE_HEIGHT}
      alt={name}
      loading={ImageLoading.LAZY}
      customCss="rounded-full border border-violet-300 bg-violet-50 p-1 shadow-md"
      sizes={`${IMAGE_WIDTH}px`}
    />

    <div className="flex flex-col items-start">
      <div className="flex flex-col font-medium text-gray-900 sm:flex-row sm:items-center">
        <span>
          <span role="img" aria-label={ARIA_LABELS.quote} className="select-none">
            {icon}
          </span>{' '}
          {name}
        </span>
      </div>

      <div className={`flex flex-col items-start ${TYPOGRAPHY_CLASSES.small} font-normal text-gray-500 md:flex-row md:space-x-1`}>
        <span>{job}</span>
        <span className="hidden md:block">{' ~ '}</span>
        {link ? (
          <ExternalLink href={link} text={company} title={TEXT.opensInNewTab} />
        ) : (
          <span>{company}</span>
        )}
      </div>
    </div>
  </>
)

export default TestimonialPersonInfo
