import ImageComponent from '@/components/shared/ImageComponent'

import ExternalLink from '@/components/shared/ExternalLink'
import { ImageLoading } from '@/lib/utils/typeDefinitions/enums'
import { TestimonialPersonInfoProps } from '@/lib/utils/typeDefinitions/props/pages/testimonials'
import { ARIA_LABELS, TEXT } from '@/localization/english'
import { TESTIMONIAL_PERSON_PHOTO } from './constants'

const TestimonialPersonInfo = ({
  photo,
  icon,
  name,
  job,
  company,
  link = '',
}: TestimonialPersonInfoProps) => (
  <>
    <ImageComponent
      src={photo}
      width={TESTIMONIAL_PERSON_PHOTO.WIDTH}
      height={TESTIMONIAL_PERSON_PHOTO.HEIGHT}
      alt={name}
      loading={ImageLoading.LAZY}
      customCss="rounded-full border border-violet-300 bg-violet-50 p-1 shadow-md"
      sizes={`${TESTIMONIAL_PERSON_PHOTO.WIDTH}px`}
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

      <div className="flex flex-col items-start text-sm font-normal text-gray-500 md:flex-row md:space-x-1">
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
