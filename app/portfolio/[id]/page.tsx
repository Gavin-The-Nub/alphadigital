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
    id: "content-case-1",
    title: "Content Strategy #1",
    client: "Client A",
    category: "content",
    duration: "5 months",
    teamSize: "5 people",
    brief: "Client A needed to improve their content efforts to achieve better performance metrics.",
    solution: "We implemented a comprehensive content strategy tailored to their business needs.",
    results: [
      "266% improvement in key performance indicators",
      "10% growth in engagement",
      "12% increase in conversions"
    ],
    technologies: ["Notion", "Surfer SEO", "Hootsuite", "Google Analytics", "Grammarly"],
    images: {
      main: "/co1.png",
      gallery: ["/co11.png", "/co5.png", "/co3.png"]
    },
    featured: false
  },
  {
    id: "marketing-case-2",
    title: "Marketing Strategy #2",
    client: "Client B",
    category: "marketing",
    duration: "5 months",
    teamSize: "4 people",
    brief: "Client B needed to improve their marketing efforts to achieve better performance metrics.",
    solution: "We implemented a comprehensive marketing strategy tailored to their business needs.",
    results: [
      "104% improvement in key performance indicators",
      "35% growth in engagement",
      "24% increase in conversions"
    ],
    technologies: ["Google Docs", "Notion", "Grammarly", "Google Analytics", "Mailchimp"],
    images: {
      main: "/m1.png",
      gallery: ["/m5.png", "/m6.png", "/m3.png"]
    },
    featured: true
  },
  {
    id: "content-case-3",
    title: "Content Strategy #3",
    client: "Client C",
    category: "content",
    duration: "6 months",
    teamSize: "3 people",
    brief: "Client C needed to improve their content efforts to achieve better performance metrics.",
    solution: "We implemented a comprehensive content strategy tailored to their business needs.",
    results: [
      "235% improvement in key performance indicators",
      "17% growth in engagement",
      "19% increase in conversions"
    ],
    technologies: ["Meta Ads", "Google Analytics", "Google Docs", "Grammarly", "Ahrefs"],
    images: {
      main: "/co2.png",
      gallery: ["/co7.png", "/co5.png", "/co4.png"]
    },
    featured: true
  },
  {
    id: "marketing-case-4",
    title: "Marketing Strategy #4",
    client: "Client D",
    category: "marketing",
    duration: "6 months",
    teamSize: "4 people",
    brief: "Client D needed to improve their marketing efforts to achieve better performance metrics.",
    solution: "We implemented a comprehensive marketing strategy tailored to their business needs.",
    results: [
      "99% improvement in key performance indicators",
      "23% growth in engagement",
      "24% increase in conversions"
    ],
    technologies: ["Mailchimp", "Google Ads", "Google Docs", "Surfer SEO", "Hootsuite"],
    images: {
      main: "/m2.png",
      gallery: ["/m8.png", "/m6.png", "/m4.png"]
    },
    featured: false
  },
  {
    id: "content-case-5",
    title: "Content Strategy #5",
    client: "Client E",
    category: "content",
    duration: "4 months",
    teamSize: "4 people",
    brief: "Client E needed to improve their content efforts to achieve better performance metrics.",
    solution: "We implemented a comprehensive content strategy tailored to their business needs.",
    results: [
      "244% improvement in key performance indicators",
      "28% growth in engagement",
      "10% increase in conversions"
    ],
    technologies: ["Notion", "Mailchimp", "Hootsuite", "Ahrefs", "Google Analytics"],
    images: {
      main: "/co3.png",
      gallery: ["/co12.png", "/co6.png", "/co5.png"]
    },
    featured: true
  },
  {
    id: "marketing-case-6",
    title: "Marketing Strategy #6",
    client: "Client F",
    category: "marketing",
    duration: "5 months",
    teamSize: "3 people",
    brief: "Client F needed to improve their marketing efforts to achieve better performance metrics.",
    solution: "We implemented a comprehensive marketing strategy tailored to their business needs.",
    results: [
      "138% improvement in key performance indicators",
      "48% growth in engagement",
      "32% increase in conversions"
    ],
    technologies: ["Google Docs", "Meta Ads", "Grammarly", "Google Analytics", "Notion"],
    images: {
      main: "/m3.jpg",
      gallery: ["/m7.png", "/m5.png", "/m6.png"]
    },
    featured: false
  },
  {
    id: "content-case-7",
    title: "Content Strategy #7",
    client: "Client G",
    category: "content",
    duration: "5 months",
    teamSize: "3 people",
    brief: "Client G needed to improve their content efforts to achieve better performance metrics.",
    solution: "We implemented a comprehensive content strategy tailored to their business needs.",
    results: [
      "213% improvement in key performance indicators",
      "40% growth in engagement",
      "31% increase in conversions"
    ],
    technologies: ["Grammarly", "Ahrefs", "Google Analytics", "Surfer SEO", "Notion"],
    images: {
      main: "/co4.png",
      gallery: ["/co11.png", "/co8.png", "/co1.png"]
    },
    featured: true
  },
  {
    id: "marketing-case-8",
    title: "Marketing Strategy #8",
    client: "Client H",
    category: "marketing",
    duration: "3 months",
    teamSize: "3 people",
    brief: "Client H needed to improve their marketing efforts to achieve better performance metrics.",
    solution: "We implemented a comprehensive marketing strategy tailored to their business needs.",
    results: [
      "181% improvement in key performance indicators",
      "19% growth in engagement",
      "17% increase in conversions"
    ],
    technologies: ["Mailchimp", "Grammarly", "Google Docs", "Ahrefs", "Meta Ads"],
    images: {
      main: "/m4.jpg",
      gallery: ["/m7.png", "/m5.png", "/m1.png"]
    },
    featured: true
  },
  {
    id: "content-case-9",
    title: "Content Strategy #9",
    client: "Client I",
    category: "content",
    duration: "6 months",
    teamSize: "2 people",
    brief: "Client I needed to improve their content efforts to achieve better performance metrics.",
    solution: "We implemented a comprehensive content strategy tailored to their business needs.",
    results: [
      "132% improvement in key performance indicators",
      "18% growth in engagement",
      "26% increase in conversions"
    ],
    technologies: ["Notion", "Surfer SEO", "Grammarly", "Google Analytics", "Google Docs"],
    images: {
      main: "/co5.png",
      gallery: ["/co2.png", "/co10.png", "/co3.png"]
    },
    featured: false
  },
  {
    id: "content-case-10",
    title: "Content Strategy #10",
    client: "Client J",
    category: "content",
    duration: "4 months",
    teamSize: "4 people",
    brief: "Client J needed to improve their content efforts to achieve better performance metrics.",
    solution: "We implemented a comprehensive content strategy tailored to their business needs.",
    results: [
      "118% improvement in key performance indicators",
      "46% growth in engagement",
      "28% increase in conversions"
    ],
    technologies: ["Ahrefs", "Google Ads", "Mailchimp", "Google Analytics", "Notion"],
    images: {
      main: "/co6.jpg",
      gallery: ["/co1.png", "/co12.png", "/co4.png"]
    },
    featured: false
  },
  {
    id: "content-case-11",
    title: "Content Strategy #11",
    client: "Client K",
    category: "content",
    duration: "4 months",
    teamSize: "2 people",
    brief: "Client K needed to improve their content efforts to achieve better performance metrics.",
    solution: "We implemented a comprehensive content strategy tailored to their business needs.",
    results: [
      "214% improvement in key performance indicators",
      "22% growth in engagement",
      "40% increase in conversions"
    ],
    technologies: ["Grammarly", "Google Docs", "Surfer SEO", "Mailchimp", "Ahrefs"],
    images: {
      main: "/co7.jpg",
      gallery: ["/co1.png", "/co2.png", "/co4.png"]
    },
    featured: false
  },
  {
    id: "marketing-case-12",
    title: "Marketing Strategy #12",
    client: "Client L",
    category: "marketing",
    duration: "6 months",
    teamSize: "4 people",
    brief: "Client L needed to improve their marketing efforts to achieve better performance metrics.",
    solution: "We implemented a comprehensive marketing strategy tailored to their business needs.",
    results: [
      "212% improvement in key performance indicators",
      "42% growth in engagement",
      "37% increase in conversions"
    ],
    technologies: ["Google Ads", "Grammarly", "Notion", "Mailchimp", "Surfer SEO"],
    images: {
      main: "/m5.png",
      gallery: ["/m6.png", "/m1.png", "/m2.png"]
    },
    featured: true
  },
  {
    id: "content-case-13",
    title: "Content Strategy #13",
    client: "Client M",
    category: "content",
    duration: "3 months",
    teamSize: "3 people",
    brief: "Client M needed to improve their content efforts to achieve better performance metrics.",
    solution: "We implemented a comprehensive content strategy tailored to their business needs.",
    results: [
      "136% improvement in key performance indicators",
      "20% growth in engagement",
      "27% increase in conversions"
    ],
    technologies: ["Surfer SEO", "Google Analytics", "Google Ads", "Grammarly", "Ahrefs"],
    images: {
      main: "/co8.jpg",
      gallery: ["/co6.png", "/co5.png", "/co2.png"]
    },
    featured: false
  },
  {
    id: "marketing-case-14",
    title: "Marketing Strategy #14",
    client: "Client N",
    category: "marketing",
    duration: "4 months",
    teamSize: "5 people",
    brief: "Client N needed to improve their marketing efforts to achieve better performance metrics.",
    solution: "We implemented a comprehensive marketing strategy tailored to their business needs.",
    results: [
      "191% improvement in key performance indicators",
      "50% growth in engagement",
      "20% increase in conversions"
    ],
    technologies: ["Google Docs", "Notion", "Google Analytics", "Mailchimp", "Ahrefs"],
    images: {
      main: "/m6.png",
      gallery: ["/m4.png", "/m2.png", "/m7.png"]
    },
    featured: true
  },
  {
    id: "content-case-15",
    title: "Content Strategy #15",
    client: "Client O",
    category: "content",
    duration: "5 months",
    teamSize: "3 people",
    brief: "Client O needed to improve their content efforts to achieve better performance metrics.",
    solution: "We implemented a comprehensive content strategy tailored to their business needs.",
    results: [
      "180% improvement in key performance indicators",
      "33% growth in engagement",
      "38% increase in conversions"
    ],
    technologies: ["Meta Ads", "Google Analytics", "Google Docs", "Grammarly", "Notion"],
    images: {
      main: "/co9.jpg",
      gallery: ["/co4.png", "/co1.png", "/co7.png"]
    },
    featured: false
  },
  {
    id: "content-case-16",
    title: "Content Strategy #16",
    client: "Client P",
    category: "content",
    duration: "4 months",
    teamSize: "4 people",
    brief: "Client P needed to improve their content efforts to achieve better performance metrics.",
    solution: "We implemented a comprehensive content strategy tailored to their business needs.",
    results: [
      "168% improvement in key performance indicators",
      "26% growth in engagement",
      "29% increase in conversions"
    ],
    technologies: ["Surfer SEO", "Notion", "Google Analytics", "Ahrefs", "Mailchimp"],
    images: {
      main: "/co10.jpg",
      gallery: ["/co6.png", "/co12.png", "/co5.png"]
    },
    featured: true
  },
  {
    id: "content-case-17",
    title: "Content Strategy #17",
    client: "Client Q",
    category: "content",
    duration: "3 months",
    teamSize: "2 people",
    brief: "Client Q needed to improve their content efforts to achieve better performance metrics.",
    solution: "We implemented a comprehensive content strategy tailored to their business needs.",
    results: [
      "198% improvement in key performance indicators",
      "34% growth in engagement",
      "41% increase in conversions"
    ],
    technologies: ["Grammarly", "Meta Ads", "Google Docs", "Surfer SEO", "Google Analytics"],
    images: {
      main: "/co11.jpg",
      gallery: ["/co3.png", "/co9.png", "/co1.png"]
    },
    featured: false
  },
  {
    id: "content-case-18",
    title: "Content Strategy #18",
    client: "Client R",
    category: "content",
    duration: "6 months",
    teamSize: "5 people",
    brief: "Client R needed to improve their content efforts to achieve better performance metrics.",
    solution: "We implemented a comprehensive content strategy tailored to their business needs.",
    results: [
      "222% improvement in key performance indicators",
      "38% growth in engagement",
      "36% increase in conversions"
    ],
    technologies: ["Ahrefs", "Grammarly", "Mailchimp", "Notion", "Surfer SEO"],
    images: {
      main: "/co12.png",
      gallery: ["/co10.png", "/co7.png", "/co5.png"]
    },
    featured: true
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950" data-page="portfolio">
     
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
              <ButtonLink href="/get-started" intent="primary" size="lg" className="start-project-btn">
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