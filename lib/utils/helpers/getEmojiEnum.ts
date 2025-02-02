import { EmojiNameEnum } from '@/lib/utils/typeDefinitions/enums'

/**
 * Extracts emoji enum value from an image path
 * @param importPath - Path to the emoji image (e.g., "star-animated-128x128")
 * @returns Corresponding EmojiNameEnum value or ROCKET as fallback
 */
export const getEmojiEnum = (importPath: string): EmojiNameEnum => {
  const match = importPath.match(/([^/]+?)-animated-\d+x\d+/)
  const name = match?.[1]

  if (!name) return EmojiNameEnum.ROCKET

  const enumKey = name.toUpperCase()
  return EmojiNameEnum[enumKey as keyof typeof EmojiNameEnum] || EmojiNameEnum.ROCKET
}
