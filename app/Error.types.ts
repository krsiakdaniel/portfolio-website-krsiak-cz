// Error Pages
// Based on Next.js App Router error boundary specifications:
// https://nextjs.org/docs/app/api-reference/file-conventions/error
export type ErrorProps = {
  readonly error: Error & { digest?: string }
  readonly unstable_retry: () => void
}
