import { createPageMetadata } from '@/lib/utils/helpers/metadata/createPageMetadata'

const meta = {
  title: 'Test Page',
  description: 'Test description',
  keywords: { a: 'typescript', b: 'jest' },
}

const ogImage = { src: '/og.png' }
const twitterImage = { src: '/twitter.png' }

describe('createPageMetadata', () => {
  it('sets title, description and keywords', () => {
    const result = createPageMetadata({ meta })

    expect(result.title).toBe('Test Page')
    expect(result.description).toBe('Test description')
    expect(result.keywords).toBe('typescript, jest')
  })

  it('includes og and twitter images when provided', () => {
    const result = createPageMetadata({ meta, ogImage, twitterImage })

    expect(result.openGraph?.images).toEqual([{ url: '/og.png' }])
    expect(result.twitter?.images).toEqual([{ url: '/twitter.png' }])
  })

  it('omits images when not provided', () => {
    const result = createPageMetadata({ meta })

    expect(result.openGraph?.images).toBeUndefined()
    expect(result.twitter?.images).toBeUndefined()
  })

  it('appends pageUrl to the production url', () => {
    const result = createPageMetadata({ meta, pageUrl: '/resume' })

    expect(result.openGraph?.url).toBe('https://krsiak.cz/resume')
  })

  it('uses production url without suffix when pageUrl is omitted', () => {
    const result = createPageMetadata({ meta })

    expect(result.openGraph?.url).toBe('https://krsiak.cz')
  })

  it('sets twitter card to summary_large_image', () => {
    const result = createPageMetadata({ meta })

    expect((result.twitter as { card?: string })?.card).toBe('summary_large_image')
  })

  it('sets og title and description from meta', () => {
    const result = createPageMetadata({ meta })

    expect(result.openGraph?.title).toBe('Test Page')
    expect(result.openGraph?.description).toBe('Test description')
  })

  it('sets twitter title and description from meta', () => {
    const result = createPageMetadata({ meta })

    expect(result.twitter?.title).toBe('Test Page')
    expect(result.twitter?.description).toBe('Test description')
  })
})
