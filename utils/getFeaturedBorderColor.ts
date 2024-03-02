export const getFeaturedBorderColor = (isFeatured: boolean | undefined) => {
  if (undefined || !isFeatured) {
    return 'border-neutral-300'
  }
  if (isFeatured) {
    return 'border-orange-300'
  }
}
