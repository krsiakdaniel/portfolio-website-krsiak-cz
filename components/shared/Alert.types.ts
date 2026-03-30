import { ReactNode } from 'react'

import { AlertTypeEnum } from '@/lib/types/enums'

export type AlertProps = {
  type?: AlertTypeEnum
  title?: string
  description: ReactNode
  linkComponent?: ReactNode
}
