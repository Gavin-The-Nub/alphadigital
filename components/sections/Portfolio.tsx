"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "marketing", "content", "web"]


  const works = [
    {
      id: 1,
      title: "TikTok Ads for Local Brand",
      category: "marketing",
      image: "/a1.png",
      year: "2025",
    },
    {
      id: 2,
      title: "Live Selling Event Setup",
      category: "marketing",
      image: "/a2.png",
      year: "2025",
    },
    {
      id: 3,
      title: "Product Photography for Skincare",
      category: "content",
      image: "/a3.png",
      year: "2024",
    },
    {
      id: 4,
      title: "Promo Video for Local Café",
      category: "content",
      image: "/a4.png",
      year: "2024",
    },
    {
      id: 5,
      title: "Portfolio Website for Designer",
      category: "web",
      image: "/a5.png",
      year: "2025",
    },
    {
      id: 6,
      title: "Brand Identity for Clothing Line",
      category: "web",
      image: "/a6.jpg",
      year: "2024",
    },
  ]
  

  const filteredWorks = works.filter((work) =>
    selectedCategory === "all" ? true : work.category === selectedCategory
  )

  return (
    <section className="bg-gray-50 py-20 dark:bg-black transition-colors">
      <div className="container mx-auto px-4">
        {/* Category Buttons */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="text-sm capitalize hover:text-white"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Grid of Cards */}
        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredWorks.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden bg-zinc-100 dark:bg-zinc-900 transition-colors">
                  <CardContent className="p-0">
                    <div className="group relative">
                      <img
                        src={work.image || "/placeholder.svg"}
                        alt={work.title}
                        className="w-full transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 dark:bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <h3 className="text-xl font-semibold text-white dark:text-zinc-100">{work.title}</h3>
                        <p className="mt-2 text-sm text-gray-300 dark:text-zinc-300">{work.year}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
