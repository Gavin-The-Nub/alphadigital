"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Send } from "lucide-react";
import Link from "next/link";

export default function GetStartedPage() {
  const [formData, setFormData] = useState({
    businessName: "",
    website: "",
    socialMedia: "",
    email: "",
    aboutBusiness: "",
    biggestChallenge: "",
    goals: "",
    services: {
      socialMediaManagement: false,
      brandingStrategy: false,
      contentCreation: false,
      paidAds: false,
      influencerMarketing: false,
      websiteDesign: false,
      others: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleServiceChange = (service: string, checked: boolean | string) => {
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [service]: checked
      }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-6">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
            <p className="text-gray-600">
              We've received your information and will get back to you within 24 hours.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white" data-page="get-started">
   
     

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Let's Get Started
            </h1>
            <p className="text-lg text-gray-600">
              Tell us about your business and goals so we can create the perfect strategy for you.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Business Information */}
            <Card>
              <CardHeader>
                
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="businessName" className="text-gray-700 font-medium">
                      Business Name *
                    </Label>
                    <Input
                      id="businessName"
                      value={formData.businessName}
                      onChange={(e) => handleInputChange("businessName", e.target.value)}
                      placeholder="Enter your business name"
                      className="mt-1 border-gray-300 focus:border-red-500 focus:ring-red-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your@email.com"
                      className="mt-1 border-gray-300 focus:border-red-500 focus:ring-red-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="website" className="text-gray-700 font-medium">
                    Website (if any)
                  </Label>
                  <Input
                    id="website"
                    value={formData.website}
                    onChange={(e) => handleInputChange("website", e.target.value)}
                    placeholder="https://yourwebsite.com"
                    className="mt-1 border-gray-300 focus:border-red-500 focus:ring-red-500"
                  />
                </div>
                <div>
                  <Label htmlFor="socialMedia" className="text-gray-700 font-medium">
                    Social Media Pages (TikTok, FB and IG)
                  </Label>
                  <Input
                    id="socialMedia"
                    value={formData.socialMedia}
                    onChange={(e) => handleInputChange("socialMedia", e.target.value)}
                    placeholder="Enter your social media handles"
                    className="mt-1 border-gray-300 focus:border-red-500 focus:ring-red-500"
                  />
                </div>
              </CardContent>
            </Card>

            {/* About Business */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Tell us about your business
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Label htmlFor="aboutBusiness" className="text-gray-700 font-medium">
                  What do you offer, and who is your target market? *
                </Label>
                <Textarea
                  id="aboutBusiness"
                  value={formData.aboutBusiness}
                  onChange={(e) => handleInputChange("aboutBusiness", e.target.value)}
                  placeholder="Describe your products/services and target audience..."
                  className="mt-1 border-gray-300 focus:border-red-500 focus:ring-red-500 min-h-[120px]"
                  required
                />
              </CardContent>
            </Card>

            {/* Biggest Challenge */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  What's your biggest challenge right now?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Label htmlFor="biggestChallenge" className="text-gray-700 font-medium">
                  (ex. Low engagement, no time for content, unclear brand messaging, no strategy, etc.)
                </Label>
                <Textarea
                  id="biggestChallenge"
                  value={formData.biggestChallenge}
                  onChange={(e) => handleInputChange("biggestChallenge", e.target.value)}
                  placeholder="Tell us about your current challenges..."
                  className="mt-1 border-gray-300 focus:border-red-500 focus:ring-red-500 min-h-[100px]"
                />
              </CardContent>
            </Card>

            {/* Goals */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  What goals are you hoping to achieve in the next 3–6 months?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Label htmlFor="goals" className="text-gray-700 font-medium">
                  (ex. Increase sales, grow following, rebrand, launch a new product, etc.)
                </Label>
                <Textarea
                  id="goals"
                  value={formData.goals}
                  onChange={(e) => handleInputChange("goals", e.target.value)}
                  placeholder="Describe your goals and objectives..."
                  className="mt-1 border-gray-300 focus:border-red-500 focus:ring-red-500 min-h-[100px]"
                />
              </CardContent>
            </Card>

            {/* Services */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Which services are you most interested in?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="socialMediaManagement"
                      checked={formData.services.socialMediaManagement}
                      onCheckedChange={(checked) => 
                        handleServiceChange("socialMediaManagement", checked as boolean)
                      }
                      className="border-gray-300 text-red-500 focus:ring-red-500"
                    />
                    <Label htmlFor="socialMediaManagement" className="text-gray-700">
                      Social Media Management
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="brandingStrategy"
                      checked={formData.services.brandingStrategy}
                      onCheckedChange={(checked) => 
                        handleServiceChange("brandingStrategy", checked as boolean)
                      }
                      className="border-gray-300 text-red-500 focus:ring-red-500"
                    />
                    <Label htmlFor="brandingStrategy" className="text-gray-700">
                      Branding & Strategy
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="contentCreation"
                      checked={formData.services.contentCreation}
                      onCheckedChange={(checked) => 
                        handleServiceChange("contentCreation", checked as boolean)
                      }
                      className="border-gray-300 text-red-500 focus:ring-red-500"
                    />
                    <Label htmlFor="contentCreation" className="text-gray-700">
                      Content Creation (Photo/Video)
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="paidAds"
                      checked={formData.services.paidAds}
                      onCheckedChange={(checked) => 
                        handleServiceChange("paidAds", checked as boolean)
                      }
                      className="border-gray-300 text-red-500 focus:ring-red-500"
                    />
                    <Label htmlFor="paidAds" className="text-gray-700">
                      Paid Ads & Lead Generation
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="influencerMarketing"
                      checked={formData.services.influencerMarketing}
                      onCheckedChange={(checked) => 
                        handleServiceChange("influencerMarketing", checked as boolean)
                      }
                      className="border-gray-300 text-red-500 focus:ring-red-500"
                    />
                    <Label htmlFor="influencerMarketing" className="text-gray-700">
                      Influencer/UGC Marketing
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="websiteDesign"
                      checked={formData.services.websiteDesign}
                      onCheckedChange={(checked) => 
                        handleServiceChange("websiteDesign", checked as boolean)
                      }
                      className="border-gray-300 text-red-500 focus:ring-red-500"
                    />
                    <Label htmlFor="websiteDesign" className="text-gray-700">
                      Website Design & Development
                    </Label>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="others" className="text-gray-700 font-medium">
                    Others:
                  </Label>
                  <Input
                    id="others"
                    value={formData.services.others}
                    onChange={(e) => handleServiceChange("others", e.target.value)}
                    placeholder="Specify other services you're interested in..."
                    className="mt-1 border-gray-300 focus:border-red-500 focus:ring-red-500"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg font-medium disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 