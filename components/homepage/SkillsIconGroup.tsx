import { Icon } from '@/utils/interfaces'
import Image from 'next/image'

type SkillsIconGroupProps = {
  icons: Icon[]
  className?: string
}

const SkillsIconGroup = ({ icons, className = '' }: SkillsIconGroupProps) => (
  <div className={`flex justify-center space-x-2 ${className}`}>
    {icons.map((item) => (
      <Image key={item.name} src={item.path} alt={item.name} width={44} height={44} loading="eager" />
    ))}
  </div>
)

export default SkillsIconGroup
