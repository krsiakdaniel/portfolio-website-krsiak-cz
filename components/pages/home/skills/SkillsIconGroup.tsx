import Image from 'next/image'
import { FC } from 'react'

import { Icon } from '@/lib/utils/interfaces/interfaces'

type SkillsIconGroupProps = {
  icons: Icon[]
  className?: string
}

const SkillsIconGroup: FC<SkillsIconGroupProps> = ({ icons, className = '' }): JSX.Element => (
  <div className={`flex justify-center space-x-2 ${className}`}>
    {icons.map((item) => (
      <Image key={item.name} src={item.path} width={44} height={44} alt={item.name} loading="eager" />
    ))}
  </div>
)

export default SkillsIconGroup
