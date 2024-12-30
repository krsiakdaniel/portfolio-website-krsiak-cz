import { scrollToTop } from '@/lib/utils/helpers/scrollToTop'

describe('scrollToTop', () => {
  it('should call window.scrollTo with correct arguments', () => {
    // Mock window.scrollTo
    window.scrollTo = jest.fn()

    // Call the function
    scrollToTop()

    // Assert that window.scrollTo was called with correct arguments
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    })
  })
})
