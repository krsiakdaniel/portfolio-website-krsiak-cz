import { FC } from 'react'

interface TestimonialHeaderProps {
  title: string
}

const TestimonialHeader: FC<TestimonialHeaderProps> = ({ title }) => (
  <div className="border-b pb-2 text-2xl font-bold uppercase">{title}</div>
)

export default TestimonialHeader
