import Image from 'next/image'
import { FC } from 'react'

import { SkillsIconGroupProps } from '@/lib/utils/typeDefinitions/props/pages/home/skills'

const IMAGE_WIDTH = 44
const IMAGE_HEIGHT = 44

const SkillsIconGroup: FC<SkillsIconGroupProps> = ({ icons, className = '' }): JSX.Element => {
  return (
    <div className={`flex justify-center space-x-2 ${className}`}>
      {icons.map((item) => (
        <Image
          key={item.name}
          src={item.path}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          alt={item.name}
          loading="eager"
        />
      ))}
    </div>
  )
}

export default SkillsIconGroup
