-- Insert sample blog posts data into Supabase
-- Run this in your Supabase SQL Editor

-- First, make sure the blog_posts table exists (run the table creation first if needed)
-- CREATE TABLE IF NOT EXISTS blog_posts (
--   id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
--   title TEXT NOT NULL,
--   description TEXT NOT NULL,
--   content TEXT NOT NULL,
--   author_name TEXT NOT NULL,
--   author_avatar TEXT DEFAULT '/placeholder-user.jpg',
--   categories TEXT[] DEFAULT '{}',
--   image TEXT DEFAULT '/placeholder.jpg',
--   published_at DATE DEFAULT CURRENT_DATE,
--   created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
--   updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
-- );

-- Clear existing data (optional - remove this if you want to keep existing data)
-- DELETE FROM blog_posts;

-- Insert sample blog posts
INSERT INTO blog_posts (title, description, content, author_name, categories, image, published_at) VALUES
(
  'Mastering Social Media Marketing in 2025',
  'Discover how to manage and grow your brand across Facebook, TikTok, and Instagram using modern social media strategies.',
  '# Mastering Social Media Marketing in 2025

Social Media Marketing (SMM) is one of the most powerful tools for connecting with your audience, building brand awareness, and driving sales.

## Key Platforms

- **Facebook**: Community building, groups, and ads.
- **Instagram**: Visual storytelling, Reels, and influencer marketing.
- **TikTok**: Viral content, trends, and live selling potential.

## Strategies That Work

1. **Content Planning**
   - Create a content calendar
   - Plan themes and topics
   - Schedule posts in advance

2. **Engagement**
   - Respond to comments quickly
   - Use polls and questions
   - Host live sessions

3. **Analytics**
   - Track performance metrics
   - Monitor audience growth
   - Analyze best posting times

4. **Paid Ads**
   - Target specific audiences
   - A/B test ad creatives
   - Optimize for conversions

## Conclusion

SMM in 2025 is all about authenticity, short-form video, and community engagement. Focus on building genuine connections with your audience.',
  'Ian Lodor',
  ARRAY['SMM', 'Marketing', 'TikTok', 'Facebook', 'Instagram'],
  '/b1.webp',
  '2025-01-15'
),
(
  'Why Every Brand Needs a Professional Website',
  'A strong online presence starts with a fast, functional, and beautiful website. Learn how web development fuels credibility and conversions.',
  '# Why Every Brand Needs a Professional Website

Your website is often your brand''s first impression. Make it count.

## Benefits of a Website

- **Builds trust and legitimacy**: Professional websites establish credibility
- **Showcases products or services**: 24/7 product catalog
- **Works 24/7**: Unlike social media, your website never sleeps
- **Owns your audience**: No algorithm changes to worry about

## Features to Include

1. **Mobile responsiveness** - 60% of traffic comes from mobile
2. **Fast load times** - Users expect pages to load in 2 seconds
3. **Clear call-to-actions** - Guide visitors to take action
4. **Contact or inquiry form** - Make it easy to reach you
5. **Integration with analytics and SEO** - Track performance

## Tech Stack Examples

- **Frontend**: Next.js, Tailwind CSS, React
- **Backend**: Firebase, Supabase, Node.js
- **Hosting**: Vercel, Netlify, AWS

## Conclusion

A website is more than just a digital flyer — it''s your brand''s home on the internet.',
  'Ian Lodor',
  ARRAY['Web Development', 'Branding', 'Design'],
  '/b4.jpg',
  '2025-01-10'
),
(
  'The Future of Digital Marketing: AI and Automation',
  'Explore how artificial intelligence is revolutionizing digital marketing and what it means for businesses in 2025.',
  '# The Future of Digital Marketing: AI and Automation

Artificial Intelligence is transforming how we approach digital marketing, making campaigns more efficient and personalized than ever before.

## AI in Marketing Today

### **Personalization**
- Dynamic content based on user behavior
- Personalized email campaigns
- Custom product recommendations

### **Automation**
- Chatbots for customer service
- Automated email sequences
- Social media scheduling

### **Analytics**
- Predictive analytics
- Customer behavior analysis
- ROI optimization

## Key AI Tools

1. **ChatGPT** - Content creation and ideation
2. **Midjourney** - Visual content generation
3. **Google Analytics 4** - Advanced tracking
4. **HubSpot** - Marketing automation

## Getting Started with AI Marketing

1. **Start Small** - Begin with one AI tool
2. **Test and Learn** - Experiment with different approaches
3. **Measure Results** - Track performance improvements
4. **Scale Up** - Expand successful strategies

## Conclusion

AI isn''t replacing marketers—it''s making them more effective. Embrace these tools to stay competitive.',
  'Sarah Chen',
  ARRAY['AI', 'Digital Marketing', 'Automation', 'Technology'],
  '/b2.jpg',
  '2025-01-08'
),
(
  'Building a Strong Brand Identity: A Complete Guide',
  'Learn the essential elements of brand identity and how to create a memorable, consistent brand that resonates with your audience.',
  '# Building a Strong Brand Identity: A Complete Guide

Your brand identity is more than just a logo—it''s the complete visual and emotional experience your audience has with your business.

## Elements of Brand Identity

### **Visual Elements**
- Logo design and variations
- Color palette and typography
- Imagery and photography style
- Website and social media design

### **Brand Voice**
- Tone of communication
- Messaging and taglines
- Content style and personality

### **Brand Values**
- Mission and vision statements
- Core values and beliefs
- Brand promise and positioning

## Creating Your Brand Identity

1. **Research Your Audience**
   - Understand their needs and preferences
   - Analyze competitor brands
   - Identify market gaps

2. **Define Your Brand**
   - Create brand guidelines
   - Develop brand messaging
   - Design visual elements

3. **Implement Consistently**
   - Apply across all touchpoints
   - Train your team
   - Monitor and maintain

## Brand Identity Examples

- **Apple**: Minimalist, innovative, premium
- **Nike**: Inspirational, athletic, empowering
- **Coca-Cola**: Classic, friendly, universal

## Conclusion

A strong brand identity creates trust, recognition, and loyalty. Invest time in building yours.',
  'Maria Rodriguez',
  ARRAY['Branding', 'Design', 'Marketing', 'Strategy'],
  '/b3.png',
  '2025-01-05'
),
(
  'SEO Best Practices for 2025: What You Need to Know',
  'Stay ahead of the competition with the latest SEO strategies and techniques that will dominate search rankings this year.',
  '# SEO Best Practices for 2025: What You Need to Know

Search Engine Optimization continues to evolve, and staying updated with the latest practices is crucial for online success.

## Core Web Vitals

### **Loading Performance**
- Largest Contentful Paint (LCP) < 2.5s
- First Input Delay (FID) < 100ms
- Cumulative Layout Shift (CLS) < 0.1

### **Mobile-First Indexing**
- Optimize for mobile devices first
- Ensure responsive design
- Test mobile user experience

## Content Strategy

### **Quality Content**
- Create comprehensive, valuable content
- Answer user questions thoroughly
- Use natural language and conversational tone

### **Technical SEO**
- Optimize page speed
- Implement structured data
- Use semantic HTML

## 2025 SEO Trends

1. **Voice Search Optimization**
   - Long-tail keywords
   - Natural language queries
   - Featured snippets

2. **E-A-T (Expertise, Authority, Trust)**
   - Author credentials
   - Site reputation
   - Content accuracy

3. **Core Web Vitals**
   - Page experience signals
   - User engagement metrics
   - Technical performance

## Conclusion

Focus on user experience, quality content, and technical excellence for SEO success in 2025.',
  'David Kim',
  ARRAY['SEO', 'Digital Marketing', 'Web Development', 'Analytics'],
  '/b5.jpg',
  '2025-01-03'
),
(
  'Email Marketing Strategies That Convert',
  'Discover proven email marketing techniques that drive engagement, build relationships, and increase sales.',
  '# Email Marketing Strategies That Convert

Email marketing remains one of the most effective digital marketing channels, with an average ROI of $42 for every $1 spent.

## Building Your Email List

### **Lead Magnets**
- Free ebooks and guides
- Webinars and courses
- Discount codes and offers
- Newsletter subscriptions

### **Opt-in Forms**
- Strategic placement on website
- Clear value proposition
- Simple, frictionless design

## Email Campaign Types

### **Welcome Series**
- Introduce your brand
- Set expectations
- Provide immediate value

### **Nurture Campaigns**
- Educational content
- Product benefits
- Customer testimonials

### **Promotional Campaigns**
- Limited-time offers
- Product launches
- Seasonal promotions

## Best Practices

1. **Personalization**
   - Use subscriber names
   - Segment your audience
   - Dynamic content

2. **Subject Lines**
   - Keep them short and compelling
   - Create urgency or curiosity
   - A/B test different options

3. **Mobile Optimization**
   - Responsive design
   - Readable font sizes
   - Clear call-to-actions

## Conclusion

Email marketing is about building relationships. Focus on providing value and maintaining consistency.',
  'Jennifer Lee',
  ARRAY['Email Marketing', 'Digital Marketing', 'Conversion', 'Automation'],
  '/b6.jpg',
  '2025-01-01'
); 