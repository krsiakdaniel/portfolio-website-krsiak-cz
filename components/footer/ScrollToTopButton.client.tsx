// If you need to add an onClick event handler to a component, you should make sure that component is a Client Component.
// You can convert a Server Component to a Client Component by renaming the file to have a .client.tsx extension instead of .tsx.

'use client'

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const ScrollToTopButton = () => {
  return (
    <>
      <div className="flex space-x-2">
        <div
          className="mt-4 flex cursor-pointer text-violet-600 underline hover:text-violet-600 hover:no-underline md:mt-0"
          data-testid="scroll-to-top"
        >
          <div onClick={scrollToTop}>Scroll to Top</div>
        </div>
        <span className="hidden md:inline">⬆️</span>
      </div>
    </>
  )
}

export default ScrollToTopButton
