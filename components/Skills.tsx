import PageContainer from '@/components/layout/PageContainer'
import DividerWithText from '@/components/shared/DividerWithText'
import { iconsSkills1, iconsSkills2, iconsSkills3 } from '@/data/skills/skills-main'
import { ID_SKILLS } from '@/utils/constants'
import Image from 'next/image'

const Skills = () => {
  return (
    <PageContainer id={ID_SKILLS}>
      <DividerWithText text="Skills" />
      <div className="mt-5 flex flex-col justify-center sm:flex-row">
        <div className="mb-4 flex justify-center sm:mb-0">
          {iconsSkills1.map((item) => {
            return <Image key={item.name} src={item.path} alt={item.name} className="mr-2" width={48} height={48} />
          })}
        </div>
        <div className="mb-4 flex justify-center sm:mb-0">
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
        <p className="text-body-sm mt-4 text-center italic text-neutral-500">
          HTML, CSS, Sass, Tailwind CSS, JavaScript, TypeScript, React, Next.js, Redux, Figma
        </p>
      </div>
    </PageContainer>
  )
}

export default Skills
