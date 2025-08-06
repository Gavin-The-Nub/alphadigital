"use client";

import { CheckIcon, StarIcon } from "@radix-ui/react-icons";
import { ButtonLink } from "@/components/common/button";
import { Section } from "@/components/layout/SectionWrapper";
import { Heading } from "@/components/common/Heading";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const pricingTiers = [
  {
    id: "alpha-build",
    title: "Alpha Build",
    price: "₱35,000",
    period: "per month",
    contract: "4 months lock-in contract",
    totalPrice: "₱140,000",
    isPopular: false,
    goal: "Set up your brand for clarity, consistency, and visibility.",
    features: [
      {
        category: "Campaign Strategy",
        items: [
          "Monthly Campaign Strategy (to grow, boost, and sustain brand visibility)"
        ]
      },
      {
        category: "Content Creation",
        items: [
          "15 Social Media Creatives per month (Static, Carousel, GIFs, Short Video Clips)",
          "5 Reels Video (Ideation + Shooting + Editing + Publishing; short-form under 1 min)"
        ]
      },
      {
        category: "Social Media Management",
        items: [
          "Profile optimization + content scheduling for Facebook and IG",
          "15-minute daily engagement (Mon–Fri: Comment replies, niche community sharing)",
          "15 Engaging Stories per month"
        ]
      },
      {
        category: "Collaborations & Analytics",
        items: [
          "3 UGC / Influencer Collaborations (Pooling, communication, and content guidance)",
          "Monthly Analytics Report",
          "End-of-Month Alignment Meeting"
        ]
      }
    ]
  },
  {
    id: "alpha-grow",
    title: "Alpha Grow",
    price: "₱50,000",
    period: "per month",
    contract: "4 months lock-in contract",
    totalPrice: "₱200,000",
    isPopular: true,
    goal: "Strengthen authority, launch campaigns with impact, and grow with strategy and creative firepower.",
    features: [
      {
        category: "Campaign Strategy",
        items: [
          "Monthly Campaign Strategy (growth-focused and campaign-led)",
          "Quarterly Strategy Review & Planning Session"
        ]
      },
      {
        category: "Content Creation",
        items: [
          "20 Social Media Creatives per month (High-level design: Static, Carousel, GIFs, Short Video Clips)",
          "10 Reels Videos (Advanced concepts, shooting, editing, publishing; under 1 min)"
        ]
      },
      {
        category: "Social Media Management",
        items: [
          "Profile optimization, campaign scheduling, response monitoring Facebook and IG",
          "30-minute daily engagement (Mon–Fri: Strategic interaction, niche sharing, comment handling)",
          "20 Engaging Stories per month"
        ]
      },
      {
        category: "Collaborations & Analytics",
        items: [
          "5 UGC / Influencer Collaborations (Sourcing, briefing, coordination, and content refinement)",
          "Monthly Analytics Report with insights",
          "End-of-Month Alignment Meeting + Quarterly Strategy Review"
        ]
      }
    ]
  },
  {
    id: "alpha-scale",
    title: "Alpha Scale",
    price: "₱75,000",
    period: "per month",
    contract: "4 months lock-in contract",
    totalPrice: "₱300,000",
    isPopular: false,
    goal: "Strengthen authority, drive conversions, and scale brand visibility through high-impact execution and data-backed strategy.",
    features: [
      {
        category: "Strategic Campaign Execution",
        items: [
          "Custom Monthly Campaign Strategy (for growth, launches, or seasonal pushes)",
          "Quarterly Strategy Review & Planning Session (big-picture alignment)"
        ]
      },
      {
        category: "High-Volume Content Creation",
        items: [
          "30 Premium Social Media Creatives (Static, Carousel, Infographics, GIFs, Short-form Visuals)",
          "15 Reels / Short Videos (High-concept scripting, shooting, editing, and optimization)",
          "25 Engaging Stories per month (Polls, questions, countdowns, stickers, product highlights)"
        ]
      },
      {
        category: "Influencer & UGC Management",
        items: [
          "Up to 10 UGC / Influencer Collaborations (Sourcing, negotiations, content guidance, reposts)"
        ]
      },
      {
        category: "Social Media Execution",
        items: [
          "Advanced Social Media Management (Content scheduling, optimization, monitoring)",
          "Daily 30-min Engagement (M–F comment replies, niche community visibility)"
        ]
      },
      {
        category: "Analytics & Optimization",
        items: [
          "Monthly Performance Analytics Report (Deep-dive insights + next steps)",
          "A/B Testing on Content Formats or CTAs (Optional but recommended)"
        ]
      },
      {
        category: "Client Support & Collaboration",
        items: [
          "End-of-Month Alignment Meeting",
          "50% off usage of our Photo and Video Studio for focused campaign",
          "Access to Bonus Content Bank (Reused assets, resized formats, seasonal backups)"
        ]
      }
    ]
  },
  {
    id: "tiktok-management",
    title: "TikTok Management",
    price: "₱35,000",
    period: "per month",
    contract: "4 months lock-in contract",
    totalPrice: "₱140,000",
    isPopular: false,
    goal: "Boost visibility, engagement, and brand identity through scroll-stopping content tailored to the TikTok algorithm.",
    features: [
      {
        category: "TikTok Content Strategy",
        items: [
          "Trend tracking, content pillars, and customized themes",
          "Weekly content calendar & posting schedule"
        ]
      },
      {
        category: "Content Creation",
        items: [
          "15 Short-Form TikTok Videos (Includes concept/ideation, scriptwriting or audio direction, shooting, editing, captioning, and publishing)",
          "Mix of: Trend-driven content, Educational / Value-based videos, Product highlights or storytelling, Testimonials or behind-the-scenes, UGC-style content (if applicable)"
        ]
      },
      {
        category: "On-Platform Optimization",
        items: [
          "Caption writing with strategic hooks + CTA",
          "Hashtag research and optimization",
          "Thumbnail selection and video cover design (if needed)"
        ]
      },
      {
        category: "Community Engagement Support",
        items: [
          "Light comment replies and interaction monitoring (optional)",
          "Pinning comments, boosting engagement when applicable"
        ]
      },
      {
        category: "Performance & Collaborations",
        items: [
          "Monthly TikTok Analytics Report with insights on views, engagement, and content performance",
          "Suggestions for content improvement next month",
          "5 UGC Collaboration (Sourcing, negotiations, content guidance, reposts)"
        ]
      }
    ]
  }
];

export default function PricingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen pricing-section">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-12">
         
          
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Complete Pricing Plans
            </h1>
            <p className="text-xl text-[--text-secondary] max-w-3xl mx-auto">
              Choose the perfect plan for your brand's growth. All plans include comprehensive social media management, content creation, and strategic guidance.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-2xl border-2 p-8 shadow-lg ${
                tier.isPopular 
                  ? 'border-[--border] bg-[--surface-secondary]' 
                  : 'border-[--border] bg-[--surface-primary]'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[--accent-500] text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <StarIcon className="h-4 w-4" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">
                  {tier.title}
                </h2>
                <div className="mb-4">
                  <span className="text-4xl font-bold">
                    {tier.price}
                  </span>
                  <span className="text-[--text-secondary] ml-2">
                    {tier.period}
                  </span>
                </div>
                <p className="text-sm text-[--text-tertiary] mb-2">
                  {tier.contract}
                </p>
                <p className="text-lg font-semibold">
                  Total: {tier.totalPrice}
                </p>
              </div>

              {/* Goal */}
              <div className="mb-8 p-4 bg-[--surface-secondary] rounded-lg">
                <h3 className="font-semibold mb-2">Goal:</h3>
                <p className="text-[--text-secondary] text-sm">
                  {tier.goal}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-6">
                {tier.features.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h4 className="font-semibold mb-3 text-lg">
                      {category.category}
                    </h4>
                    <ul className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <CheckIcon className="mt-1 h-5 w-5 text-[--accent-500] flex-shrink-0" />
                          <span className="text-[--text-secondary] text-sm">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-8 text-center">
                <ButtonLink
                  href="/get-started"
                  className="w-full"
                  data-intent={tier.isPopular ? "primary" : "secondary"}
                  size="lg"
                >
                  Get started
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
} 