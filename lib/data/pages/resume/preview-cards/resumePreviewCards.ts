import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { EXTERNAL_URL } from '@/lib/utils/constants/urls/externalUrls'

import { ResumePreviewCard } from '@/lib/utils/typeDefinitions/interfaces'

import previewPDF from '@/public/images/webp/resume/preview-pdf.webp'
import previewTXT from '@/public/images/webp/resume/preview-txt.webp'

export const resumePreviewCardData: ResumePreviewCard[] = [
  {
    title: TEXT.versionPDF,
    description: TEXT.descriptionPDF,
    highlight: TEXT.descriptionHighlightPDF,
    href: EXTERNAL_URL.resumeViewPDF,
    imageSrc: previewPDF,
    imageAlt: TEXT.altPreviewPDF,
    buttonText: TEXT.downloadResumeShortPDF,
    dataTestId: DATA_TEST_IDS.callToAction.linkResumeDownloadPDF,
  },
  {
    title: TEXT.versionTXT,
    description: TEXT.descriptionTXT,
    highlight: TEXT.descriptionHighlightTXT,
    href: EXTERNAL_URL.resumeViewTXT,
    imageSrc: previewTXT,
    imageAlt: TEXT.altPreviewTXT,
    buttonText: TEXT.downloadResumeShortTXT,
    dataTestId: DATA_TEST_IDS.callToAction.linkResumeDownloadTXT,
  },
]
