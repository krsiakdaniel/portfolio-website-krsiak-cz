import { FC, ReactNode } from 'react'

type PageContainerProps = {
  id?: string
  children: ReactNode
}

const PageContainer: FC<PageContainerProps> = ({ id, children }): JSX.Element => {
  return (
    <div id={id} className="mt-20 px-5">
      <div className="container mx-auto max-w-screen-xl px-5">{children}</div>
    </div>
  )
}

export default PageContainer
