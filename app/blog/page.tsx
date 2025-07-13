import type { Metadata } from "next"
import { BlogCard } from "@/components/ui/blogCard"
import { getBlogPosts } from "../../lib/blog-data"

export const metadata: Metadata = {
  title: "Blog | Your Site",
  description: "Read our latest articles about web development, design, and technology.",
}

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Discover insights, tutorials, and best practices from our team of developers and designers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">No blog posts available yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  )
}
