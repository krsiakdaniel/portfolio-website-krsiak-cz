// Main gallery preview dimensions (1240x900)
export const GALLERY_PREVIEW = {
  WIDTH: 1240, // Full width container
  HEIGHT: 900, // Maintains the 1.378:1 ratio (1240 / 1.378)
  ASPECT_RATIO: 1.378,
} as const

// Project overview image dimensions (604x438)
export const PROJECT_OVERVIEW = {
  WIDTH: 604, // Full half container width
  HEIGHT: 438, // Maintains the 1.378:1 ratio
  ASPECT_RATIO: 1.378,
} as const

// Gallery thumbnail dimensions (100x77)
export const GALLERY_THUMBNAIL = {
  WIDTH: 100,
  HEIGHT: 77,
  ASPECT_RATIO: 1.3,
} as const
