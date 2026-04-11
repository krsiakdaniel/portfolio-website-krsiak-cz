export type WorkSectionItemWithFlags = {
  text: string
  flags?: readonly { emoji: string; ariaLabel: string }[]
}

export type WorkSection = {
  title: string
  titleHighlight?: string
  items: readonly (string | WorkSectionItemWithFlags)[]
}
