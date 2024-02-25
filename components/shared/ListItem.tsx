type Props = {
  children: React.ReactNode
}

const ListItem = ({ children }: Props) => {
  return (
    <>
      <li className="flex space-x-2 rtl:space-x-reverse items-start xl:items-center">
        <div className="pt-1 xl:pt-0">
          <svg
            className="flex-shrink-0 w-3.5 h-3.5 text-primary-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
        </div>
        <span className="leading-tight">{children}</span>
      </li>
    </>
  )
}

export default ListItem
