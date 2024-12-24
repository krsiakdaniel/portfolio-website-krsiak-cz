import { NavigationDirectionEnum } from '@/utils/interfaces/enums'
type IconArrowProps = {
  type: NavigationDirectionEnum
}

export const IconArrow = ({ type = NavigationDirectionEnum.Left }: IconArrowProps) => {
  return (
    <svg
      className={`mx-1 block h-4 w-4 ${type === NavigationDirectionEnum.Left ? 'rotate-180' : ''}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}
