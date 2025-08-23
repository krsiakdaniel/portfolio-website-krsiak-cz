import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { EXTERNAL_URL } from '@/lib/utils/constants/urls/externalUrls'

import { ResumePreviewCard } from '@/lib/utils/typeDefinitions/interfaces'

import previewDOCX from '@/public/images/webp/resume/preview-docx.webp'
import previewPDF from '@/public/images/webp/resume/preview-pdf.webp'

export const resumePreviewCardData: ResumePreviewCard[] = [
  {
    title: TEXT.versionPDF,
    description: TEXT.descriptionPDF,
    highlight: TEXT.descriptionHighlightPDF,
    href: EXTERNAL_URL.resumeViewPDF,
    imageSrc: previewPDF,
    imageAlt: TEXT.altPreviewPDF,
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
    imageAlt: TEXT.altPreviewDOCX,
    buttonText: TEXT.downloadResumeShortDOCX,
    dataTestId: {
      image: DATA_TEST_IDS.resume.linkImageResumeDownloadDOCX,
      button: DATA_TEST_IDS.resume.linkButtonResumeDownloadDOCX,
    },
  },
]
