import { useEffect } from 'react'

import ErrorPageContent from '@/components/layout/errors/ErrorPageContent'
import PageContainer from '@/components/layout/PageContainer'

import { TEXT } from '@/localization'

import { ErrorPageLayoutProps } from '@/lib/utils/typeDefinitions/props/layout/errors'

import imgError from '@/public/images/webp/errors/error.webp'

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
    console.error('ERROR:', error.name, error.message, error.stack)
    // Log digest if available for server-side error tracking
    if (error.digest) {
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
