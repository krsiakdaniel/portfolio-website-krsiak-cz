import { FC } from 'react'

import CareerPathList from '@/components/pages/resume/CareerPathList'

const CareerPath: FC = (): JSX.Element => {
  return (
    <div>
      <div className="mt-16 border-b pb-2 text-2xl font-bold uppercase">My Career Path</div>
      <div>
        <p className="mt-4 text-lg text-neutral-600">
          My journey has been diverse in a range of roles in different fields all making my career.
        </p>
      </div>
      <CareerPathList />
    </div>
  )
}

export default CareerPath
