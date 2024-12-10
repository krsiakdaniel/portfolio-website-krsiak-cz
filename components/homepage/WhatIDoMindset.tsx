import DividerWithText from '../shared/DividerWithText'
import MyMindset from './MyMindset'
import SkillsForCompany from './SkillsForCompany'

const WhatIDoMindset = () => {
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

export default WhatIDoMindset
