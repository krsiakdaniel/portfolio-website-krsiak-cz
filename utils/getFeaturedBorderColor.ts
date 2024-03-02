export const getFeaturedBorderColor = (isFeatured: boolean | undefined) => {
  if (undefined || !isFeatured) {
    return 'border border-neutral-300'
  }
  if (isFeatured) {
    return 'border-2 border-yellow-300'
  }
}
