import { type ResumeFileTypeEnum } from '@/lib/types/enums'

export type ResumePreviewModalProps = {
  readonly isOpen: boolean
  readonly onClose: () => void
  readonly fileType: ResumeFileTypeEnum
  readonly href: string
  readonly title: string
}
