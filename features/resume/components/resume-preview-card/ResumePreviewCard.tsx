'use client'

import { useState } from 'react'

import { Download } from 'lucide-react'
import { toast } from 'sonner'

import HeadingSection from '@/components/shared/heading/HeadingSection'
import Highlight from '@/components/shared/highlight/Highlight'
import Paragraph from '@/components/shared/paragraph/Paragraph'

import { ARIA_LABELS } from '@/localization'

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
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = () => {
    setIsDownloading(true)
    setTimeout(() => {
      setIsDownloading(false)
      toast.success(`Downloaded ${fileType} resume`)
    }, 1000)
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
          className="group block overflow-hidden rounded-lg border border-violet-600 transition-colors duration-300"
          onClick={handleDownload}
        >
          <div className="flex flex-col items-center justify-center gap-6 bg-violet-50 py-16 transition-colors duration-300 group-hover:bg-violet-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-24 w-24 text-violet-400 transition-transform duration-300 group-hover:scale-110 group-hover:text-violet-500"
              aria-hidden="true"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <line x1="16" y1="9" x2="8" y2="9" />
            </svg>
          </div>
          <div
            className="bg-violet-600 py-3 text-center text-sm font-semibold text-white transition-colors duration-300 group-hover:bg-violet-700"
            data-testid={dataTestId.button}
          >
            <span className="flex items-center justify-center gap-2">
              {isDownloading ? 'Downloading...' : buttonText}
              <Download aria-hidden="true" className="h-3 w-3" />
            </span>
          </div>
        </a>
      </div>
    </div>
  )
}

export default ResumePreviewCard
