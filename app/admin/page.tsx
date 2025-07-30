"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PlusIcon, PencilIcon, TrashIcon, EyeIcon, LogOutIcon, ArrowLeftIcon } from "lucide-react";
import { ImageUpload } from "@/components/ui/image-upload";
import { supabase } from "@/lib/supabase-client";
import { useRouter } from "next/navigation";
import { getBlogPosts, createBlogPost, updateBlogPost, deleteBlogPost, type BlogPost } from "@/lib/supabase-blog";


export default function AdminPage() {
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    author_name: "",
    categories: "",
    image: "",
  });

  // Load blog posts on component mount
  useEffect(() => {
    loadBlogPosts();
  }, []);

  const loadBlogPosts = async () => {
    setLoading(true);
    const posts = await getBlogPosts();
    setPosts(posts);
    setLoading(false);
  };

  const handleAddPost = async () => {
    const newPost = {
      title: formData.title,
      description: formData.description,
      content: formData.content,
      author_name: formData.author_name,
      author_avatar: "/placeholder-user.jpg",
      categories: formData.categories.split(',').map(cat => cat.trim()),
      image: formData.image,
      published_at: new Date().toISOString().split('T')[0],
    };

    const createdPost = await createBlogPost(newPost);
    if (createdPost) {
      setPosts([createdPost, ...posts]);
      setFormData({
        title: "",
        description: "",
        content: "",
        author_name: "",
        categories: "",
        image: "",
      });
      setIsAddDialogOpen(false);
    }
  };

  const handleEditPost = async () => {
    if (!editingPost) return;

    const updates = {
      title: formData.title,
      description: formData.description,
      content: formData.content,
      author_name: formData.author_name,
      categories: formData.categories.split(',').map(cat => cat.trim()),
      image: formData.image,
    };

    const updatedPost = await updateBlogPost(editingPost.id, updates);
    if (updatedPost) {
      setPosts(posts.map(post => post.id === editingPost.id ? updatedPost : post));
      setEditingPost(null);
      setFormData({
        title: "",
        description: "",
        content: "",
        author_name: "",
        categories: "",
        image: "",
      });
      setIsEditDialogOpen(false);
    }
  };

  const handleDeletePost = async (id: string) => {
    if (confirm("Are you sure you want to delete this post?")) {
      const success = await deleteBlogPost(id);
      if (success) {
        setPosts(posts.filter(post => post.id !== id));
      }
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  const openEditDialog = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      description: post.description,
      content: post.content,
      author_name: post.author_name,
      categories: post.categories.join(', '),
      image: post.image,
    });
    setIsEditDialogOpen(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-8">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl lg:text-3xl font-bold hidden sm:block">Blog Admin</h1>
            <h1 className="text-xl font-bold sm:hidden">Admin</h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base">Manage your blog posts</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                onClick={() => router.push("/")} 
                className="flex items-center gap-2 text-sm"
              >
                <ArrowLeftIcon className="h-4 w-4" />
                <span className="hidden sm:inline">Return to Website</span>
                <span className="sm:hidden">Back</span>
              </Button>
              <Button variant="outline" onClick={handleSignOut} className="flex items-center gap-2 text-sm">
                <LogOutIcon className="h-4 w-4" />
                <span className="hidden sm:inline">Logout</span>
                <span className="sm:hidden">Out</span>
              </Button>
            </div>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2 text-sm">
                  <PlusIcon className="h-4 w-4" />
                  <span className="hidden sm:inline">Add New Post</span>
                  <span className="sm:hidden">Add Post</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto w-[95vw] sm:w-auto">
                <DialogHeader>
                  <DialogTitle>Add New Blog Post</DialogTitle>
                  <DialogDescription>
                    Create a new blog post with all the necessary details.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="Enter post title"
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Enter post description"
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="content">Content (Markdown)</Label>
                    <Textarea
                      id="content"
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      placeholder="Enter post content in markdown format"
                      rows={8}
                    />
                  </div>
                  <div>
                    <Label htmlFor="author_name">Author Name</Label>
                    <Input
                      id="author_name"
                      value={formData.author_name}
                      onChange={(e) => setFormData({ ...formData, author_name: e.target.value })}
                      placeholder="Enter author name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="categories">Categories (comma-separated)</Label>
                    <Input
                      id="categories"
                      value={formData.categories}
                      onChange={(e) => setFormData({ ...formData, categories: e.target.value })}
                      placeholder="e.g., Marketing, Social Media, Web Development"
                    />
                  </div>
                  <div>
                    <Label htmlFor="image">Blog Image</Label>
                    <ImageUpload
                      value={formData.image}
                      onChange={(value) => setFormData({ ...formData, image: value })}
                      placeholder="Upload blog image"
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleAddPost}>Add Post</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Blog Posts</CardTitle>
            <CardDescription>
              Manage your blog posts. You can edit, delete, or view each post.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead className="hidden md:table-cell">Author</TableHead>
                    <TableHead className="hidden lg:table-cell">Categories</TableHead>
                    <TableHead className="hidden md:table-cell">Published</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {posts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell className="font-medium">
                        <div>
                          <div className="font-medium">{post.title}</div>
                          <div className="text-sm text-gray-500 md:hidden">
                            {post.author_name} • {post.published_at}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">{post.author_name}</TableCell>
                      <TableCell className="hidden lg:table-cell">
                        <div className="flex flex-wrap gap-1">
                          {post.categories.map((category, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-200"
                            >
                              {category}
                            </span>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">{post.published_at}</TableCell>
                      <TableCell>
                        <div className="flex gap-1 sm:gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => openEditDialog(post)}
                            className="h-8 w-8 p-0 sm:h-9 sm:w-auto sm:px-3"
                          >
                            <PencilIcon className="h-4 w-4" />
                            <span className="hidden sm:inline ml-1">Edit</span>
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(`/blog/${post.id}`, '_blank')}
                            className="h-8 w-8 p-0 sm:h-9 sm:w-auto sm:px-3"
                          >
                            <EyeIcon className="h-4 w-4" />
                            <span className="hidden sm:inline ml-1">View</span>
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDeletePost(post.id)}
                            className="h-8 w-8 p-0 sm:h-9 sm:w-auto sm:px-3 text-red-600 hover:text-red-700"
                          >
                            <TrashIcon className="h-4 w-4" />
                            <span className="hidden sm:inline ml-1">Delete</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Edit Dialog */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto w-[95vw] sm:w-auto">
            <DialogHeader>
              <DialogTitle>Edit Blog Post</DialogTitle>
              <DialogDescription>
                Update the blog post details.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="edit-title">Title</Label>
                <Input
                  id="edit-title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Enter post title"
                />
              </div>
              <div>
                <Label htmlFor="edit-description">Description</Label>
                <Textarea
                  id="edit-description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Enter post description"
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="edit-content">Content (Markdown)</Label>
                <Textarea
                  id="edit-content"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Enter post content in markdown format"
                  rows={8}
                />
              </div>
              <div>
                <Label htmlFor="edit-author_name">Author Name</Label>
                <Input
                  id="edit-author_name"
                  value={formData.author_name}
                  onChange={(e) => setFormData({ ...formData, author_name: e.target.value })}
                  placeholder="Enter author name"
                />
              </div>
              <div>
                <Label htmlFor="edit-categories">Categories (comma-separated)</Label>
                <Input
                  id="edit-categories"
                  value={formData.categories}
                  onChange={(e) => setFormData({ ...formData, categories: e.target.value })}
                  placeholder="e.g., Marketing, Social Media, Web Development"
                />
              </div>
              <div>
                <Label htmlFor="edit-image">Blog Image</Label>
                <ImageUpload
                  value={formData.image}
                  onChange={(value) => setFormData({ ...formData, image: value })}
                  placeholder="Upload blog image"
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleEditPost}>Update Post</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
} 