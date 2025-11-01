"use client";

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/ui/topbar";
import { Star, Archive, MessageCircle, List, Grid, Heart, Code } from "lucide-react";
import { useState } from "react";

// Mock data - replace with actual API calls
const mockAllTestimonials = [
  {
    id: "1",
    author: "John Smith",
    role: "CEO, Tech Startup",
    text: "This product changed my life! The team really delivered on their promises.",
    date: "2024-01-16",
    rating: 5,
    space: "Project Alpha",
  },
  {
    id: "2",
    author: "Sarah Johnson",
    role: "Marketing Director",
    text: "Amazing service, highly recommend! Everything was perfect from start to finish.",
    date: "2024-01-18",
    rating: 5,
    space: "Project Alpha",
  },
  {
    id: "3",
    author: "Mike Davis",
    role: "Product Manager",
    text: "Great experience overall. The quality exceeded my expectations.",
    date: "2024-01-20",
    rating: 4,
    space: "Project Alpha",
  },
  {
    id: "4",
    author: "Emily Chen",
    role: "Design Lead",
    text: "Exceeded my expectations! Will definitely use again.",
    date: "2024-01-22",
    rating: 5,
    space: "Project Alpha",
  },
  {
    id: "5",
    author: "Alex Brown",
    role: "CMO, Growth Company",
    text: "Outstanding results! The marketing campaign was a huge success.",
    date: "2024-02-02",
    rating: 5,
    space: "Marketing Team",
  },
  {
    id: "6",
    author: "Jessica White",
    role: "Brand Strategist",
    text: "Professional team with great insights. Very satisfied!",
    date: "2024-02-05",
    rating: 5,
    space: "Marketing Team",
  },
  {
    id: "7",
    author: "Robert Lee",
    role: "Digital Marketing Manager",
    text: "Good work, though there's room for improvement in communication.",
    date: "2024-02-08",
    rating: 4,
    space: "Marketing Team",
  },
  {
    id: "8",
    author: "David Kim",
    role: "Software Engineer",
    text: "The beta version shows great promise. Looking forward to the full release!",
    date: "2024-02-11",
    rating: 4,
    space: "Beta Testing",
  },
  {
    id: "9",
    author: "Lisa Garcia",
    role: "QA Specialist",
    text: "Found some bugs but overall good experience. The support team was helpful.",
    date: "2024-02-12",
    rating: 4,
    space: "Beta Testing",
  },
];

type ViewMode = "list" | "cards";

export default function AllTestimonialsPage() {
  const [viewMode, setViewMode] = useState<ViewMode>("cards");

  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans">
      <Sidebar />
      <Topbar>
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <MessageCircle className="size-6 text-text-primary" />
              <h1 className="text-2xl font-bold text-text-primary">All Testimonials</h1>
            </div>
            <div className="flex items-center gap-3">
              {/* Embed Button */}
              <button className="flex items-center gap-2 px-4 py-2 bg-text-primary text-white rounded-lg hover:bg-zinc-800 transition-colors">
                <Code className="size-4" />
                Embed
              </button>
              {/* View Mode Toggle */}
              <div className="flex items-center gap-1 p-1 bg-zinc-100 rounded-lg">
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded transition-colors ${
                  viewMode === "list"
                    ? "bg-white shadow-sm text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
                title="List View"
              >
                <List className="size-4" />
              </button>
              <button
                onClick={() => setViewMode("cards")}
                className={`p-2 rounded transition-colors ${
                  viewMode === "cards"
                    ? "bg-white shadow-sm text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
                title="Cards View"
              >
                <Grid className="size-4" />
              </button>
              </div>
            </div>
          </div>
          <p className="text-text-secondary">{mockAllTestimonials.length} testimonials</p>
        </div>

        {mockAllTestimonials.length > 0 ? (
          <div>
            {viewMode === "list" ? (
              // List View
              <div className="space-y-4">
                {mockAllTestimonials.map((testimonial) => (
                  <div key={testimonial.id} className="rounded-lg bg-white border border-zinc-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium text-text-primary">{testimonial.author}</h3>
                            <span className="text-sm text-text-secondary">{testimonial.role}</span>
                            <div className="flex items-center gap-1">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                          <span className="text-xs px-2 py-1 bg-zinc-100 text-zinc-600 rounded">
                            {testimonial.space}
                          </span>
                        </div>
                        <p className="text-text-secondary mb-3">{testimonial.text}</p>
                        <p className="text-xs text-text-secondary">{testimonial.date}</p>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        <button className="p-2 hover:bg-zinc-100 rounded-lg transition-colors" title="Add to favorites">
                          <Heart className="size-4 text-zinc-400 hover:text-red-500" />
                        </button>
                        <button className="p-2 hover:bg-zinc-100 rounded-lg transition-colors" title="Archive">
                          <Archive className="size-4 text-zinc-400 hover:text-zinc-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Cards View
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {mockAllTestimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="rounded-lg bg-white border border-zinc-200 p-6 hover:shadow-md transition-shadow"
                  >
                    {/* Top Row: Stars and Actions */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="size-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-zinc-100 rounded-lg transition-colors" title="Add to favorites">
                          <Heart className="size-4 text-zinc-400 hover:text-red-500" />
                        </button>
                        <button className="p-2 hover:bg-zinc-100 rounded-lg transition-colors" title="Archive">
                          <Archive className="size-4 text-zinc-400 hover:text-zinc-600" />
                        </button>
                      </div>
                    </div>

                    {/* Space Badge */}
                    <div className="mb-4">
                      <span className="text-xs px-2 py-1 bg-zinc-100 text-zinc-600 rounded">
                        {testimonial.space}
                      </span>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-text-secondary mb-6 text-base leading-relaxed">
                      "{testimonial.text}"
                    </p>

                    {/* Border */}
                    <div className="border-t border-zinc-200 mb-4"></div>

                    {/* Name and Role */}
                    <div>
                      <h3 className="font-semibold text-text-primary mb-1">
                        {testimonial.author}
                      </h3>
                      <p className="text-sm text-text-secondary">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-text-secondary mt-1">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="rounded-lg bg-white p-12 shadow-sm border border-zinc-200 text-center">
            <MessageCircle className="size-12 text-zinc-300 mx-auto mb-4" />
            <p className="text-text-secondary mb-1">No testimonials</p>
            <p className="text-sm text-text-secondary">
              Testimonials will appear here
            </p>
          </div>
        )}
      </Topbar>
    </div>
  );
}

