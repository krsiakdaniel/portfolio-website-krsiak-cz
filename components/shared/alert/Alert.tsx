import { Info } from 'lucide-react'

import { type AlertProps } from '@/components/shared/alert/Alert.types'

import { AlertColorVariantEnum } from '@/lib/types/enums'

import { alertTypeClasses } from './Alert.constants'

const Alert = ({
  type = AlertColorVariantEnum.Neutral,
  title,
  description,
  linkComponent,
}: AlertProps) => {
  return (
    <div role="alert" className={`mt-4 rounded-lg border p-4 ${alertTypeClasses[type]}`}>
      <div className="flex flex-col gap-2 text-sm md:flex-row md:items-center">
        <div className="flex items-start gap-2 lg:items-center">
          <span className="shrink-0 self-start lg:self-center" aria-hidden="true">
            <Info
              aria-hidden="true"
              className="h-4 w-4"
              fill="currentColor"
              stroke="white"
              strokeWidth={1.5}
            />
          </span>
          <div className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-2">
            <span className="font-semibold">{title}</span>
            <span>{description}</span>
          </div>
        </div>
        {linkComponent && <span className="md:ml-auto">{linkComponent}</span>}
      </div>
    </div>
  )
}

export default Alert
