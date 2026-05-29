import { type ProjectBase } from '@/lib/types/interfaces'

export type ProjectSummaryCardProps = ProjectBase & {
  className: string
  dataTestId: string
  priority?: boolean
}
