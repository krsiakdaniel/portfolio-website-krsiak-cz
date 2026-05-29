import { type DownloadUrls } from '@/lib/types/interfaces'

export const DOWNLOAD_URL: DownloadUrls = {
  resumePDF: '/downloads/resume-daniel-krsiak.pdf',
  resumeDOCX: '/downloads/resume-daniel-krsiak.docx',
} as const satisfies DownloadUrls
