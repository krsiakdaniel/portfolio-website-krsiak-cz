type Props = {
  text: string
}

const DividerWithText = ({ text }: Props) => {
  return (
    <div className="inline-flex items-center justify-center w-full mb-0">
      <hr className="w-96 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <span className="uppercase absolute px-3 font-medium text-gray-500 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900 text-center">
        {text}
      </span>
    </div>
  )
}

export default DividerWithText
