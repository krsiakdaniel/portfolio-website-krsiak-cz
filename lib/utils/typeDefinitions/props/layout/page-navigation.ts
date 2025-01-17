import { NavigationDirectionEnum } from '@/lib/utils/typeDefinitions/enums'

export type DefaultNoLinkNavigationProps = {
  arrowDirection: NavigationDirectionEnum
}

export type PageNavigationProps = {
  linkPrevious?: string
  namePrevious?: string
  linkNext?: string
  nameNext?: string
  dataTestIdPrevious?: string
  dataTestIdNext?: string
}

export type PageNavigationLinkProps = {
  href: string
  text: string
  direction?: NavigationDirectionEnum
  dataTestId: string | undefined
}
