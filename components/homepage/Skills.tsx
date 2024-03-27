import DividerWithText from '@/components/shared/DividerWithText'
import { iconsSkills1, iconsSkills2, iconsSkills3, iconsSkills4 } from '@/data/skills/skills-main'
import { ID } from '@/utils/constants'
import Image from 'next/image'

interface Icon {
  name: string
  path: string
}

interface SkillsIconGroupProps {
  icons: Icon[]
  className?: string
}

// TODO: change layout similar, with photo on right and subheading and clean cards for all skills with descroption and years
const SkillsIconGroup = ({ icons, className = '' }: SkillsIconGroupProps) => (
  <div className={`flex justify-center space-x-2 ${className}`}>
    {icons.map((item) => (
      <Image key={item.name} src={item.path} alt={item.name} width={44} height={44} />
    ))}
  </div>
)

const Skills = () => {
  return (
    <div id={ID.skills} className="mt-20">
      <DividerWithText text="Skills" />
      <div className="mt-5 flex flex-col justify-center space-y-2 md:flex-row md:space-x-2 md:space-y-0">
        <SkillsIconGroup icons={iconsSkills1} />
        <SkillsIconGroup icons={iconsSkills2} />
        <SkillsIconGroup icons={iconsSkills3} />
        <SkillsIconGroup icons={iconsSkills4} />
      </div>
      <div>
        <p className="text-body-sm mt-4 text-center italic text-neutral-500">
          HTML, CSS, Sass, Tailwind CSS, JavaScript, TypeScript, React, Next.js, Redux, GraphQL, Jest, Playwright, Figma
        </p>
      </div>
    </div>
  )
}

export default Skills
