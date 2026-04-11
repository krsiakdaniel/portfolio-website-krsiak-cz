import { EXTERNAL_URL } from '@/lib/utils/constants/urls/externalUrls'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import previewDOCX from '@/public/images/webp/resume/preview-page-docx.webp'
import previewPDF from '@/public/images/webp/resume/preview-page-pdf.webp'

import { ResumePreviewCard } from '@/lib/types/interfaces'
import { IMAGE_ALT, TEXT } from '@/localization'

export const resumePreviewCardData: ResumePreviewCard[] = [
  {
    title: TEXT.versionPDF,
    description: TEXT.descriptionPDF,
    highlight: TEXT.descriptionHighlightPDF,
    href: EXTERNAL_URL.resumeViewPDF,
    imageSrc: previewPDF,
    imageAlt: IMAGE_ALT.resumePreviewPDF,
    buttonText: TEXT.downloadResumeShortPDF,
    dataTestId: {
      image: DATA_TEST_IDS.resume.linkImageResumeDownloadPDF,
      button: DATA_TEST_IDS.resume.linkButtonResumeDownloadPDF,
    },
  },
  {
    title: TEXT.versionDOCX,
    description: TEXT.descriptionDOCX,
    highlight: TEXT.descriptionHighlightDOCX,
    href: EXTERNAL_URL.resumeViewDOCX,
    imageSrc: previewDOCX,
    imageAlt: IMAGE_ALT.resumePreviewDOCX,
    buttonText: TEXT.downloadResumeShortDOCX,
    dataTestId: {
      image: DATA_TEST_IDS.resume.linkImageResumeDownloadDOCX,
      button: DATA_TEST_IDS.resume.linkButtonResumeDownloadDOCX,
    },
  },
]
