import IconInfo from '@/components/icons/IconInfo'

import { alertTypeClasses } from '@/lib/data/shared/alertTypeClasses'
import { AlertTypeEnum } from '@/lib/utils/typeDefinitions/enums'
import { AlertProps } from '@/lib/utils/typeDefinitions/props/shared/alert'

const Alert = ({ type = AlertTypeEnum.Neutral, title, description, linkComponent }: AlertProps) => {
  return (
    <div role="alert" className={`mt-4 rounded-lg border p-4 ${alertTypeClasses[type]}`}>
      <div className="flex items-start md:items-center">
        <h3 className="flex items-center gap-2 text-lg font-medium" id="alert-title">
          <span className="mt-1 md:mt-0" aria-hidden="true">
            <IconInfo />
          </span>
          {title}
        </h3>
      </div>
      <div className="mt-2 mb-4 text-sm">{description}</div>
      <div className="sm:w-1/3">
        <div className="flex">{linkComponent}</div>
      </div>
    </div>
  )
}

export default Alert
