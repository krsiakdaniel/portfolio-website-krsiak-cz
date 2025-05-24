import { BreadCrumbsType } from '@/lib/utils/typeDefinitions/types'

// BreadCrumbs Props
export type BreadCrumbsProps = BreadCrumbsType

// Breadcrumbs Item Props
export type BreadcrumbsItemProps = {
  href: string
  icon: string
  ariaLabel: string
  text: string
  showSeparatorIcon?: boolean
}
