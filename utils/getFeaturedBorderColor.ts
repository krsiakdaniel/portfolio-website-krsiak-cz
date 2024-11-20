export const getFeaturedBorderColor = (isFeatured: boolean | undefined) => {
  if (isFeatured === undefined || isFeatured === false) {
    return 'border-neutral-300'
  }
  if (isFeatured) {
    return 'border-yellow-300'
  }
}
