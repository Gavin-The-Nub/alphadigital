"use client";
import { useState } from "react";
import { ButtonLink } from "@/components/common/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Calendar, Users, Target, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  duration: string;
  teamSize: string;
  brief: string;
  solution: string;
  results: string[];
  technologies: string[];
  images: {
    main: string;
    gallery: string[];
  };
  featured: boolean;
}

const caseStudies: CaseStudy[] = [
  {
    id: "social-media-management",
    title: "Complete Social Media Management",
    client: "BeautyGlow Cosmetics",
    category: "Social Media Management",
    duration: "6 months",
    teamSize: "3 people",
    brief: "BeautyGlow Cosmetics needed comprehensive social media management across Facebook, Instagram, and TikTok to increase brand awareness and drive sales. Their existing social presence was inconsistent and lacked engagement.",
    solution: "We implemented a complete social media management strategy including content creation, community management, engagement strategies, and performance tracking. We created engaging content calendars, managed daily interactions, and developed brand voice guidelines.",
    results: [
      "300% increase in social media followers",
      "85% improvement in engagement rate",
      "40% increase in website traffic from social",
      "25% boost in online sales"
    ],
    technologies: ["Facebook Business", "Instagram Business", "TikTok Creator Studio", "Canva Pro", "Buffer"],
    images: {
      main: "/a1.png",
      gallery: ["/a1.png", "/a2.png", "/a3.png", "/a4.png", "/a5.png", "/a6.jpg"]
    },
    featured: true
  },
  {
    id: "tiktok-live-selling",
    title: "TikTok Live Selling Campaign",
    client: "FashionForward Boutique",
    category: "TikTok Live Selling",
    duration: "3 months",
    teamSize: "4 people",
    brief: "FashionForward Boutique wanted to launch TikTok live selling to reach younger audiences and increase sales. They needed support with live session planning, promotion, and audience engagement strategies.",
    solution: "We provided comprehensive TikTok live selling support including session planning, content creation, audience building, live hosting assistance, and post-session analytics. We developed engaging scripts and promotional strategies.",
    results: [
      "500% increase in TikTok followers",
      "$15K+ in live session sales",
      "Average 2K+ viewers per session",
      "90% customer satisfaction rate"
    ],
    technologies: ["TikTok Live", "TikTok Ads", "Streamlabs", "OBS Studio", "Analytics Tools"],
    images: {
      main: "/a2.png",
      gallery: ["/a2.png", "/a1.png", "/a3.png", "/a4.png", "/a5.png", "/a6.jpg"]
    },
    featured: true
  },
  {
    id: "digital-campaign-marketing",
    title: "Multi-Platform Digital Campaign",
    client: "TechStart Solutions",
    category: "Digital Campaign Marketing",
    duration: "4 months",
    teamSize: "5 people",
    brief: "TechStart Solutions needed a comprehensive digital marketing campaign to launch their new SaaS product. They wanted to increase brand awareness and generate qualified leads across multiple platforms.",
    solution: "We developed a data-driven marketing campaign across Facebook, Instagram, Google Ads, and LinkedIn. The campaign included targeted advertising, content marketing, email sequences, and conversion optimization strategies.",
    results: [
      "200% increase in brand awareness",
      "150 qualified leads generated",
      "35% improvement in conversion rate",
      "40% reduction in cost per acquisition"
    ],
    technologies: ["Facebook Ads", "Google Ads", "LinkedIn Ads", "Mailchimp", "Google Analytics"],
    images: {
      main: "/a3.png",
      gallery: ["/a3.png", "/a1.png", "/a2.png", "/a4.png", "/a5.png", "/a6.jpg"]
    },
    featured: false
  },
  {
    id: "photo-video-production",
    title: "Professional Content Production",
    client: "LuxeInterior Design",
    category: "Photo & Video Production",
    duration: "2 months",
    teamSize: "3 people",
    brief: "LuxeInterior Design needed professional photography and video content for their social media, website, and marketing materials. They wanted to showcase their interior design projects with high-quality visuals.",
    solution: "We provided comprehensive photo and video production services including professional photography, video creation, editing, and content optimization for various platforms. We created branded content that highlighted their design expertise.",
    results: [
      "Professional portfolio of 50+ images",
      "10 high-quality video testimonials",
      "Consistent brand visual identity",
      "60% increase in social media engagement"
    ],
    technologies: ["Adobe Photoshop", "Adobe Premiere Pro", "Canon EOS R5", "DJI Drone", "Lightroom"],
    images: {
      main: "/a4.png",
      gallery: ["/a4.png", "/a1.png", "/a2.png", "/a3.png", "/a5.png", "/a6.jpg"]
    },
    featured: false
  },
  {
    id: "branding-services",
    title: "Complete Brand Identity Development",
    client: "EcoFresh Foods",
    category: "Branding Services",
    duration: "8 weeks",
    teamSize: "3 people",
    brief: "EcoFresh Foods, a new organic food delivery service, needed a complete brand identity system to establish themselves in the competitive food delivery market and appeal to health-conscious consumers.",
    solution: "We developed a comprehensive brand identity including logo design, color palette, typography, brand guidelines, and visual assets. The design emphasized freshness, sustainability, and health while maintaining modern appeal.",
    results: [
      "Complete brand identity system",
      "Consistent visual presence across platforms",
      "Strong market differentiation",
      "Positive customer feedback on brand recognition"
    ],
    technologies: ["Adobe Illustrator", "Figma", "Brand Guidelines", "Print Design", "Digital Assets"],
    images: {
      main: "/a5.png",
      gallery: ["/a5.png", "/a1.png", "/a2.png", "/a3.png", "/a4.png", "/a6.jpg"]
    },
    featured: false
  },
  {
    id: "web-development",
    title: "Modern Website Development",
    client: "FitLife Studio",
    category: "Web Development",
    duration: "6 weeks",
    teamSize: "4 people",
    brief: "FitLife Studio needed a modern, responsive website that would showcase their fitness services, allow online booking, and integrate with their social media presence. The existing site was outdated and not mobile-friendly.",
    solution: "We built a modern, responsive website with online booking functionality, social media integration, and SEO optimization. The site featured a clean design, fast loading times, and seamless user experience across all devices.",
    results: [
      "Modern, responsive website",
      "50% increase in online bookings",
      "40% improvement in page load speed",
      "Mobile-first design implementation"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Vercel"],
    images: {
      main: "/a6.jpg",
      gallery: ["/a6.jpg", "/a1.png", "/a2.png", "/a3.png", "/a4.png", "/a5.png"]
    },
    featured: false
  }
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const categories = ["all", ...Array.from(new Set(caseStudies.map(cs => cs.category)))];
  
  const filteredCaseStudies = selectedCategory === "all" 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Case Studies
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their digital presence and achieve remarkable results through strategic design, development, and marketing solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  {category === "all" ? "All Projects" : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((caseStudy) => (
              <Card 
                key={caseStudy.id} 
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedCaseStudy(caseStudy)}
              >
                <div className="relative h-48">
                  <Image
                    src={caseStudy.images.main}
                    alt={caseStudy.title}
                    fill
                    className="object-cover"
                  />
                  {caseStudy.featured && (
                    <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      {caseStudy.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {caseStudy.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {caseStudy.client}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {caseStudy.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {caseStudy.teamSize}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseStudy.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {caseStudy.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{caseStudy.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                  <ButtonLink
                    href={`/portfolio/${caseStudy.id}`}
                    intent="secondary"
                    size="md"
                    className="w-full"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </ButtonLink>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Let's discuss how we can help you achieve your digital goals and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonLink href="/contact" intent="primary" size="lg">
                Start a Project
              </ButtonLink>
              <ButtonLink href="/contact" intent="secondary" size="lg">
                Schedule a Call
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 