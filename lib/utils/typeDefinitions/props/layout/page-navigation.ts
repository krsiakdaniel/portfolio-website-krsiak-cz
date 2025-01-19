import { ArrowDirectionEnum } from '@/lib/utils/typeDefinitions/enums'

// Default No Link Navigation Props
export type DefaultNoLinkNavigationProps = {
  arrowDirection: ArrowDirectionEnum
}

// Page Navigation Props
export type PageNavigationProps = {
  dataTestIdNext?: string
  dataTestIdPrevious?: string
  linkNext?: string
  linkPrevious?: string
  nameNext?: string
  namePrevious?: string
}

// Page Navigation Link Props
export type PageNavigationLinkProps = {
  dataTestId: string | undefined
  arrowDirection?: ArrowDirectionEnum
  href: string
  text: string
}
