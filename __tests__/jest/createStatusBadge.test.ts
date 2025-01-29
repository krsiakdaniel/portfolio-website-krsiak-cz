import { createStatusBadge } from '@/lib/utils/helpers/createStatusBadge'
import { StatusBadge } from '@/lib/utils/typeDefinitions/interfaces'

describe('createStatusBadge', () => {
  it('should create a status badge with the given properties', () => {
    const id = 1
    const name = 'Test Badge'
    const src = 'http://example.com/badge.png'
    const alt = 'Test Badge Image'
    const width = 100
    const height = 100

    const expectedBadge: StatusBadge = {
      id,
      name,
      src,
      alt,
      width,
      height,
    }

    const result = createStatusBadge(id, name, src, alt, width, height)

    expect(result).toEqual(expectedBadge)
  })

  it('should create a status badge with different properties', () => {
    const id = 2
    const name = 'Another Badge'
    const src = 'http://example.com/another-badge.png'
    const alt = 'Another Badge Image'
    const width = 200
    const height = 200

    const expectedBadge: StatusBadge = {
      id,
      name,
      src,
      alt,
      width,
      height,
    }

    const result = createStatusBadge(id, name, src, alt, width, height)

    expect(result).toEqual(expectedBadge)
  })
})
