import Link from "next/link"
import Image from "next/image"
import type { BlogPost } from "@/lib/blog-data"

interface BlogCardProps {
  post: BlogPost
  variant?: "default" | "featured"
  className?: string
}

export function BlogCard({ post, variant = "default", className = "" }: BlogCardProps) {
  const isFeatured = variant === "featured"

  return (
    <article
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${className}`}
    >
      <Link href={`/blog/${post.id}`}>
        <div className="relative">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={isFeatured ? 600 : 400}
            height={isFeatured ? 300 : 200}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-blue-600 text-white px-2 py-1 rounded-md text-sm font-medium">
              {post.categories[0]}
            </span>
          </div>
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center mb-3">
          <Image
            src={post.author.avatar || "/placeholder.svg"}
            alt={post.author.name}
            width={32}
            height={32}
            className="w-8 h-8 rounded-full mr-3"
          />
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-medium">{post.author.name}</span>
            <span className="mx-2">•</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </div>

        <Link href={`/blog/${post.id}`}>
          <h3
            className={`font-bold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
              isFeatured ? "text-xl" : "text-lg"
            }`}
          >
            {post.title}
          </h3>
        </Link>

        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{post.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.categories.slice(0, 3).map((category) => (
            <span
              key={category}
              className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md text-xs"
            >
              {category}
            </span>
          ))}
        </div>

        <Link
          href={`/blog/${post.id}`}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
        >
          Read more
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  )
}
