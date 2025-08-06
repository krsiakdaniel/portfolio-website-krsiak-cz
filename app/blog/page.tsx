import { getAllBlogPosts } from '@/lib/utils/blog-utils'
import { Metadata } from 'next'
import Link from 'next/link'

// TODO: add OG and Twitter metadata for the blog pages each post
export const metadata: Metadata = {
  title: 'Blog | Daniel Kršiak - React Developer',
  description: 'Blog posts by Daniel Kršiak about web development, TypeScript, React, and more.',
}

export default async function BlogPage() {
  const posts = await getAllBlogPosts()

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="mb-4 text-sm" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
          <li>
            <Link href="/" className="text-blue-600 hover:underline dark:text-blue-400">
              Home
            </Link>
            <span className="mx-2">/</span>
          </li>
          <li className="font-medium text-gray-900 dark:text-white">Blog</li>
        </ol>
      </nav>

      {/* H1 Heading with consistent style */}
      <h1 className="mb-6 flex items-center text-5xl font-bold tracking-tight break-words text-violet-600 sm:text-6xl md:text-7xl">
        <span role="img" aria-label="Writing hand" className="mr-4 select-none">
          ✍️
        </span>
        <span>Blog</span>
      </h1>
      <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
        Welcome to my blog! Here I share my thoughts on web development, technology, and more.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg dark:bg-gray-800"
            >
              <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{post.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">{post.description}</p>
              <div className="mt-4 flex justify-between">
                <span className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString()}
                </span>
                <span className="text-blue-600 dark:text-blue-400">Read more →</span>
              </div>
            </Link>
          ))
        ) : (
          <Link
            href="/blog/sample"
            className="block rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg dark:bg-gray-800"
          >
            <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              Sample MDX Page
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              A demonstration of MDX capabilities in this website.
            </p>
            <p className="mt-4 text-blue-600 dark:text-blue-400">Read more →</p>
          </Link>
        )}
      </div>
    </div>
  )
}
