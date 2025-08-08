"use client";
import { useState } from "react";
import Link from "next/link";
import { ButtonLink } from "@/components/common/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from 'lucide-react';
import Image from "next/image";

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
    id: "1",
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
    id: "2",
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
    id: "3",
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
    id: "4",
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
  }, {
    id: "5",
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
      main: "/51.jpg",
      gallery: ["/co3.png", "/co9.png", "/co1.png"]
    },
    featured: false
  },
  {
    id: "6",
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
      main: "/52.jpg",
      gallery: ["/co10.png", "/co7.png", "/co5.png"]
    },
    featured: true
  },
  
 
  {
    id: "7",
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
      main: "/i3.png",
      gallery: ["/co11.png", "/co8.png", "/co1.png"]
    },
    featured: true
  },
  {
    id: "8",
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
      main: "/i1.png",
      gallery: ["/m7.png", "/m5.png", "/m1.png"]
    },
    featured: true
  },
  {
    id: "9",
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
      main: "/i2.png",
      gallery: ["/co2.png", "/co10.png", "/co3.png"]
    },
    featured: false
  }, {
    id: "10",
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
      main: "/i4.png",
      gallery: ["/co2.png", "/co10.png", "/co3.png"]
    },
    featured: false
  },{
    id: "12",
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
      main: "/31.jpg",
      gallery: ["/co12.png", "/co6.png", "/co5.png"]
    },
    featured: true
  },
  {
    id: "13",
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
      main: "/32.png",
      gallery: ["/co1.png", "/co12.png", "/co4.png"]
    },
    featured: false
  },
  {
    id: "14",
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
      main: "/co5.png",
      gallery: ["/co1.png", "/co2.png", "/co4.png"]
    },
    featured: false
  },
  {
    id: "15",
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
      main: "/53.jpg",
      gallery: ["/m6.png", "/m1.png", "/m2.png"]
    },
    featured: true
  }, {
    id: "16",
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
      main: "/55.jpg",
      gallery: ["/m6.png", "/m1.png", "/m2.png"]
    },
    featured: true
  },
  {
    id: "17",
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
      main: "/41.jpg",
      gallery: ["/co6.png", "/co5.png", "/co2.png"]
    },
    featured: false
  },
  {
    id: "18",
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
      main: "/43.jpg",
      gallery: ["/m4.png", "/m2.png", "/m7.png"]
    },
    featured: true
  },
  {
    id: "19",
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
      main: "/64.jpg",
      gallery: ["/co4.png", "/co1.png", "/co7.png"]
    },
    featured: false
  },{
    id: "20",
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
      main: "/62.jpg",
      gallery: ["/co3.png", "/co9.png", "/co1.png"]
    },
    featured: false
  },
  {
    id: "21",
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
      main: "/21.jpg",
      gallery: ["/co6.png", "/co12.png", "/co5.png"]
    },
    featured: true
  },
  {
    id: "22",
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
      main: "/23.jpg",
      gallery: ["/co6.png", "/co12.png", "/co5.png"]
    },
    featured: true
  },
  {
    id: "23",
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
      main: "/44.jpg",
      gallery: ["/co10.png", "/co7.png", "/co5.png"]
    },
    featured: true
  },{
    id: "24",
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
      main: "/42.jpg",
      gallery: ["/co3.png", "/co9.png", "/co1.png"]
    },
    featured: false
  } ,{
    id: "25",
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
      main: "/75.jpg",
      gallery: ["/co3.png", "/co9.png", "/co1.png"]
    },
    featured: false
  } ,{
    id: "26",
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
      main: "/76.jpg",
      gallery: ["/co3.png", "/co9.png", "/co1.png"]
    },
    featured: false
  } ,
  {
    id: "27",
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
      main: "/22.jpg",
      gallery: ["/co6.png", "/co12.png", "/co5.png"]
    },
    featured: true
  },
  
  {
    id: "28",
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
      main: "/co3.png",
      gallery: ["/co10.png", "/co7.png", "/co5.png"]
    },
    featured: true
  }
];




export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const categories = ["all", ...Array.from(new Set(caseStudies.map(cs => cs.category)))];
  
  const filteredCaseStudies = selectedCategory === "all" 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950" data-page="portfolio">
      {/* Hero Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Portfolio
            </h1>*/}
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Explore our creative work and successful projects across different industries and platforms.
            </p> 
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border-2 ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {category === "all" ? "All Projects" : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredCaseStudies.map((caseStudy) => (
              <Link
                key={caseStudy.id}
                href={`/portfolio/${caseStudy.id}`}
                className="break-inside-avoid mb-6 group cursor-pointer block"
              >
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                  <Image
                    src={caseStudy.images.main || "/placeholder.svg"}
                    alt={caseStudy.title}
                    width={300}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  
                
                  {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white p-4">
                      <h3 className="text-lg font-semibold mb-2">{caseStudy.title}</h3>
                      <p className="text-sm mb-3">{caseStudy.client}</p>
                      <div className="flex items-center justify-center text-sm">
                        <span>View Case Study</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>  */}
                  
                  {/* Featured badge */}
                  {caseStudy.featured && (
                    <Badge className="absolute top-3 left-3 bg-blue-600 text-white text-xs">
                      Featured
                    </Badge>
                  )}
                </div>
              </Link>
            ))}
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
    </div>
  );
}
