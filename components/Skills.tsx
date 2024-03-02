import DividerWithText from '@/components/shared/DividerWithText'
import { iconsSection1, iconsSection2, iconsSection3 } from '@/data/skills/main'
import Image from 'next/image'

const Skills = () => {
  return (
    <div id="skills" className="mt-20 px-5">
      <div className="container mx-auto px-5 max-w-screen-xl">
        <DividerWithText text="Skills" />
        <div className="flex flex-col sm:flex-row justify-center mt-5">
          <div className="flex justify-center mb-4 sm:mb-0">
            {iconsSection1.map((item) => {
              return <Image key={item.name} src={item.path} alt={item.name} className="mr-2" width={48} height={48} />
            })}
          </div>
          <div className="flex justify-center mb-4 sm:mb-0">
            {iconsSection2.map((item) => {
              return <Image key={item.name} src={item.path} alt={item.name} className="mr-2" width={48} height={48} />
            })}
          </div>
          <div className="flex justify-center">
            {iconsSection3.map((item) => {
              return <Image key={item.name} src={item.path} alt={item.name} className="mr-2" width={48} height={48} />
            })}
          </div>
        </div>
        <div>
          <p className="text-body-sm italic text-neutral-500 mt-4 text-center">
            HTML, CSS, Sass, Tailwind CSS, JavaScript, TypeScript, React, Next.js, Redux, Figma
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skills
