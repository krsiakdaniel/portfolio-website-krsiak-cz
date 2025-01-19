import Image from 'next/image'
import { FC } from 'react'

import { TestimonialPersonInfoProps } from '@/lib/utils/typeDefinitions/props/pages/testimonials'

const TestimonialPersonInfo: FC<TestimonialPersonInfoProps> = ({ name, job, photo }) => {
  return (
    <>
      <Image
        src={photo}
        width={48}
        height={48}
        alt={name}
        className="rounded-full border border-violet-300 bg-violet-50 p-1"
      />
      <div className="flex flex-col">
        <div className="font-medium text-gray-900">{name}</div>
        <div className="text-sm font-light text-gray-500">{job}</div>
      </div>
    </>
  )
}

export default TestimonialPersonInfo
