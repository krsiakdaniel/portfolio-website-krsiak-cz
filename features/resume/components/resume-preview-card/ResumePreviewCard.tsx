'use client'

import { useState } from 'react'

import { Download, Eye, FileText } from 'lucide-react'
import { toast } from 'sonner'

import HeadingSection from '@/components/shared/heading/HeadingSection'
import Highlight from '@/components/shared/highlight/Highlight'
import Paragraph from '@/components/shared/paragraph/Paragraph'

import { ARIA_LABELS, RESUME } from '@/localization'

import { ResumeFileTypeEnum } from '@/lib/types/enums'

import ResumePreviewModal from '../resume-preview-modal/ResumePreviewModal'
import { type ResumePreviewCardProps } from './ResumePreviewCard.types'

const ResumePreviewCard = ({
  title,
  description,
  highlight,
  href,
  fileType,
  buttonText,
  dataTestId,
}: ResumePreviewCardProps) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  const handleDownload = () => {
    const toastText =
      fileType === ResumeFileTypeEnum.PDF ? RESUME.startingDownloadPDF : RESUME.startingDownloadDOCX
    toast.info(toastText)
  }

  return (
    <div>
      <HeadingSection text={title} />
      <Paragraph>
        <Highlight text={highlight} /> {description}
      </Paragraph>

      <div className="mt-4">
        <a
          href={href}
          download
          data-testid={dataTestId.image}
          aria-label={`${ARIA_LABELS.resumePreview} — ${fileType}`}
          className="group block overflow-hidden rounded-lg border border-violet-600 transition-colors duration-300 focus:outline-hidden focus:ring-4 focus:ring-violet-400"
          onClick={handleDownload}
        >
          <div className="flex flex-col items-center justify-center gap-6 bg-violet-50 py-16 transition-colors duration-300 group-hover:bg-violet-100">
            <FileText
              strokeWidth={1}
              className="h-24 w-24 text-violet-400 transition-transform duration-300 group-hover:scale-110 group-hover:text-violet-500"
              aria-hidden="true"
            />
          </div>
          <div
            className="bg-violet-600 py-3 text-center text-sm font-semibold text-white transition-colors duration-300 group-hover:bg-violet-700"
            data-testid={dataTestId.button}
          >
            <span className="flex items-center justify-center gap-2">
              <Download aria-hidden="true" className="h-3 w-3" />
              {buttonText}
            </span>
          </div>
        </a>
      </div>

      <button
        onClick={() => setIsPreviewOpen(true)}
        data-testid={dataTestId.preview}
        className="mt-3 flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-violet-600 px-4 text-sm font-medium text-violet-600 transition-colors hover:border-violet-700 hover:bg-violet-50 hover:text-violet-700 active:bg-violet-100 focus:outline-hidden focus:ring-4 focus:ring-violet-400 sm:min-h-9"
      >
        <Eye aria-hidden="true" className="h-4 w-4" />
        Preview document
      </button>

      <ResumePreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        fileType={fileType}
        href={href}
        title={`Resume - ${title}`}
      />
    </div>
  )
}

export default ResumePreviewCard
