type Props = {
  text: string
}

const DividerWithText = ({ text }: Props) => {
  return (
    <div className="mb-0 inline-flex w-full items-center justify-center">
      <hr className="my-8 h-px w-96 border-0 bg-gray-200 dark:bg-gray-700" />
      <span className="absolute left-1/2 -translate-x-1/2 bg-white px-3 text-center font-medium uppercase text-neutral-600 dark:bg-gray-900 dark:text-white">
        {text}
      </span>
    </div>
  )
}

export default DividerWithText
