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
  type: 'mobile' | 'desktop'
  icon: string
}

// Call To Action Texts Props
export type CallToActionTextsProps = {
  icon: string
  highlight: string
  heading: string
  textMobileAndDesktop: string
  textDesktop: string
}
