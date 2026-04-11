import { type ReactNode } from 'react'

import { type AlertColorVariantEnum } from '@/lib/types/enums'

export type AlertProps = {
  type?: AlertColorVariantEnum
  title?: string
  description: ReactNode
  linkComponent?: ReactNode
}
