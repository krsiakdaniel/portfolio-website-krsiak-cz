import { FC } from 'react'

type ResumePlainTextPageProps = {
  content: string
}

const ResumePlainTextPage: FC<ResumePlainTextPageProps> = ({ content }): JSX.Element => {
  return (
    <div className="mt-8 w-full">
      <pre className="text-md whitespace-pre-wrap rounded-lg bg-gray-100 p-8 font-mono">{content}</pre>
    </div>
  )
}

export default ResumePlainTextPage
