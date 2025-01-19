// Call To Action Props
export type CallToActionProps = {
  dataTestId: string
  textMobileAndDesktop: string
  textDesktop: string
  heading: string
  highlight: string
  icon: string
  isLinkExternal?: boolean
  link: string
  linkText: string
}

// Call To Action Icon Props
export type CallToActionIconProps = {
  icon: string
}

// Call To Action Link Props
export type CallToActionLinkProps = {
  link: string
  linkText: string
  isLinkExternal: boolean | undefined
  dataTestId?: string
}

// Call To Action Texts Props
export type CallToActionTextsProps = {
  highlight: string
  heading: string
  textMobileAndDesktop: string
  textDesktop: string
}
