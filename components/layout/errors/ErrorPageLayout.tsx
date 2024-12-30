import { useEffect } from 'react'

import ErrorPageContent from '@/components/layout/errors/ErrorPageContent'
import PageContainer from '@/components/layout/PageContainer'

import { TEXT } from '@/localization/english'

import imgError from '@/public/images/webp/errors/error.webp'

type ErrorPageLayoutProps = {
  error: Error
  pageContainerId?: string
  imgAlt: string
  description: string
  note: string
}

const reset = () => {
  window.location.reload()
}

const ErrorPageLayout = ({ error, pageContainerId, imgAlt, description, note }: ErrorPageLayoutProps): JSX.Element => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('ERROR:', error.name, error.message, error.stack)
  }, [error])

  return (
    <PageContainer id={pageContainerId}>
      <ErrorPageContent
        imgSrc={imgError}
        imgAlt={imgAlt}
        heading={TEXT.error}
        description={description}
        note={note}
        buttonText={TEXT.tryAgain}
        onButtonClick={() => reset()}
      />
    </PageContainer>
  )
}

export default ErrorPageLayout
