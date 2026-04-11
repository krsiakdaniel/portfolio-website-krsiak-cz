import { useEffect } from 'react'

import ErrorPageContent from '@/components/layout/errors/ErrorPageContent'
import PageContainer from '@/components/layout/page-container/PageContainer'

import { TEXT } from '@/localization'

import imgError from '@/public/images/webp/errors/error.webp'

import { type ErrorPageLayoutProps } from './ErrorPageLayout.types'

const ErrorPageLayout = ({
  error,
  pageContainerId,
  imgAlt,
  description,
  note,
  unstable_retry,
}: ErrorPageLayoutProps) => {
  useEffect(() => {
    // Log the error to an error reporting service
    // eslint-disable-next-line no-console
    console.error('ERROR:', error.name, error.message, error.stack)
    // Log digest if available for server-side error tracking
    if (error.digest) {
      // eslint-disable-next-line no-console
      console.error('Error digest:', error.digest)
    }
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
        onButtonClick={unstable_retry}
      />
    </PageContainer>
  )
}

export default ErrorPageLayout
