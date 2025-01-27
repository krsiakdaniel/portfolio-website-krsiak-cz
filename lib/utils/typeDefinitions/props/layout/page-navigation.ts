import { ArrowDirectionEnum } from '@/lib/utils/typeDefinitions/enums'

// Default No Link Navigation Props
export type DefaultNoLinkNavigationProps = {
  arrowDirection: ArrowDirectionEnum
}

// Page Navigation Props
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

// Page Navigation Link Props
export type PageNavigationLinkProps = {
  href: string
  icon: string
  text: string
  arrowDirection?: ArrowDirectionEnum
  dataTestId: string | undefined
}
