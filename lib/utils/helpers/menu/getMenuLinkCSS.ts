export const getMenuLinkCSS = (isMobile: boolean): string => {
  return isMobile
    ? 'block border-b border-neutral-100 py-2 pl-3 pr-4 hover:bg-neutral-50'
    : 'text-body-md cursor-pointer'
}
