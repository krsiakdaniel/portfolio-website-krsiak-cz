import { FC } from 'react'

import { AlertProps } from '@/lib/utils/typeDefinitions/props/props'

const iconInfo = (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
    className="mr-2 h-4 w-4"
  >
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
  </svg>
)

const Alert: FC<AlertProps> = ({ title, description, linkComponent }) => {
  return (
    <div
      className="mt-4 rounded-lg border border-yellow-300 bg-yellow-50 p-4 text-yellow-800 dark:border-yellow-800 dark:bg-gray-800 dark:text-yellow-400"
      role="alert"
    >
      <div className="flex items-center">
        {iconInfo}
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
      <div className="mb-4 mt-2 text-sm">{description}</div>
      <div className="flex">{linkComponent}</div>
    </div>
  )
}

export default Alert
