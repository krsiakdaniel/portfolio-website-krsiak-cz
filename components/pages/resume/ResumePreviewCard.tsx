import Link from 'next/link'

import ImageComponent from '@/components/shared/ImageComponent'
import LinkButton from '@/components/shared/LinkButton'
import Paragraph from '@/components/shared/Paragraph'

import { ImageLoading } from '@/lib/utils/typeDefinitions/enums'

import HeadingSection from '@/components/shared/HeadingSection'
import Highlight from '@/components/shared/Highlight'
import { ResumePreviewCardProps } from '@/lib/utils/typeDefinitions/props/pages/resume/resume'
import { RESUME_PREVIEW_IMAGE } from './constants'

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
          className="block transition-transform duration-200 hover:scale-[1.01]"
          data-testid={dataTestId.image}
        >
          <div className="bg-white">
            <ImageComponent
              src={imageSrc}
              alt={imageAlt}
              width={RESUME_PREVIEW_IMAGE.WIDTH}
              height={RESUME_PREVIEW_IMAGE.HEIGHT}
              customCss="rounded-lg border border-violet-300 bg-violet-50 p-1 shadow-md hover:border-violet-600"
              loading={ImageLoading.EAGER}
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
