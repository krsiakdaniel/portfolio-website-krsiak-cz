import Heading2 from '@/components/shared/Heading2'

import { mindset } from '@/lib/data/pages/home/expertise/mindset'

const MyMindset = (): JSX.Element => {
  return (
    <div className="lg:w-1/2">
      <Heading2>🥇🚀 I Have Committed Mindset</Heading2>
      {mindset.map((skill) => (
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

export default MyMindset
