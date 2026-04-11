import Link from 'next/link'

import HeadingSection from '@/components/shared/heading/HeadingSection'
import Highlight from '@/components/shared/highlight/Highlight'
import ImageComponent from '@/components/shared/image-component/ImageComponent'
import LinkButton from '@/components/shared/link-button/LinkButton'
import Paragraph from '@/components/shared/paragraph/Paragraph'

import { ImageLoadingEnum } from '@/lib/types/enums'
import { ARIA_LABELS, TEXT } from '@/localization'

import { RESUME_PREVIEW_IMAGE } from './ResumePreviewCard.constants'
import { ResumePreviewCardProps } from './ResumePreviewCard.types'

const ResumePreviewCard = ({
  title,
  description,
  highlight,
  href,
  imageSrc,
  imageAlt,
  buttonText,
  dataTestId,
}: ResumePreviewCardProps) => {
  return (
    <div>
      <HeadingSection text={title} />
      <Paragraph>
        <Highlight text={highlight} /> {description}
      </Paragraph>

      <div className="mt-4">
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          data-testid={dataTestId.image}
          aria-label={`${ARIA_LABELS.resumePreview} — ${imageAlt} (${TEXT.opensInNewTab})`}
        >
          <div className="bg-white">
            <ImageComponent
              src={imageSrc}
              alt={imageAlt}
              width={RESUME_PREVIEW_IMAGE.WIDTH}
              height={RESUME_PREVIEW_IMAGE.HEIGHT}
              customCss="rounded-lg border border-violet-300 bg-violet-50 p-1 transition-all duration-300 ease-in-out hover:border-violet-500 hover:scale-101"
              loading={ImageLoadingEnum.EAGER}
              priority={true}
            />
          </div>
        </Link>

        <div className="justify-left mt-4">
          <LinkButton
            href={href}
            linkText={buttonText}
            isLinkExternal={true}
            dataTestId={dataTestId.button}
          />
        </div>
      </div>
    </div>
  )
}

export default ResumePreviewCard
