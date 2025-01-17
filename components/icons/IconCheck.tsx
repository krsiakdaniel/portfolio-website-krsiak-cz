import { FC } from 'react'

import { IconCheckProps } from '@/lib/utils/typeDefinitions/props/icons'

const IconCheck: FC<IconCheckProps> = ({ iconColor = 'text-violet-600' }): JSX.Element => {
  return (
    <svg
      className={`${iconColor} mr-2 mt-1 h-3.5 w-3.5`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
    </svg>
  )
}

export default IconCheck
