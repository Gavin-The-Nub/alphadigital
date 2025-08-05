"use client";
import { useState, useEffect } from "react";
import { getBlogPosts, type BlogPost } from "@/lib/supabase-blog";
import { BlogCard } from "@/components/ui/blogCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Calendar, User, Tag } from "lucide-react";

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState("");

  // Load blog posts on component mount
  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const posts = await getBlogPosts();
      setPosts(posts);
      setFilteredPosts(posts);
      setLoading(false);
    };
    loadPosts();
  }, []);

  // Filter posts based on search and filters
  useEffect(() => {
    let filtered = posts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory && selectedCategory !== "all") {
      filtered = filtered.filter(post =>
        post.categories.some(category =>
          category.toLowerCase().includes(selectedCategory.toLowerCase())
        )
      );
    }

    // Filter by author
    if (selectedAuthor && selectedAuthor !== "all") {
      filtered = filtered.filter(post =>
        post.author_name.toLowerCase().includes(selectedAuthor.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  }, [posts, searchTerm, selectedCategory, selectedAuthor]);

  // Get unique categories and authors for filters
  const categories = Array.from(
    new Set(posts.flatMap(post => post.categories))
  ).sort();

  const authors = Array.from(
    new Set(posts.map(post => post.author_name))
  ).sort();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-2 text-gray-600">Loading blog posts...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950" data-page="blog">
      {/* Hero Section */}
      <div className="bg-white dark:bg-gray-900 border-b">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Blog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Stay up to date with the latest insights, tutorials, and best practices from our team.
            </p>
            
            {/* Search and Filters */}
            <div className="space-y-4">
              {/* Search Bar */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-gray-400" />
                                     <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                     <SelectTrigger className="w-40">
                       <SelectValue placeholder="All Categories" />
                     </SelectTrigger>
                     <SelectContent>
                       <SelectItem value="all">All Categories</SelectItem>
                       {categories.map(category => (
                         <SelectItem key={category} value={category}>
                           {category}
                         </SelectItem>
                       ))}
                     </SelectContent>
                   </Select>
                </div>

                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-gray-400" />
                                     <Select value={selectedAuthor} onValueChange={setSelectedAuthor}>
                     <SelectTrigger className="w-40">
                       <SelectValue placeholder="All Authors" />
                     </SelectTrigger>
                     <SelectContent>
                       <SelectItem value="all">All Authors</SelectItem>
                       {authors.map(author => (
                         <SelectItem key={author} value={author}>
                           {author}
                         </SelectItem>
                       ))}
                     </SelectContent>
                   </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 py-16">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No posts found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search or filters to find what you're looking for.
            </p>
                           <Button
                 variant="outline"
                 onClick={() => {
                   setSearchTerm("");
                   setSelectedCategory("all");
                   setSelectedAuthor("all");
                 }}
                 className="mt-4"
               >
                 Clear Filters
               </Button>
          </div>
        ) : (
          <>
            {/* Results Count */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-gray-600 dark:text-gray-400">
                Showing {filteredPosts.length} of {posts.length} posts
              </p>
                             {(searchTerm || (selectedCategory && selectedCategory !== "all") || (selectedAuthor && selectedAuthor !== "all")) && (
                 <Button
                   variant="outline"
                   onClick={() => {
                     setSearchTerm("");
                     setSelectedCategory("all");
                     setSelectedAuthor("all");
                   }}
                   size="sm"
                 >
                   Clear Filters
                 </Button>
               )}
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogCard 
                  key={post.id} 
                  post={post} 
                  variant={index === 0 ? "featured" : "default"} 
                />
              ))}
            </div>
          </>
        )}
      </div>

    </div>
  );
}
