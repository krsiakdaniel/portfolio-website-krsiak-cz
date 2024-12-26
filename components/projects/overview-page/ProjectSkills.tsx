import Image from 'next/image'

import { Icon } from '@/lib/utils/interfaces/interfaces'

type ProjectSkillsProps = {
  mySkillsIcons: Icon[]
}

const ProjectSkills = ({ mySkillsIcons }: ProjectSkillsProps) => (
  <div className="mb-6 flex flex-wrap">
    {mySkillsIcons.map((item) => (
      <Image key={item.name} src={item.path} alt={item.name} className="mb-2 mr-2 lg:mb-0" width={32} height={32} />
    ))}
  </div>
)

export default ProjectSkills
