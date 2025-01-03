import { FC } from 'react'

type DividerWithTextProps = {
  text: string
}

const DividerWithText: FC<DividerWithTextProps> = ({ text }): JSX.Element => {
  return (
    <div className="inline-flex w-full items-center justify-center">
      <hr className="my-8 h-px w-96 border-0 bg-gray-200" />
      <span className="absolute left-1/2 -translate-x-1/2 bg-white px-3 text-center font-medium uppercase text-neutral-600">
        {text}
      </span>
    </div>
  )
}

export default DividerWithText
