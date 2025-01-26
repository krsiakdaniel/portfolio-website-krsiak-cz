import { FC } from 'react'

import ImageComponent from '@/components/shared/ImageComponent'

import { TestimonialPersonInfoProps } from '@/lib/utils/typeDefinitions/props/pages/testimonials'

const IMAGE_WIDTH = 48
const IMAGE_HEIGHT = 48

const TestimonialPersonInfo: FC<TestimonialPersonInfoProps> = ({ name, job, photo }) => {
  return (
    <>
      <ImageComponent
        src={photo}
        width={IMAGE_WIDTH}
        height={IMAGE_HEIGHT}
        alt={name}
        loading="lazy"
        customCss="rounded-full border border-violet-300 bg-violet-50 p-1 shadow-lg"
      />
      <div className="flex flex-col">
        <div className="font-medium text-gray-900">{name}</div>
        <div className="text-sm font-light text-gray-500">{job}</div>
      </div>
    </>
  )
}

export default TestimonialPersonInfo
