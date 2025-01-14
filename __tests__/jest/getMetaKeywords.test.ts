import { formatKeywordsString } from '@/lib/utils/helpers/metadata/formatKeywordsString'
import { MetaDataKeywords } from '@/lib/utils/interfaces/interfaces'

describe('formatKeywordsString', () => {
  it('should convert metadata keywords object to a comma-separated string', () => {
    const metadataKeywords: MetaDataKeywords = {
      keyword1: 'typescript',
      keyword2: 'jest',
      keyword3: 'testing',
    }
    const result = formatKeywordsString(metadataKeywords)
    expect(result).toBe('typescript, jest, testing')
  })

  it('should return an empty string if metadata keywords object is empty', () => {
    const metadataKeywords: MetaDataKeywords = {}
    const result = formatKeywordsString(metadataKeywords)
    expect(result).toBe('')
  })

  it('should handle metadata keywords object with one keyword', () => {
    const metadataKeywords: MetaDataKeywords = {
      keyword1: 'typescript',
    }
    const result = formatKeywordsString(metadataKeywords)
    expect(result).toBe('typescript')
  })

  it('should handle metadata keywords object with multiple keywords', () => {
    const metadataKeywords: MetaDataKeywords = {
      keyword1: 'typescript',
      keyword2: 'jest',
      keyword3: 'testing',
      keyword4: 'development',
    }
    const result = formatKeywordsString(metadataKeywords)
    expect(result).toBe('typescript, jest, testing, development')
  })

  it('should handle metadata keywords object with keywords containing spaces', () => {
    const metadataKeywords: MetaDataKeywords = {
      keyword1: 'typescript',
      keyword2: 'unit testing',
      keyword3: 'integration testing',
    }
    const result = formatKeywordsString(metadataKeywords)
    expect(result).toBe('typescript, unit testing, integration testing')
  })
})
