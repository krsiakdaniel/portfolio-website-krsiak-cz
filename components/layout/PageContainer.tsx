import { ReactNode } from 'react'

type PageContainerProps = {
  id?: string
  children: ReactNode
}

function PageContainer({ id, children }: PageContainerProps) {
  return (
    <div id={id} className="mt-20 px-5">
      <div className="container mx-auto max-w-screen-xl px-5">{children}</div>
    </div>
  )
}

export default PageContainer
