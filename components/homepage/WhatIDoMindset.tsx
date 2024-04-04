import DividerWithText from '../shared/DividerWithText'
import Heading2 from '../shared/Heading2'

const SkillsForCompany = () => {
  return (
    <div className="w-full lg:w-1/2">
      <Heading2 textColor="text-violet-600">💰📈 My Skills For Your Company</Heading2>
      <p className="mt-4 text-lg text-neutral-600">
        <span className="font-bold">
          <span className="text-violet-600">1.</span> Passionate about JavaScript, TypeScript, and React
        </span>
        , I bring to each project 5+ years of experience in crafting modern interactive web applications. I excel at
        using HTML, CSS, Sass, and Tailwind CSS, ensuring visually appealing and responsive designs.
      </p>
      <p className="mt-4 text-lg text-neutral-600">
        <span className="font-bold">
          <span className="text-violet-600">2.</span> Proficient in technologies
        </span>{' '}
        like Next.js, Redux, GraphQL, Jest, Playwright, and Figma, I prioritize code reliability and scalability to
        deliver high-quality solutions.
      </p>
      <p className="mt-4 text-lg text-neutral-600">
        <span className="font-bold">
          <span className="text-violet-600">3.</span> I focus on type safety
        </span>
        , with 4+ years of experience in TypeScript, I emphasize on code safety and creating robust codebases.
      </p>
      <p className="mt-4 text-lg text-neutral-600">
        <span className="font-bold">
          <span className="text-violet-600">4.</span> I am predictable and organized
        </span>
        , I have 2+ years of experience in Redux managing application state in a consistent manner.
      </p>
    </div>
  )
}

const MyMindset = () => {
  return (
    <div className="w-full lg:w-1/2">
      <Heading2 textColor="text-violet-600">🥇🚀 I Have Committed Mindset</Heading2>
      <p className="mt-4 text-lg text-neutral-600">
        <span className="font-bold">
          <span className="text-violet-600">1.</span> Committed to continuous learning
        </span>
        , improving my technical skills and staying updated with industry trends. I actively participate in online
        communities and attend relevant workshops and learn to enhance my knowledge and expertise.
      </p>
      <p className="mt-4 text-lg text-neutral-600">
        <span className="font-bold">
          <span className="text-violet-600">2.</span> Collaborative by nature
        </span>
        , I like teams where I can contribute my ideas. My strong communication skills allow me explain concepts to
        stakeholders and team members.
      </p>
      <p className="mt-4 text-lg text-neutral-600">
        <span className="font-bold">
          <span className="text-violet-600">3.</span> Exploring new technologies
        </span>
        , learning from other projects, and mentoring junior developers.
      </p>
      <p className="mt-4 text-lg text-neutral-600">
        <span className="font-bold">
          <span className="text-violet-600">4.</span> Delivering meaningful products to improve users lives
        </span>
        , I am passionate about technologies solving real-world problems.
      </p>
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
