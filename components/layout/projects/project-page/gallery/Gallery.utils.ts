export const calculateImageHeight = (
  displayWidth: number,
  imageWidth: number | undefined,
  imageHeight: number | undefined,
  fallbackHeight: number,
): number => {
  if (!imageWidth || !imageHeight) return fallbackHeight
  return Math.round((displayWidth * imageHeight) / imageWidth)
}
