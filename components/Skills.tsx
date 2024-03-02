import PageContainer from '@/components/layout/PageContainer'
import DividerWithText from '@/components/shared/DividerWithText'
import { iconsSkills1, iconsSkills2, iconsSkills3 } from '@/data/skills/skills-main'
import { ID_SKILLS } from '@/utils/constants'
import Image from 'next/image'

const Skills = () => {
  return (
    <PageContainer id={ID_SKILLS}>
      <DividerWithText text="Skills" />
      <div className="flex flex-col sm:flex-row justify-center mt-5">
        <div className="flex justify-center mb-4 sm:mb-0">
          {iconsSkills1.map((item) => {
            return <Image key={item.name} src={item.path} alt={item.name} className="mr-2" width={48} height={48} />
          })}
        </div>
        <div className="flex justify-center mb-4 sm:mb-0">
          {iconsSkills2.map((item) => {
            return <Image key={item.name} src={item.path} alt={item.name} className="mr-2" width={48} height={48} />
          })}
        </div>
        <div className="flex justify-center">
          {iconsSkills3.map((item) => {
            return <Image key={item.name} src={item.path} alt={item.name} className="mr-2" width={48} height={48} />
          })}
        </div>
      </div>
      <div>
        <p className="text-body-sm italic text-neutral-500 mt-4 text-center">
          HTML, CSS, Sass, Tailwind CSS, JavaScript, TypeScript, React, Next.js, Redux, Figma
        </p>
      </div>
    </PageContainer>
  )
}

export default Skills
