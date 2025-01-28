import { FC } from 'react'

import { CSS_GLOBAL_CLASSES } from '@/lib/utils/constants/cssGlobalClasses'

import { DividerWithTextProps } from '@/lib/utils/typeDefinitions/props/shared/divider'

const DividerWithText: FC<DividerWithTextProps> = ({ text }): JSX.Element => {
  return (
    <div className="relative flex w-full items-center justify-center">
      <hr className="my-8 h-[1px] w-full border-0 bg-gray-200 md:w-96" />
      <span
        className={`absolute left-1/2 -translate-x-1/2 bg-gray-50 px-3 text-center font-medium uppercase text-neutral-600 ${CSS_GLOBAL_CLASSES.DIVIDER_TEXT}`}
      >
        {text}
      </span>
    </div>
  )
}

export default DividerWithText
