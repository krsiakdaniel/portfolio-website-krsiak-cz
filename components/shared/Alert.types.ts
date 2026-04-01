import { ReactNode } from 'react'

import { AlertColorVariantEnum } from '@/lib/types/enums'

export type AlertProps = {
  type?: AlertColorVariantEnum
  title?: string
  description: ReactNode
  linkComponent?: ReactNode
}
