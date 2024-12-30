import Image from 'next/image'

import { Icon } from '@/lib/utils/interfaces/interfaces'

type SkillsIconGroupProps = {
  icons: Icon[]
  className?: string
}

const SkillsIconGroup = ({ icons, className = '' }: SkillsIconGroupProps): JSX.Element => (
  <div className={`flex justify-center space-x-2 ${className}`}>
    {icons.map((item) => (
      <Image key={item.name} src={item.path} alt={item.name} width={44} height={44} loading="eager" />
    ))}
  </div>
)

export default SkillsIconGroup
