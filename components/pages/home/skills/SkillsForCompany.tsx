import { FC } from 'react'

import Heading2 from '@/components/shared/Heading2'

import { TEXT } from '@/localization/english'

import { skillsInfo } from '@/lib/data/pages/home/expertise/skillsInfo'

const SkillsForCompany: FC = (): JSX.Element => {
  return (
    <div className="lg:w-1/2">
      <Heading2>{TEXT.skillsForCompany}</Heading2>
      {skillsInfo.map((skill) => (
        <div className="mt-8" key={skill.id}>
          <p className="mt-4 text-lg text-neutral-600">
            <span className="font-bold">
              <span className="text-violet-600">{skill.order}.</span> {skill.title}
            </span>
          </p>
          <p className="mt-2 text-lg text-neutral-600">{skill.description}</p>
        </div>
      ))}
    </div>
  )
}

export default SkillsForCompany
