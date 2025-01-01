import MyMindset from '@/components/pages/home/expertise/MyMindset'
import SkillsForCompany from '@/components/pages/home/expertise/SkillsForCompany'
import DividerWithText from '@/components/shared/DividerWithText'

const SkillsForCompanyAndMyMindset = (): JSX.Element => {
  return (
    <div className="mt-16">
      <DividerWithText text="What I Bring To Project" />
      <div className="mt-5 flex flex-col space-y-20 lg:flex-row lg:space-x-20 lg:space-y-0">
        <SkillsForCompany />
        <MyMindset />
      </div>
    </div>
  )
}

export default SkillsForCompanyAndMyMindset
