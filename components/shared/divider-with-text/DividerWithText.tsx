import { type DividerWithTextProps } from '@/components/shared/divider-with-text/DividerWithText.types'

import { CSS_GLOBAL_CLASSES } from '@/lib/utils/constants/cssGlobalClasses'

const DividerWithText = ({ text }: DividerWithTextProps) => {
  return (
    <div className="relative flex w-full items-center justify-center">
      <hr className="my-8 h-px w-full border-0 bg-gray-200 md:w-96" />
      <span
        className={`absolute left-1/2 -translate-x-1/2 bg-white px-3 rounded-lg border border-gray-200 text-center text-neutral-600 uppercase ${CSS_GLOBAL_CLASSES.DIVIDER_TEXT}`}
      >
        {text}
      </span>
    </div>
  )
}

export default DividerWithText
