import { MetaDataKeywords } from '@/lib/utils/typeDefinitions/interfaces'

/**
 * Converts the keywords object into a comma-separated string.
 *
 * @param metadataKeywords - The metadata object containing keywords.
 * @returns A string of keywords separated by commas.
 */
export const formatKeywordsString = (metadataKeywords: MetaDataKeywords): string => {
  return Object.values(metadataKeywords).join(', ')
}
