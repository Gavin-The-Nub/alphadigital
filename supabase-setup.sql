-- Create the blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  content TEXT NOT NULL,
  author_name TEXT NOT NULL,
  author_avatar TEXT DEFAULT '/placeholder-user.jpg',
  categories TEXT[] DEFAULT '{}',
  image TEXT DEFAULT '/placeholder.jpg',
  published_at DATE DEFAULT CURRENT_DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access" ON blog_posts
  FOR SELECT USING (true);

-- Create policy to allow authenticated users to insert
CREATE POLICY "Allow authenticated users to insert" ON blog_posts
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Create policy to allow authenticated users to update
CREATE POLICY "Allow authenticated users to update" ON blog_posts
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Create policy to allow authenticated users to delete
CREATE POLICY "Allow authenticated users to delete" ON blog_posts
  FOR DELETE USING (auth.role() = 'authenticated');

-- Create a function to automatically update the updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create a trigger to automatically update the updated_at column
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert some sample data
INSERT INTO blog_posts (title, description, content, author_name, categories, image) VALUES
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
2. **Engagement**
3. **Analytics**
4. **Paid Ads**

## Conclusion

SMM in 2025 is all about authenticity, short-form video, and community engagement.',
  'Ian Lodor',
  ARRAY['SMM', 'Marketing', 'TikTok', 'Facebook', 'Instagram'],
  '/b1.webp'
),
(
  'Why Every Brand Needs a Professional Website',
  'A strong online presence starts with a fast, functional, and beautiful website. Learn how web development fuels credibility and conversions.',
  '# Why Every Brand Needs a Professional Website

Your website is often your brand''s first impression. Make it count.

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

A website is more than just a digital flyer — it''s your brand''s home on the internet.',
  'Ian Lodor',
  ARRAY['Web Development', 'Branding', 'Design'],
  '/b4.jpg'
); 