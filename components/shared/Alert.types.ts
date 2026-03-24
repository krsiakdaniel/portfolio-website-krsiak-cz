import { ReactNode } from 'react'

import { AlertTypeEnum } from '@/lib/utils/typeDefinitions/enums'

export type AlertProps = {
  type?: AlertTypeEnum
  title: string
  description: string
  linkComponent: ReactNode
}
