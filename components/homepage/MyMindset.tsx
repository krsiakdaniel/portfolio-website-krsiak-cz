import Heading2 from '@/components/shared/Heading2'
import { mindsetInfo } from '@/data/whatido/mindsetInfo'

const MyMindset = () => {
  return (
    <div className="lg:w-1/2">
      <Heading2>🥇🚀 I Have Committed Mindset</Heading2>
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

export default MyMindset
