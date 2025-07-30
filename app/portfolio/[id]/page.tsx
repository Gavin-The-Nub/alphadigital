"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { ButtonLink } from "@/components/common/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Calendar, Users, Target, CheckCircle, ChevronLeft, ChevronRight, X } from "lucide-react";
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
    brief: "BeautyGlow Cosmetics needed comprehensive social media management across Facebook, Instagram, and TikTok to increase brand awareness and drive sales. Their existing social presence was inconsistent and lacked engagement. They wanted to establish a strong brand presence and increase their online sales by 40%.",
    solution: "We implemented a complete social media management strategy including content creation, community management, engagement strategies, and performance tracking. We created engaging content calendars, managed daily interactions, developed brand voice guidelines, and implemented data-driven optimization strategies to maximize reach and engagement.",
    results: [
      "300% increase in social media followers",
      "85% improvement in engagement rate",
      "40% increase in website traffic from social",
      "25% boost in online sales",
      "Consistent brand voice across all platforms",
      "Improved customer service response times"
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
    brief: "FashionForward Boutique wanted to launch TikTok live selling to reach younger audiences and increase sales. They needed support with live session planning, promotion, and audience engagement strategies. Their goal was to generate $10K+ in live session sales and build a loyal TikTok community.",
    solution: "We provided comprehensive TikTok live selling support including session planning, content creation, audience building, live hosting assistance, and post-session analytics. We developed engaging scripts, promotional strategies, and audience engagement techniques that maximized viewer retention and conversion rates.",
    results: [
      "500% increase in TikTok followers",
      "$15K+ in live session sales",
      "Average 2K+ viewers per session",
      "90% customer satisfaction rate",
      "Strong community engagement",
      "Consistent weekly live sessions"
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
    brief: "TechStart Solutions needed a comprehensive digital marketing campaign to launch their new SaaS product. They wanted to increase brand awareness and generate qualified leads across multiple platforms. Their target was to generate 100+ qualified leads and establish market presence.",
    solution: "We developed a data-driven marketing campaign across Facebook, Instagram, Google Ads, and LinkedIn. The campaign included targeted advertising, content marketing, email sequences, and conversion optimization strategies. We implemented A/B testing and continuous optimization to maximize ROI and lead quality.",
    results: [
      "200% increase in brand awareness",
      "150 qualified leads generated",
      "35% improvement in conversion rate",
      "40% reduction in cost per acquisition",
      "Strong market positioning",
      "Sustainable lead generation pipeline"
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
    brief: "LuxeInterior Design needed professional photography and video content for their social media, website, and marketing materials. They wanted to showcase their interior design projects with high-quality visuals that would attract high-end clients and increase their portfolio appeal.",
    solution: "We provided comprehensive photo and video production services including professional photography, video creation, editing, and content optimization for various platforms. We created branded content that highlighted their design expertise, captured the essence of their projects, and maintained consistent visual quality across all deliverables.",
    results: [
      "Professional portfolio of 50+ images",
      "10 high-quality video testimonials",
      "Consistent brand visual identity",
      "60% increase in social media engagement",
      "Enhanced client presentation materials",
      "Improved website conversion rates"
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
    brief: "EcoFresh Foods, a new organic food delivery service, needed a complete brand identity system to establish themselves in the competitive food delivery market and appeal to health-conscious consumers. They wanted to differentiate themselves from traditional delivery services.",
    solution: "We developed a comprehensive brand identity including logo design, color palette, typography, brand guidelines, and visual assets. The design emphasized freshness, sustainability, and health while maintaining modern appeal. We created a complete brand story and visual system that resonated with their target audience.",
    results: [
      "Complete brand identity system",
      "Consistent visual presence across platforms",
      "Strong market differentiation",
      "Positive customer feedback on brand recognition",
      "Successful launch campaign",
      "Increased investor interest"
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
    brief: "FitLife Studio needed a modern, responsive website that would showcase their fitness services, allow online booking, and integrate with their social media presence. The existing site was outdated and not mobile-friendly, causing them to lose potential clients.",
    solution: "We built a modern, responsive website with online booking functionality, social media integration, and SEO optimization. The site featured a clean design, fast loading times, and seamless user experience across all devices. We implemented advanced features like class scheduling and payment processing.",
    results: [
      "Modern, responsive website",
      "50% increase in online bookings",
      "40% improvement in page load speed",
      "Mobile-first design implementation",
      "Enhanced user experience",
      "Improved search engine rankings"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Vercel"],
    images: {
      main: "/a6.jpg",
      gallery: ["/a6.jpg", "/a1.png", "/a2.png", "/a3.png", "/a4.png", "/a5.png"]
    },
    featured: false
  }
];

export default function CaseStudyPage() {
  const params = useParams();
  const router = useRouter();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const foundCaseStudy = caseStudies.find(cs => cs.id === params.id);
    if (foundCaseStudy) {
      setCaseStudy(foundCaseStudy);
    }
    setLoading(false);
  }, [params.id]);

  const handleImageClick = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const handlePreviousImage = () => {
    if (!caseStudy) return;
    const newIndex = currentImageIndex === 0 ? caseStudy.images.gallery.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
    setSelectedImage(caseStudy.images.gallery[newIndex]);
  };

  const handleNextImage = () => {
    if (!caseStudy) return;
    const newIndex = currentImageIndex === caseStudy.images.gallery.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
    setSelectedImage(caseStudy.images.gallery[newIndex]);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading case study...</p>
        </div>
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Case Study Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">The case study you're looking for doesn't exist.</p>
          <ButtonLink href="/portfolio" intent="primary">
            Back to Portfolio
          </ButtonLink>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <ButtonLink
              href="/portfolio"
              intent="secondary"
              size="sm"
              className="flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </ButtonLink>
            <div className="flex items-center gap-4">
              <Badge variant="outline">{caseStudy.category}</Badge>
              {caseStudy.featured && (
                <Badge className="bg-blue-600 text-white">Featured</Badge>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {caseStudy.title}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                  {caseStudy.client}
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{caseStudy.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Users className="w-4 h-4" />
                    <span>{caseStudy.teamSize}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src={caseStudy.images.main}
                  alt={caseStudy.title}
                  fill
                  className="object-cover cursor-pointer"
                  onClick={() => handleImageClick(caseStudy.images.main, 0)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Brief Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Target className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">The Brief</h2>
            </div>
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {caseStudy.brief}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Solution</h2>
            </div>
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {caseStudy.solution}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Results & Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.results.map((result, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">
                        {result}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Project Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {caseStudy.images.gallery.map((image, index) => (
                <div
                  key={index}
                  className="relative h-48 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => handleImageClick(image, index)}
                >
                  <Image
                    src={image}
                    alt={`${caseStudy.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonLink href="/contact" intent="primary" size="lg">
                Start a Project
              </ButtonLink>
              <ButtonLink href="/portfolio" intent="secondary" size="lg">
                View More Work
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={handlePreviousImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            <Image
              src={selectedImage}
              alt="Gallery image"
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
              {currentImageIndex + 1} of {caseStudy.images.gallery.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 