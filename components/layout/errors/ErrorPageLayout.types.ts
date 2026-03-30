export type ErrorPageLayoutProps = {
  description: string
  error: Error & { digest?: string }
  imgAlt: string
  note: string
  pageContainerId?: string
  unstable_retry: () => void
}
