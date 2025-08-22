import Link from 'next/link'

import ImageComponent from '@/components/shared/ImageComponent'
import LinkButton from '@/components/shared/LinkButton'

import { ImageLoading } from '@/lib/utils/typeDefinitions/enums'

import { RESUME_PREVIEW } from './constants'
import { ResumePreviewCardProps } from './types'

const ResumePreviewCard = ({
  title,
  description,
  href,
  imageSrc,
  imageAlt,
  buttonText,
  dataTestId,
}: ResumePreviewCardProps) => {
  return (
    <div className="group rounded-lg border border-violet-300 bg-blue-50 p-6 transition duration-300 hover:border-violet-600">
      <div className="mb-4 text-center">
        <h3 className="mb-2 text-lg font-semibold text-violet-700">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block transition-transform duration-200 hover:scale-[1.01]"
      >
        <div className="relative overflow-hidden rounded-md border-2 border-gray-200 hover:border-violet-400">
          <ImageComponent
            src={imageSrc}
            alt={imageAlt}
            width={RESUME_PREVIEW.IMAGE.WIDTH}
            height={RESUME_PREVIEW.IMAGE.HEIGHT}
            customCss="h-auto w-full"
            loading={ImageLoading.EAGER}
            priority={true}
          />
        </div>
      </Link>

      <div className="mt-4 flex justify-center">
        <LinkButton
          href={href}
          linkText={buttonText}
          isLinkExternal={true}
          dataTestId={dataTestId}
        />
      </div>
    </div>
  )
}

export default ResumePreviewCard
