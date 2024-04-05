import DividerWithText from '../shared/DividerWithText'
import Heading2 from '../shared/Heading2'

export interface InfoItem {
  id: number
  title: string
  description: string
}

const skillsInfo: InfoItem[] = [
  {
    id: 1,
    title: 'Passionate about JavaScript, TypeScript, and React',
    description:
      'I bring 5+ years of experience in crafting modern interactive web applications. I use Tailwind CSS, ensuring visually appealing and\u00A0responsive designs.',
  },
  {
    id: 2,
    title: 'Proficient in technologies',
    description:
      'Using Next.js, Redux, GraphQL, Jest, Playwright, and Figma, I\u00A0prioritize code reliability and scalability to deliver high-quality solutions and products.',
  },
  {
    id: 3,
    title: 'Focus on type safety',
    description:
      'With 4+ years of experience in TypeScript, I\u00A0emphasize on code safety and creating robust codebases.',
  },
]

const mindsetInfo: InfoItem[] = [
  {
    id: 1,
    title: 'Committed to continuous learning',
    description:
      'Improving my technical skills and staying updated with trends. I\u00A0actively participate in online communities and learn to enhance my\u00A0knowledge and expertise.',
  },
  {
    id: 2,
    title: 'Collaborative by nature',
    description:
      'I like teams where I can contribute my ideas. My strong communication skills allow me explain concepts to stakeholders and\u00A0team members.',
  },
  {
    id: 3,
    title: 'Delivering meaningful products to improve users lives',
    description: 'I am passionate about technologies solving real-world problems, helping customers and users.',
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
