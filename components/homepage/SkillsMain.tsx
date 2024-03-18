import SkillsCard from '@/components/shared/SkillsCard'
import js from '@/public/icons/svg/skills/js.svg'
import react from '@/public/icons/svg/skills/react.svg'
import ts from '@/public/icons/svg/skills/ts.svg'
import { ID } from '@/utils/constants'
import { getYearsExperience } from '@/utils/getYearsExperience'

const SkillsSection1 = () => {
  return (
    <div className="mb-4 flex justify-center md:mb-8 md:items-center lg:mb-0 lg:mr-8">
      <SkillsCard
        imgSrc={js}
        imgAlt="JS"
        title="JavaScript"
        titleYears={`${getYearsExperience(2019)}`}
        description="Essential for creating modern interactive web applications."
      />
    </div>
  )
}

const SkillsSection2 = () => {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row lg:mr-0 lg:flex-col">
      <div className="mb-4 mr-0 md:mb-0 md:mr-8 lg:mb-8 lg:mr-0">
        <SkillsCard
          imgSrc={ts}
          imgAlt="TS"
          title="TypeScript"
          titleYears={`${getYearsExperience(2020)}`}
          description="Ensuring type safety, code reliability and scalability."
        />
      </div>
      <div>
        <SkillsCard
          imgSrc={react}
          imgAlt="React"
          title="React"
          titleYears={`${getYearsExperience(2020)}`}
          description="Great for components that are reusable and easy to maintain."
        />
      </div>
    </div>
  )
}

const SkillsMain = () => {
  return (
    <div id={ID.skillsMain} className="mt-20">
      <div className="mb-20 flex flex-col rounded-lg bg-green-100 px-10 py-10 lg:flex-row">
        <div className="mb-10 flex flex-col justify-center pt-10 text-center lg:mb-0 lg:w-1/2 lg:pl-5 lg:pr-10 lg:pt-0 lg:text-left">
          <h2 className="text-5xl font-bold uppercase">What I&nbsp;do</h2>
          <p className="text-lg font-normal text-neutral-600 lg:max-w-[550px]">
            I am passionate about creating high-quality products that meet the needs and expectations both of the client
            and the users.
          </p>
        </div>

        <SkillsSection1 />
        <SkillsSection2 />
      </div>
    </div>
  )
}

export default SkillsMain
