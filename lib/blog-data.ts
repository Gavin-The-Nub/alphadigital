

export interface BlogPost {
  id: string
  title: string
  description: string
  content: string
  publishedAt: string
  author: {
    name: string
    avatar: string
  }
  categories: string[]
  image: string
}

export const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "Mastering Social Media Marketing in 2025",
      description:
        "Discover how to manage and grow your brand across Facebook, TikTok, and Instagram using modern social media strategies.",
      content: `
  # Mastering Social Media Marketing in 2025
  
  Social Media Marketing (SMM) is one of the most powerful tools for connecting with your audience, building brand awareness, and driving sales.
  
  ## Key Platforms
  
  - **Facebook**: Community building, groups, and ads.
  - **Instagram**: Visual storytelling, Reels, and influencer marketing.
  - **TikTok**: Viral content, trends, and live selling potential.
  
  ## Strategies That Work
  
  1. **Content Planning**
  2. **Engagement**
  3. **Analytics**
  4. **Paid Ads**
  
  ## Conclusion
  
  SMM in 2025 is all about authenticity, short-form video, and community engagement.
      `,
      publishedAt: "2025-07-13",
      author: {
        name: "Ian Lodor",
        avatar: "/p3.png",
      },
      categories: ["SMM", "Marketing", "TikTok", "Facebook", "Instagram"],
      image: "/b1.webp",
    },
    {
      id: "2",
      title: "TikTok Live Selling: The Future of E-Commerce",
      description:
        "Learn how to leverage TikTok Live for real-time product showcasing, engagement, and conversion.",
      content: `
  # TikTok Live Selling: The Future of E-Commerce
  
  TikTok Live Selling combines entertainment and real-time shopping, creating a powerful sales channel for modern brands.
  
  ## Why It Works
  
  - Interactive engagement with viewers
  - Real-time product demonstrations
  - Instant feedback and Q&A
  
  ## Best Practices
  
  1. Prepare scripts or key talking points
  2. Highlight product benefits clearly
  3. Use a good camera + lighting setup
  4. Promote the live event in advance
  
  ## Conclusion
  
  Live selling on TikTok is an opportunity you shouldn't miss—especially if your audience is Gen Z or Millennials.
      `,
      publishedAt: "2025-07-11",
      author: {
        name: "Elon Musk",
        avatar: "/p1.png",
      },
      categories: ["TikTok", "Live Selling", "E-Commerce"],
      image: "/b2.jpg",
    },
    {
      id: "3",
      title: "Creating High-Impact Photo and Video Content",
      description:
        "Explore how professional photo and video production can elevate your brand and increase conversions.",
      content: `
  # Creating High-Impact Photo and Video Content
  
  Visual content grabs attention, tells your brand story, and builds trust.
  
  ## Types of Content
  
  - Product photography
  - Brand videos
  - Testimonial videos
  - Reels and short-form video
  
  ## Production Tips
  
  1. Use natural lighting or softbox
  2. Keep background clutter-free
  3. Shoot multiple angles
  4. Optimize for vertical and square formats
  
  ## Editing Tools
  
  - Adobe Premiere Pro
  - CapCut (for TikTok)
  - Lightroom / Photoshop
  
  ## Conclusion
  
  Strong visuals separate amateur brands from professional ones. Invest in content creation to stand out.
      `,
      publishedAt: "2025-07-09",
      author: {
        name: "Lebron James",
        avatar: "/p2.png",
      },
      categories: ["Content Creation", "Video", "Photography"],
      image: "/b3.png",
    },
    {
      id: "4",
      title: "Why Every Brand Needs a Professional Website",
      description:
        "A strong online presence starts with a fast, functional, and beautiful website. Learn how web development fuels credibility and conversions.",
      content: `
  # Why Every Brand Needs a Professional Website
  
  Your website is often your brand's first impression. Make it count.
  
  ## Benefits of a Website
  
  - Builds trust and legitimacy
  - Showcases products or services
  - Works 24/7 unlike social media
  
  ## Features to Include
  
  1. Mobile responsiveness
  2. Fast load times
  3. Clear call-to-actions
  4. Contact or inquiry form
  5. Integration with analytics and SEO
  
  ## Tech Stack Examples
  
  - **Frontend**: Next.js, Tailwind CSS
  - **Backend**: Firebase, Supabase
  - **Hosting**: Vercel, Netlify
  
  ## Conclusion
  
  A website is more than just a digital flyer — it's your brand’s home on the internet.
      `,
      publishedAt: "2025-07-07",
      author: {
        name: "Ian Lodor",
        avatar: "/p1.png",
      },
      categories: ["Web Development", "Branding", "Design"],
      image: "/b4.jpg",
    },
  ]
  
export const getBlogPosts = () => blogPosts

export const getBlogPost = (id: string) => blogPosts.find((post) => post.id === id)

export const getFeaturedPosts = (limit = 3) => blogPosts.slice(0, limit)
