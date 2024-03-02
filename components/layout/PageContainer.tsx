import React from 'react'

type props = {
  id: string
  children: React.ReactNode
}

function PageContainer({ id, children }: props) {
  return (
    <div id={id} className="mt-20 px-5">
      <div className="container mx-auto px-5 max-w-screen-xl">{children}</div>
    </div>
  )
}

export default PageContainer
