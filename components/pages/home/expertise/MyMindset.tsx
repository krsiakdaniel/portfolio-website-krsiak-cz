import Heading2 from '@/components/shared/Heading2'

import { mindset } from '@/lib/data/pages/home/mindset'

import { TEXT } from '@/localization/english'

const MyMindset = (): JSX.Element => {
  return (
    <div className="lg:w-1/2">
      <Heading2>{TEXT.mindset}</Heading2>
      {mindset.map((mind) => (
        <div className="mt-8" key={mind.id}>
          <p className="mt-4 text-lg text-neutral-600">
            <span className="font-bold">
              <span className="text-violet-600">{mind.order}.</span> {mind.title}
            </span>
          </p>
          <p className="mt-2 text-lg text-neutral-600">{mind.description}</p>
        </div>
      ))}
    </div>
  )
}

export default MyMindset
