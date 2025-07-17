import { FC } from 'react'

import IconInfo from '@/components/icons/IconInfo'

import { alertTypeClasses } from '@/lib/data/shared/alertTypeClasses'
import { AlertTypeEnum } from '@/lib/utils/typeDefinitions/enums'
import { AlertProps } from '@/lib/utils/typeDefinitions/props/shared/alert'

// Import typography design tokens
import { TYPOGRAPHY_CLASSES } from '@/lib/design-tokens/typography'

const Alert: FC<AlertProps> = ({
  type = AlertTypeEnum.Info,
  title,
  description,
  linkComponent,
}): JSX.Element => {
  return (
    <div role="alert" className={`mt-4 rounded-lg border p-4 ${alertTypeClasses[type]}`}>
      <div className="flex items-start md:items-center">
        <span className="mt-1 md:mt-0">
          <IconInfo />
        </span>
        <h3 className={`${TYPOGRAPHY_CLASSES.h4} font-medium`}>{title}</h3>
      </div>
      <div className={`${TYPOGRAPHY_CLASSES.small} mb-4 mt-2`}>{description}</div>
      <div className="sm:w-1/3">
        <div className="flex">{linkComponent}</div>
      </div>
    </div>
  )
}

export default Alert
