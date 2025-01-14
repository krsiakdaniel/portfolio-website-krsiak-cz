import { FC } from 'react'

import Heading2 from '@/components/shared/Heading2'
import Paragraph from '@/components/shared/Paragraph'

import { TEXT } from '@/localization/english'

import { skillsInfo } from '@/lib/data/pages/home/expertise/skillsInfo'

const SkillsForCompany: FC = (): JSX.Element => {
  return (
    <div className="lg:w-1/2">
      <Heading2>{TEXT.skillsForCompany}</Heading2>
      {skillsInfo.map((skill) => (
        <div className="mt-8" key={skill.id}>
          <Paragraph>
            <span className="font-bold">
              <span className="text-violet-600">{skill.order}.</span> {skill.title}
            </span>
          </Paragraph>
          <Paragraph marginTop="mt-2">{skill.description}</Paragraph>
        </div>
      ))}
    </div>
  )
}

export default SkillsForCompany
