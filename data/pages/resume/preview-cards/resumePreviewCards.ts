import { DOWNLOAD_URL } from '@/lib/utils/constants/urls/downloadUrls'

import { TEXT } from '@/localization'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { ResumeFileTypeEnum } from '@/lib/types/enums'
import { type ResumePreviewCard } from '@/lib/types/interfaces'

export const resumePreviewCardData: ResumePreviewCard[] = [
  {
    title: TEXT.versionPDF,
    description: TEXT.descriptionPDF,
    highlight: TEXT.descriptionHighlightPDF,
    href: DOWNLOAD_URL.resumePDF,
    fileType: ResumeFileTypeEnum.PDF,
    buttonText: TEXT.downloadResumeShortPDF,
    dataTestId: {
      image: DATA_TEST_IDS.resume.linkImageResumeDownloadPDF,
      button: DATA_TEST_IDS.resume.stripButtonResumeDownloadPDF,
    },
  },
  {
    title: TEXT.versionDOCX,
    description: TEXT.descriptionDOCX,
    highlight: TEXT.descriptionHighlightDOCX,
    href: DOWNLOAD_URL.resumeDOCX,
    fileType: ResumeFileTypeEnum.DOCX,
    buttonText: TEXT.downloadResumeShortDOCX,
    dataTestId: {
      image: DATA_TEST_IDS.resume.linkImageResumeDownloadDOCX,
      button: DATA_TEST_IDS.resume.stripButtonResumeDownloadDOCX,
    },
  },
]
