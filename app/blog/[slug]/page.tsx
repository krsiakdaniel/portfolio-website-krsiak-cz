import { getBlogPost } from '@/lib/utils/blog-utils'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface BlogPostParams {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogPostParams): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    }
  }

  return {
    title: `${post.title} | Daniel Kršiak - React Developer`,
    description: post.description,
    authors: [{ name: post.author || 'Daniel Kršiak' }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'Daniel Kršiak'],
      tags: post.tags,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostParams) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="prose prose-lg dark:prose-invert mx-auto max-w-4xl">
      <header className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-4">
          <time className="text-gray-600 dark:text-gray-400" dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          {post.author && (
            <span className="text-gray-600 dark:text-gray-400">By {post.author}</span>
          )}
        </div>
        {post.tags && post.tags.length > 0 && (
          <div className="mt-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="mdx-content">
        {/* @ts-ignore - Next.js can render MDX content from next-mdx-remote */}
        {post.content.content}
      </div>
    </article>
  )
}
