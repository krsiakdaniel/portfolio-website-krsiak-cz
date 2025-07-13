import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
  title: string
  date: string
  slug: string
  description: string
  content: string
  author?: string
  tags?: string[]
}

export interface BlogPostMeta {
  title: string
  date: string
  slug: string
  description: string
  author?: string
  tags?: string[]
}

/**
 * Get all blog posts with their metadata
 */
export async function getAllBlogPosts(): Promise<BlogPostMeta[]> {
  const postsDirectory = path.join(process.cwd(), 'app/blog')
  const filenames = fs.readdirSync(postsDirectory)

  const posts = filenames
    .filter((filename) => {
      // Filter out non-MDX files and special files
      return (
        (filename.endsWith('.mdx') || filename.endsWith('.md')) &&
        !filename.startsWith('_') &&
        filename !== 'page.mdx' &&
        filename !== 'page.md' &&
        filename !== 'page.tsx' &&
        filename !== 'layout.tsx' &&
        filename !== 'code-highlight.css'
      )
    })
    .map(async (filename) => {
      const slug = filename.replace(/\.mdx?$/, '')
      const fullPath = path.join(postsDirectory, filename)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Parse frontmatter using gray-matter
      const { data: frontmatter } = matter(fileContents)

      return {
        slug,
        title: frontmatter['title'] || slug,
        date: frontmatter['date'] || new Date().toISOString(),
        description: frontmatter['description'] || '',
        author: frontmatter['author'] || 'Daniel Kršiak',
        tags: frontmatter['tags'] || [],
      }
    })

  // Wait for all promises to resolve
  const resolvedPosts = await Promise.all(posts)

  // Sort posts by date (newest first)
  return resolvedPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

/**
 * Get a single blog post by slug
 */
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const postsDirectory = path.join(process.cwd(), 'app/blog')
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)

  // Check if file exists
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Parse frontmatter and content using gray-matter
  const { data: frontmatter, content } = matter(fileContents)

  return {
    slug,
    title: frontmatter['title'] || slug,
    date: frontmatter['date'] || new Date().toISOString(),
    description: frontmatter['description'] || '',
    content: content, // Return raw content since Next.js will handle MDX compilation
    author: frontmatter['author'] || 'Daniel Kršiak',
    tags: frontmatter['tags'] || [],
  }
}
