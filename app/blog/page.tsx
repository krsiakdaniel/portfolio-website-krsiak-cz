import { redirect } from 'next/navigation'

// Blog page is temporarily hidden - redirect to home page
export default function BlogPage() {
  redirect('/')
}
