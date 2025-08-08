import { FC } from 'react'

import IconInfo from '@/components/icons/IconInfo'

import { AlertTypeEnum } from '@/lib/utils/typeDefinitions/enums'
import { AlertProps } from '@/lib/utils/typeDefinitions/props/shared/alert'

const Alert: FC<AlertProps> = ({
  type = AlertTypeEnum.Info,
  title,
  description,
  linkComponent,
}): JSX.Element => {
  return (
    <div role="alert" className={`alert ${type} mt-4`}>
      <IconInfo />
      <div>
        <h3 className="font-bold">{title}</h3>
        <div className="text-xs">{description}</div>
      </div>
      {linkComponent}
    </div>
  )
}

export default Alert
