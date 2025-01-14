import { FC } from 'react'

import CareerPathList from '@/components/pages/resume/CareerPathList'
import Paragraph from '@/components/shared/Paragraph'

const CareerPath: FC = (): JSX.Element => {
  return (
    <div>
      <div className="mt-16 border-b pb-2 text-2xl font-bold uppercase">My Career Path</div>
      <div>
        <Paragraph>My journey has been diverse in a range of roles in different fields all making my career.</Paragraph>
      </div>
      <CareerPathList />
    </div>
  )
}

export default CareerPath
