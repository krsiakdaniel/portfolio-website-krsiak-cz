import PageContainer from '@/components/layout/PageContainer'
import DividerWithText from '@/components/shared/DividerWithText'
import { iconsSkills1, iconsSkills2, iconsSkills3 } from '@/data/skills/skills-main'
import { ID_SKILLS } from '@/utils/constants'
import Image from 'next/image'

interface Icon {
  name: string
  path: string
}

interface SkillsIconGroupProps {
  icons: Icon[]
  className?: string
}

const SkillsIconGroup = ({ icons, className = '' }: SkillsIconGroupProps) => (
  <div className={`flex justify-center ${className}`}>
    {icons.map((item) => (
      <Image key={item.name} src={item.path} alt={item.name} className="mr-2" width={48} height={48} />
    ))}
  </div>
)

const Skills = () => {
  return (
    <PageContainer id={ID_SKILLS}>
      <DividerWithText text="Skills" />
      <div className="mt-5 flex flex-col justify-center md:flex-row">
        <SkillsIconGroup icons={iconsSkills1} className="mb-4 md:mb-0" />
        <SkillsIconGroup icons={iconsSkills2} className="mb-4 md:mb-0" />
        <SkillsIconGroup icons={iconsSkills3} />
      </div>
      <div>
        <p className="text-body-sm mt-4 text-center italic text-neutral-500">
          HTML, CSS, Sass, Tailwind CSS, JavaScript, TypeScript, React, Next.js, Redux, Jest, Playwright, Figma
        </p>
      </div>
    </PageContainer>
  )
}

export default Skills
