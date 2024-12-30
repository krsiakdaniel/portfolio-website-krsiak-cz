import MyMindset from '@/components/homepage/expertise/MyMindset'
import SkillsForCompany from '@/components/homepage/skills/SkillsForCompany'
import DividerWithText from '@/components/shared/DividerWithText'

const MySKills = (): JSX.Element => {
  return (
    <div className="mt-10">
      <DividerWithText text="What I Do" />
      <div className="mt-5 flex flex-col space-y-20 lg:flex-row lg:space-x-20 lg:space-y-0">
        <SkillsForCompany />
        <MyMindset />
      </div>
    </div>
  )
}

export default MySKills
