import { DefaultNoLinkNavigationProps } from '@/components/layout/page-navigation/PageNavigation.types'

const DefaultNoLinkNavigation = (_: DefaultNoLinkNavigationProps) => {
  return (
    <div className="hidden min-h-[58px] w-full rounded-lg border border-dashed border-gray-200 bg-white p-4 md:block lg:w-1/2" />
  )
}

export default DefaultNoLinkNavigation
