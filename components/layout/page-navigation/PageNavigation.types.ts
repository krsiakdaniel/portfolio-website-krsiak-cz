import { ArrowDirectionEnum } from '@/lib/utils/typeDefinitions/enums'

export type DefaultNoLinkNavigationProps = {
  arrowDirection: ArrowDirectionEnum
}

export type PageNavigationProps = {
  linkNext?: string
  iconNext?: string
  nameNext?: string
  dataTestIdNext?: string
  linkPrevious?: string
  iconPrevious?: string
  namePrevious?: string
  dataTestIdPrevious?: string
}

export type PageNavigationLinkProps = {
  href: string
  icon: string
  text: string
  arrowDirection?: ArrowDirectionEnum
  dataTestId: string | undefined
}
