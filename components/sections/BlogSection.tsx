"use client";
import { useState, useEffect } from "react";
import Link from "next/link"
import { BlogCard } from "../ui/blogCard"
import { getBlogPosts, type BlogPost } from "@/lib/supabase-blog"
import { ButtonLink } from "@/components/common/button"

export function BlogSection() {
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      const posts = await getBlogPosts();
      setFeaturedPosts(posts.slice(0, 3)); // Get first 3 posts
      setLoading(false);
    };
    loadPosts();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Latest from Our Blog</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Stay up to date with the latest insights, tutorials, and best practices from our team.
            </p>
          </div>
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-2 text-gray-600">Loading blog posts...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Latest from Our Blog</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Stay up to date with the latest insights, tutorials, and best practices from our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} variant={index === 0 ? "featured" : "default"} />
          ))}
        </div>

        <div className="text-center">
          <ButtonLink
            href="/blog"
            intent="secondary"
            size="lg"
            className="inline-flex items-center"
          >
            View All Posts
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
