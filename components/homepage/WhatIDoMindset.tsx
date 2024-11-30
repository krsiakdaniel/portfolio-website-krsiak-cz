import { YEARS } from '@/utils/constants'
import { SkillInfo } from '@/utils/interfaces'
import DividerWithText from '../shared/DividerWithText'
import Heading2 from '../shared/Heading2'

const skillsInfo: SkillInfo[] = [
  {
    id: 1,
    title: 'Passionate about JavaScript, TypeScript, and React',
    description: `I have ${YEARS.javascript} years of experience creating modern, interactive web applications, utilizing Tailwind CSS to deliver visually appealing and responsive designs.`,
  },
  {
    id: 2,
    title: 'Proficient in technologies',
    description:
      'I leverage React, Next.js, Redux, GraphQL, Jest, Playwright, and Figma to ensure code reliability and scalability, delivering high-quality solutions and products.',
  },
  {
    id: 3,
    title: 'Focus on type safety',
    description: `With ${YEARS.typescript} years of experience in TypeScript, I focus on code safety, and creating robust and scalable codebases. Less errors save both time and money.`,
  },
]

const mindsetInfo: SkillInfo[] = [
  {
    id: 1,
    title: 'Committed to continuous learning',
    description:
      'I continuously improve my technical skills and stay updated with trends by actively engaging in online communities and learning to enhance my knowledge and expertise.',
  },
  {
    id: 2,
    title: 'Collaborative by nature',
    description:
      'I enjoy working in teams where I can contribute ideas. My strong communication skills enable me to explain concepts effectively to stakeholders and team members.',
  },
  {
    id: 3,
    title: 'Delivering meaningful products to improve users lives',
    description:
      'I am passionate about solving real-world problems to help users and customers. Products that streamline processes, and increase value of a business.',
  },
]

const SkillsForCompany = () => {
  return (
    <div className="lg:w-1/2">
      <Heading2 textColor="text-violet-600">💰📈 My Skills For Your Company</Heading2>
      {skillsInfo.map((skill) => (
        <div className="mt-8" key={skill.id}>
          <p className="mt-4 text-lg text-neutral-600">
            <span className="font-bold">
              <span className="text-violet-600">{skill.id}.</span> {skill.title}
            </span>
          </p>
          <p className="mt-2 text-lg text-neutral-600">{skill.description}</p>
        </div>
      ))}
    </div>
  )
}

const MyMindset = () => {
  return (
    <div className="lg:w-1/2">
      <Heading2 textColor="text-violet-600">🥇🚀 I Have Committed Mindset</Heading2>
      {mindsetInfo.map((mindset) => (
        <div className="mt-8" key={mindset.id}>
          <p className="mt-4 text-lg text-neutral-600">
            <span className="font-bold">
              <span className="text-violet-600">{mindset.id}.</span> {mindset.title}
            </span>
          </p>
          <p className="mt-2 text-lg text-neutral-600">{mindset.description}</p>
        </div>
      ))}
    </div>
  )
}

const WhatIDoMindset = () => {
  return (
    <div className="mt-20">
      <DividerWithText text="What I Do" />
      <div className="mb-20 mt-5 flex flex-col space-y-20 lg:flex-row lg:space-x-20 lg:space-y-0">
        <SkillsForCompany />
        <MyMindset />
      </div>
    </div>
  )
}

export default WhatIDoMindset
