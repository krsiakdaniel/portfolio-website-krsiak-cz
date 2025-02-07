/**
 * Project overview image configuration.
 * @description Configuration for project overview images with 1.378:1 ratio.
 * @property {number} WIDTH
 * @property {number} HEIGHT
 * @constant
 */
export const PROJECT_IMAGE_PREVIEW = {
  WIDTH: 604,
  HEIGHT: 438,
} as const

/**
 * Main gallery preview image configuration.
 * @description Configuration for main gallery preview images with 4:3 ratio.
 * @property {number} WIDTH
 * @property {number} HEIGHT
 * @constant
 */
export const GALLERY_PREVIEW_4_3 = {
  WIDTH: 1240,
  HEIGHT: 930,
} as const

// FIXME: krsiak-thumb.webp = 604x438 = PROJECT PREVIEW, screenshot update name and in code
// FIXME: resize big imgs to actual small = GALLERY_THUMBNAIL_4_3 = add thumbnails to folders, and update code to get correct thumb to preview image
/**
 * Gallery thumbnail image configuration.
 * @description Configuration for gallery thumbnail images with 4:3 ratio.
 * @property {number} WIDTH
 * @property {number} HEIGHT
 * @constant
 */
export const GALLERY_THUMBNAIL_4_3 = {
  WIDTH: 120,
  HEIGHT: 95,
} as const
