import { AccordionFaq } from "@/components/sections/AccordionFaq";
import { BigFeature } from "@/components/sections/BigFeature";
import { Companies } from "@/components/sections/Companies";
import { Faq } from "@/components/sections/Faq";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { FeaturesList } from "@/components/sections/FeaturesList";
import Hero from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { SideFeatures } from "@/components/sections/SideFeatures";
import { Testimonials } from "@/components/sections/Testimonials";
import { TestimonialsGrid } from "@/components/sections/TestimonialsGrid";
import { PricingTable } from "@/components/sections/PricingTable";
import FeatureHero from "@/components/sections/FeaturesHero";
import { PageView } from "@/components/page-view";
import { FreeformText } from "@/components/sections/FreeformText";
import { Form } from "@/components/sections/Form";
import Portfolio from "@/components/sections/Portfolio";
import { BlogSection } from "@/components/sections/BlogSection";
import { SectionTag } from "@/components/common/SectionTag";

// Static content for the homepage
const staticHomeContent = {
  sections: [
    // Hero Section
    {
      __typename: "HeroComponent",
      _id: "hero-1",
      title: "Build the future of your business",
      subtitle: "We help brands grow through strategic marketing, standout content, and modern websites — tailored to meet your goals.",
      customerSatisfactionBanner: {
        text: "Join 10,000+ satisfied customers",
        avatars: {
          items: [
            {
              _id: "avatar-1",
              avatar: {
                alt: "Customer 1",
                url: "/p1.png",
                width: 32,
                height: 32,
                aspectRatio: "1:1",
                blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=",
              },
            },
            {
              _id: "avatar-2",
              avatar: {
                alt: "Customer 2",
                url: "p2.png",
                width: 32,
                height: 32,
                aspectRatio: "1:1",
                blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=",
              },
            },
            {
              _id: "avatar-3",
              avatar: {
                alt: "Customer 3",
                url: "p3.png",
                width: 32,
                height: 32,
                aspectRatio: "1:1",
                blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=",
              },
            },
          ],
        },
      },
      actions: [
        {
          _id: "cta-1",
          href: "/features",
          label: "Get Started",  type: "secondary",
         
        },
        {
          _id: "cta-2",
          href: "/pricing",
          label: "View Pricing",
          type: "primary",
        },
      ],
    },
    // Companies Section
    {
      __typename: "CompaniesComponent",
      _id: "companies-1",
      subtitle: "Join 4,000+ companies already growing",
      companies: [
        { _title: "ProLine", url: "#", image: { url: "/c1.svg" } },
        { _title: "hues", url: "#", image: { url: "/c2.svg" } },
        { _title: "Greenish", url: "#", image: { url: "/c3.svg" } },
        { _title: "Cloud", url: "#", image: { url: "/c4.svg" } },
        { _title: "Volume", url: "#", image: { url: "/c5.svg" } },
        { _title: "PinPoint", url: "#", image: { url: "/c6.svg" } },
      ],
    },
    {
      __typename: "CommunicationSection",
      _id: "communication-section-1"
    },
    // Features Grid Section
   
    // Features List Section
    {
      __typename: "FeaturesListComponent",
      _id: "features-list-1",
      heading: {
        title: "Why choose our platform?",
        subtitle: "Our platform offers a range of powerful features to help you succeed.",
      },
      featuresList: {
        items: [
          {
            _id: "feature-list-1",
            _title: "Powerful Analytics",
            description: "Track your website's performance and user engagement in real-time.",
            icon: {
              alt: "Analytics icon",
              url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkgMTVhNiA2IDAgMSAwIDAtMTIgNiA2IDAgMCAwIDAgMTJ6IiBmaWxsPSIjMDAwIi8+CjxwYXRoIGQ9Ik05IDN2Nmw0LTRoLTQiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=",
            },
          },
          {
            _id: "feature-list-2",
            _title: "Scalable Infrastructure",
            description: "Our platform is built to handle high traffic and scale with your business.",
            icon: {
              alt: "Scalability icon",
              url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkgMTVhNiA2IDAgMSAwIDAtMTIgNiA2IDAgMCAwIDAgMTJ6IiBmaWxsPSIjMDAwIi8+CjxwYXRoIGQ9Ik05IDN2Nmw0LTRoLTQiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=",
            },
          },
          {
            _id: "feature-list-3",
            _title: "Secure & Reliable",
            description: "Your data is protected with the latest security measures and backed by reliable infrastructure.",
            icon: {
              alt: "Security icon",
              url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkgMTVhNiA2IDAgMSAwIDAtMTIgNiA2IDAgMCAwIDAgMTJ6IiBmaWxsPSIjMDAwIi8+CjxwYXRoIGQ9Ik05IDN2Nmw0LTRoLTQiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=",
            },
          },
        ],
      },
    },
    // Big Feature Section
    {
      __typename: "FeaturesBigImageComponent",
      _id: "big-feature-1",
      tag: "Collaboration",
      image: {
        light: {
          url: "/f1.png",
          alt: "Feature image",
          width: 600,
          height: 400,
          aspectRatio: "3:2",
          blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=",
        },
        dark: {
          url: "/f1.png",
          alt: "Feature image",
          width: 600,
          height: 400,
          aspectRatio: "3:2",
          blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=",
        },
      },
      heading: {
        title: "Transform your digital presence",
        subtitle: "We help brands grow through strategic marketing, standout content, and modern websites — tailored to meet your goals.",
      },
      featuresBigImageList: {
        items: [
          {
            _title: "Social Media Growth",
            description: "We manage and grow your presence on Facebook, Instagram, and TikTok with engaging content, strategy, and targeted campaigns that build real results.",
            icon: { alt: "Communication", url: "/f1.svg" },
          },
          {
            _title: "Content That Converts",
            description: "From product photography to social media videos and branding visuals, we create high-quality content that tells your story and drives action.",
            icon: { alt: "Task Management", url: "/f2.svg" },
          },
          {
            _title: "Modern Website Development",
            description: "We build responsive, fast-loading websites that reflect your brand and make it easy for customers to connect, explore, and convert.",
            icon: { alt: "Security", url: "/f3.svg" },
          },
        ],
      },
    },
    // Side Features Section
    {
      __typename: "FeaturesSideBySideComponent",
      _id: "side-features-1",
      tag:"Services",
      heading: {
        title: "Our Services",
        subtitle: "Comprehensive social media marketing solutions tailored to grow your business and engage your audience.",
      },
      featuresSideBySideList: {
        items: [
          {
            _title: "Social Media Management",
            subtitle: "Complete management of your Facebook, Instagram, and TikTok accounts with engaging content and community management.",
            icon: {
              alt: "Ease of use icon",
              url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkgMTVhNiA2IDAgMSAwIDAtMTIgNiA2IDAgMCAwIDAgMTJ6IiBmaWxsPSIjMDAwIi8+CjxwYXRoIGQ9Ik05IDN2Nmw0LTRoLTQiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=",
            },
          },
          {
            _title: "Digital Campaign Marketing",
            subtitle: "Data-driven marketing campaigns designed to increase brand awareness and drive conversions across all platforms.",
            icon: {
              alt: "Scalability icon",
              url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkgMTVhNiA2IDAgMSAwIDAtMTIgNiA2IDAgMCAwIDAgMTJ6IiBmaWxsPSIjMDAwIi8+CjxwYXRoIGQ9Ik05IDN2Nmw0LTRoLTQiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=",
            },
          },
          {
            _title: "TikTok Live Selling Support",
            subtitle: "Comprehensive support for TikTok live selling sessions, including setup, promotion, and audience engagement strategies.",
            icon: {
              alt: "Security icon",
              url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkgMTVhNiA2IDAgMSAwIDAtMTIgNiA2IDAgMCAwIDAgMTJ6IiBmaWxsPSIjMDAwIi8+CjxwYXRoIGQ9Ik05IDN2Nmw0LTRoLTQiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=",
            },
          },
          {
            _title: "Advertising Services",
            subtitle: "Targeted advertising campaigns that maximize ROI through strategic audience targeting and compelling ad creatives.",
            icon: {
              alt: "Security icon",
              url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkgMTVhNiA2IDAgMSAwIDAtMTIgNiA2IDAgMCAwIDAgMTJ6IiBmaWxsPSIjMDAwIi8+CjxwYXRoIGQ9Ik05IDN2Nmw0LTRoLTQiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=",
            },
          },
          {
            _title: "Photo & Video Production",
            subtitle: "Professional content creation including photography, videography, and editing for all your social media needs.",
            icon: {
              alt: "Security icon",
              url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkgMTVhNiA2IDAgMSAwIDAtMTIgNiA2IDAgMCAwIDAgMTJ6IiBmaWxsPSIjMDAwIi8+CjxwYXRoIGQ9Ik05IDN2Nmw0LTRoLTQiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=",
            },
          },
          {
            _title: "Branding Services",
            subtitle: "Complete brand identity development including logo design, brand guidelines, and visual consistency across platforms.",
            icon: {
              alt: "Security icon",
              url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkgMTVhNiA2IDAgMSAwIDAtMTIgNiA2IDAgMCAwIDAgMTJ6IiBmaWxsPSIjMDAwIi8+CjxwYXRoIGQ9Ik05IDN2Nmw0LTRoLTQiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=",
            },
          },
          
        ],
      },
      actions: [
        {
          _id: "side-features-cta-1",
          href: "/contact",
          label: "Get Started",
          type: "primary",
        },
        {
          _id: "side-features-cta-2",
          href: "/portfolio",
          label: "View Portfolio",
          type: "secondary",
        },
      ],
    },
    // Callout 1
    {
      __typename: "CalloutComponent",
      _id: "callout-1",
      heading: {
        title: "Ready to get started?",
        subtitle: "Join thousands of businesses that have already transformed their digital presence.",
      },
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      actions: [
        {
          _id: "callout-1-cta-1",
          href: "/pricing",
          label: "View Pricing",
          type: "primary",
        },
      ],
    },
    // TestimonialSliderComponent
    {
      __typename: "TestimonialSliderComponent",
      _id: "testimonial-slider-1",
      heading: {
        title: "What our customers say",
        subtitle: "Don't just take our word for it. See what others have to say about our platform.",
      },
      quotes: [
        {
          _id: "quote-1",
          quote: `"Working with your team on our social media marketing changed everything. Our Instagram engagement tripled in just a month!"`,
          author: {
            _id: "author-1",
            _title: "Alyssa R.",
            role: "CEO",
            image: {
              url: "p1.png",
              alt: "John Doe",
            },
            company: {
              _title: "TechCorp",
              image: {
                url: "c1.svg",
                alt: "TechCorp",
              },
            },
          },
        },
        {
          _id: "quote-2",
          quote: `"The website you built for us is fast, clean, and professional. Our inquiries have doubled since launch!"`,
          author: {
            _id: "author-2",
            _title: "Jane Smith",
            role: "CTO",
            image: {
              url: "p2.png",
              alt: "Jane Smith",
            },
            company: {
              _title: "Startup",
              image: {
                url: "c2.svg",
                alt: "Startup",
              },
            },
          },
        },
        {
          _id: "quote-3",
          quote: `"The photo and video production captured exactly what our brand stands for. Top-tier quality and great communication!"`,
          author: {
            _id: "author-3",
            _title: "Lebron James",
            role: "CEO",
            image: {
              url: "p3.png",
              alt: "Jane Smith",
            },
            company: {
              _title: "NBA",
              image: {
                url: "c4.svg",
                alt: "Startup",
              },
            },
          },
        },
      ],
    },
    // Pricing Section
    {
      __typename: "PricingComponent",
      _id: "pricing-1",
      tag: "Pricing",
      heading: {
        title: "Choose the plan that's right for you",
        subtitle: "We offer flexible pricing options to suit your needs.",
      },
      plans: {
        items: [
          {
            plan: {
              _id: "plan-1",
              _title: "Starter",
              price: "$199/project",
              billed: "One-time payment",
              isMostPopular: false,
              list: {
                items: [
                  { _id: "feature-1", _title: "Basic Social Media Management (1 platform)" },
                  { _id: "feature-2", _title: "1 Branded Graphic per week" },
                  { _id: "feature-3", _title: "Simple Website (Landing Page)" },
                  { _id: "feature-4", _title: "Email Support" },
                ],
              },
            },
          },
          {
            plan: {
              _id: "plan-2",
              _title: "Pro",
              price: "$499/project",
              billed: "One-time payment",
              isMostPopular: true,
              list: {
                items: [
                  { _id: "feature-1", _title: "Social Media Marketing (3 platforms)" },
                  { _id: "feature-2", _title: "TikTok Live Selling Assistance" },
                  { _id: "feature-3", _title: "Standard Website (up to 5 pages)" },
                  { _id: "feature-4", _title: "Photo & Video Content Creation" },
                ],
              },
            },
          },
          {
            plan: {
              _id: "plan-3",
              _title: "Enterprise",
              price: "Custom Pricing",
              billed: "Based on project scope",
              isMostPopular: false,
              list: {
                items: [
                  { _id: "feature-1", _title: "Full Service Branding + Strategy" },
                  { _id: "feature-2", _title: "Advanced Web Development (Custom Features)" },
                  { _id: "feature-3", _title: "Dedicated Account Manager" },
                  { _id: "feature-4", _title: "Complete Social Media + Ad Campaign Management" },
                ],
              },
            },
          },
        ]
        
      },
    },
    // FAQ Section
    {
      __typename: "FaqComponent",
      _id: "faq-1",
      tag: "FAQs",
      heading: {
        title: "Frequently Asked Questions",
        subtitle: "Advice and answers from the our team",
      },
      questions: {
        items: [
          {
            _id: "faq-1",
            _title: "What services do you offer?",
            answer: "We offer social media marketing and management, TikTok live selling, digital campaign creation, photo and video production, branding services, and web development.",
          },
          {
            _id: "faq-2",
            _title: "Can you manage all our social media accounts?",
            answer: "Yes! We manage Facebook, Instagram, and TikTok accounts—handling content creation, posting, engagement, and ad campaigns.",
          },
          {
            _id: "faq-3",
            _title: "Do you provide TikTok Live Selling support?",
            answer: "Absolutely! We help plan, host, and optimize TikTok live selling events to boost visibility and sales.",
          },
          {
            _id: "faq-4",
            _title: "How long does it take to build a website?",
            answer: "It typically takes 2 to 4 weeks depending on the project's size and requirements. We work closely with you during each stage.",
          },
          {
            _id: "faq-5",
            _title: "Can you create custom branding for our business?",
            answer: "Yes, we offer full branding services including logo design, brand guidelines, and visual identity tailored to your market and goals.",
          },
          {
            _id: "faq-6",
            _title: "What’s included in your content production service?",
            answer: "Our team handles photography, videography, editing, and formatting for social media, websites, and ads to ensure high-quality branded visuals.",
          }
        ]
        
      },
    },
    
  
  ],
  settings: {
    logo: {
      dark: {
        url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMDAwIi8+Cjx0ZXh0IHg9IjYwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TG9nbzwvdGV4dD4KPC9zdmc+",
        alt: "Logo",
        width: 120,
        height: 40,
        aspectRatio: "3:1",
        blurDataURL: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMDAwIi8+Cjx0ZXh0IHg9IjYwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TG9nbzwvdGV4dD4KPC9zdmc+",
      },
      light: {
        url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMDAwIi8+Cjx0ZXh0IHg9IjYwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TG9nbzwvdGV4dD4KPC9zdmc+",
        alt: "Logo",
        width: 120,
        height: 40,
        aspectRatio: "3:1",
        blurDataURL: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMDAwIi8+Cjx0ZXh0IHg9IjYwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TG9nbzwvdGV4dD4KPC9zdmc+",
      },
    },
    logoLite: {
      url: "/placeholder-logo.svg",
      width: 32,
      height: 32,
    },
  },
};

// --- staticHomeContent: Insert BlogSectionComponent after FAQ section ---
// Find the index of the FAQ section
const faqIndex = staticHomeContent.sections.findIndex(
  (section) => section.__typename === "FaqComponent"
);
// Only insert if not already present
if (
  faqIndex !== -1 &&
  !staticHomeContent.sections.some((s) => s.__typename === "BlogSectionComponent")
) {
  staticHomeContent.sections.splice(faqIndex + 1, 0, {
    __typename: "BlogSectionComponent",
    _id: "blog-section-1",
  });
}

function SectionsUnion({
  sections,
  eventsKey,
  settings,
}: {
  sections: any[];
  eventsKey: string;
  settings: any;
}): React.ReactNode {
  if (!sections) return null;

  return sections.map((comp) => {
    switch (comp.__typename) {
      case "HeroComponent":
        return <Hero {...comp} key={comp._id} eventsKey={eventsKey} />;
      case "FeaturesCardsComponent":
        return <FeaturesList {...comp} key={comp._id} />;
      case "FeaturesGridComponent":
        return <FeaturesGrid {...comp} key={comp._id} eventsKey={eventsKey} />;
      case "CompaniesComponent":
        return <Companies {...comp} key={comp._id} />;
      case "FeaturesBigImageComponent":
        return <BigFeature {...comp} key={comp._id} />;
      case "FeaturesSideBySideComponent":
        return <SideFeatures {...comp} key={comp._id} eventsKey={eventsKey} />;
      case "TestimonialSliderComponent":
        return <Testimonials {...comp} key={comp._id} />;
      case "PricingComponent":
        return <Pricing {...comp} key={comp._id} />;
      case "FaqComponent":
        return <Faq {...comp} key={comp._id} />;
      case "AccordionFaqComponent":
        return <AccordionFaq {...comp} key={comp._id} eventsKey={eventsKey} />;
      case "PricingTableComponent":
        return <PricingTable {...comp} key={comp._id} />;
      case "FeatureHeroComponent":
        return <FeatureHero {...comp} key={comp._id} eventsKey={eventsKey} />;
      case "FreeformTextComponent":
        return <FreeformText {...comp} key={comp._id} />;
      case "FormComponent":
        return <Form {...comp} key={comp._id} settingsLogoLite={settings} />;
      case "CommunicationSection":
        return <Portfolio key={comp._id} />;
      case "BlogSectionComponent":
        return <BlogSection key={comp._id} />;
      default:
        return null;
    }
  });
}

export default function HomePage() {
  const sections = staticHomeContent.sections;
  const generalEvents = { ingestKey: "demo-key" };
  const settings = staticHomeContent.settings;

  return (
    <>
      <PageView ingestKey={generalEvents.ingestKey} />
      <SectionsUnion sections={sections} eventsKey={generalEvents.ingestKey} settings={settings} />
    </>
  );
}
