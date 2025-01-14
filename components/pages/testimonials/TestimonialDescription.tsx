import { FC } from 'react'

interface TestimonialDescriptionProps {
  description: string
}

const TestimonialDescription: FC<TestimonialDescriptionProps> = ({ description }) => (
  <p className="mt-4 text-lg text-neutral-600">{description}</p>
)

export default TestimonialDescription
