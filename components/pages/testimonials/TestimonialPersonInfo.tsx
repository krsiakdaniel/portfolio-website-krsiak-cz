import { FC } from 'react'

import ImageComponent from '@/components/shared/ImageComponent'

import { ImageLoading } from '@/lib/utils/typeDefinitions/enums'
import { TestimonialPersonInfoProps } from '@/lib/utils/typeDefinitions/props/pages/testimonials'

const IMAGE_WIDTH = 48
const IMAGE_HEIGHT = 48

const TestimonialPersonInfo: FC<TestimonialPersonInfoProps> = ({ photo, icon, name, job }) => {
  return (
    <>
      <ImageComponent
        src={photo}
        width={IMAGE_WIDTH}
        height={IMAGE_HEIGHT}
        alt={name}
        loading={ImageLoading.LAZY}
        customCss="rounded-full border border-violet-300 bg-violet-50 p-1 shadow-md"
      />
      <div className="flex flex-col">
        <div className="font-medium text-gray-900">
          <span role="img" className="select-none">
            {icon}
          </span>
          <span className="ml-2">{name}</span>
        </div>
        <div className="text-sm font-normal text-gray-500">{job}</div>
      </div>
    </>
  )
}

export default TestimonialPersonInfo
