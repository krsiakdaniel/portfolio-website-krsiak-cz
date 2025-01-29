import { StatusBadge } from '@/lib/utils/typeDefinitions/interfaces'

/**
 * Creates a status badge object.
 *
 * @param id - The unique identifier for the badge.
 * @param name - The name of the badge.
 * @param src - The source URL of the badge image.
 * @param alt - The alt text for the badge image.
 * @param width - The width of the badge image.
 * @param height - The height of the badge image.
 * @returns A StatusBadge object.
 */
export const createStatusBadge = (
  id: number,
  name: string,
  src: string,
  alt: string,
  width: number,
  height: number,
): StatusBadge => {
  return {
    id,
    name,
    src,
    alt,
    width,
    height,
  }
}
