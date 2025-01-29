import { getAttributes } from '@/lib/utils/helpers/getAttributes'

describe('getAttributes', () => {
  it('should return an object with both id and data-testid when both are provided', () => {
    const attributes = { id: 'test-id', dataTestId: 'test-data-testid' }
    const result = getAttributes(attributes)
    expect(result).toEqual({ id: 'test-id', 'data-testid': 'test-data-testid' })
  })

  it('should return an object with only id when only id is provided', () => {
    const attributes = { id: 'test-id' }
    const result = getAttributes(attributes)
    expect(result).toEqual({ id: 'test-id' })
  })

  it('should return an object with only data-testid when only dataTestId is provided', () => {
    const attributes = { dataTestId: 'test-data-testid' }
    const result = getAttributes(attributes)
    expect(result).toEqual({ 'data-testid': 'test-data-testid' })
  })

  it('should return an empty object when neither id nor dataTestId is provided', () => {
    const attributes = {}
    const result = getAttributes(attributes)
    expect(result).toEqual({})
  })
})
