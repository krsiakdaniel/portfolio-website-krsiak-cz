import { FC } from 'react'

import CareerPathList from '@/components/pages/resume/CareerPathList'
import Photo from '@/components/shared/Photo'

const CareerPath: FC = (): JSX.Element => {
  return (
    <>
      <div className="mt-16 border-b pb-2 text-2xl font-bold uppercase">My Career Path</div>
      <div>
        <p className="mt-4 text-lg text-neutral-600">
          My journey has been diverse in a range of roles in different fields all making my career.
        </p>
      </div>

      <div className="mt-8 flex flex-col md:flex-row">
        <div className="w-full md:w-2/3">
          <CareerPathList />
        </div>

        <div className="mt-8 w-full md:mt-0 md:w-1/3">
          <div className="min-h-[150px] min-w-[150px] max-w-full">
            <Photo />
          </div>
        </div>
      </div>
    </>
  )
}

export default CareerPath
