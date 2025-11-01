"use client";

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/ui/topbar";
import { Star, Archive, ArrowLeft, Copy, List, Grid, Code, Share2, Heart } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Toaster, toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// Mock data - replace with actual API calls
const mockSpaces = [
  {
    id: "1",
    slug: "project-alpha",
    name: "Project Alpha",
    description: "Main project workspace",
    shareUrl: "https://testimonials.app/space/project-alpha",
    testimonialsCount: 12,
    status: "Active",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    slug: "marketing",
    name: "Marketing Team",
    description: "Marketing team workspace",
    shareUrl: "https://testimonials.app/space/marketing",
    testimonialsCount: 8,
    status: "Active",
    createdAt: "2024-02-01",
  },
  {
    id: "3",
    slug: "beta-testing",
    name: "Beta Testing",
    description: "Beta product feedback",
    shareUrl: "https://testimonials.app/space/beta-testing",
    testimonialsCount: 4,
    status: "Active",
    createdAt: "2024-02-10",
  },
];

// Mock testimonials for each space
const spaceTestimonials: Record<string, Array<{
  id: string;
  author: string;
  role: string;
  text: string;
  date: string;
  rating: number;
}>> = {
  "project-alpha": [
    { id: "1", author: "John Smith", role: "CEO, Tech Startup", text: "This product changed my life! The team really delivered on their promises.", date: "2024-01-16", rating: 5 },
    { id: "2", author: "Sarah Johnson", role: "Marketing Director", text: "Amazing service, highly recommend! Everything was perfect from start to finish.", date: "2024-01-18", rating: 5 },
    { id: "3", author: "Mike Davis", role: "Product Manager", text: "Great experience overall. The quality exceeded my expectations.", date: "2024-01-20", rating: 4 },
    { id: "4", author: "Emily Chen", role: "Design Lead", text: "Exceeded my expectations! Will definitely use again.", date: "2024-01-22", rating: 5 },
  ],
  "marketing": [
    { id: "5", author: "Alex Brown", role: "CMO, Growth Company", text: "Outstanding results! The marketing campaign was a huge success.", date: "2024-02-02", rating: 5 },
    { id: "6", author: "Jessica White", role: "Brand Strategist", text: "Professional team with great insights. Very satisfied!", date: "2024-02-05", rating: 5 },
    { id: "7", author: "Robert Lee", role: "Digital Marketing Manager", text: "Good work, though there's room for improvement in communication.", date: "2024-02-08", rating: 4 },
  ],
  "beta-testing": [
    { id: "8", author: "David Kim", role: "Software Engineer", text: "The beta version shows great promise. Looking forward to the full release!", date: "2024-02-11", rating: 4 },
    { id: "9", author: "Lisa Garcia", role: "QA Specialist", text: "Found some bugs but overall good experience. The support team was helpful.", date: "2024-02-12", rating: 4 },
  ],
};

type ViewMode = "list" | "block";

export default function SpaceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [archiveDialogOpen, setArchiveDialogOpen] = useState(false);
  const [testimonialToArchive, setTestimonialToArchive] = useState<{ id: string; author: string } | null>(null);
  
  const space = mockSpaces.find(s => s.slug === slug);
  const testimonials = space ? spaceTestimonials[slug] || [] : [];

  const toggleFavorite = (testimonialId: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      const testimonial = testimonials.find(t => t.id === testimonialId);
      if (newFavorites.has(testimonialId)) {
        newFavorites.delete(testimonialId);
        toast.info("Removed from favorites");
      } else {
        newFavorites.add(testimonialId);
        toast.success("Added to favorites");
      }
      return newFavorites;
    });
  };

  const handleArchiveClick = (testimonialId: string) => {
    const testimonial = testimonials.find(t => t.id === testimonialId);
    if (testimonial) {
      setTestimonialToArchive({ id: testimonialId, author: testimonial.author });
      setArchiveDialogOpen(true);
    }
  };

  const handleArchiveConfirm = () => {
    if (testimonialToArchive) {
      // Here you would handle the actual archiving logic
      toast.success("Testimonial archived successfully");
      setArchiveDialogOpen(false);
      setTestimonialToArchive(null);
    }
  };

  const handleCopyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    toast.success("URL copied to clipboard");
  };

  if (!space) {
    return (
      <div className="flex min-h-screen bg-zinc-50 font-sans">
        <Sidebar />
        <Topbar>
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-text-primary mb-4">Space not found</h1>
            <Link href="/spaces" className="text-text-primary hover:underline">
              ← Back to Spaces
            </Link>
          </div>
        </Topbar>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans">
      <Toaster position="bottom-right" />
      <Sidebar />
      <Topbar>
        {/* Header */}
        <div className="mb-6">
          <Link 
            href="/spaces" 
            className="flex items-center gap-2 text-text-secondary hover:text-text-primary mb-4 transition-colors"
          >
            <ArrowLeft className="size-4" />
            <span>Back to Spaces</span>
          </Link>
          
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-text-primary mb-2">{space.name}</h1>
              <p className="text-text-secondary">{space.description}</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-text-primary text-white rounded-lg hover:bg-zinc-800 transition-colors">
                <Code className="size-4" />
                Embed
              </button>
            </div>
          </div>

          <div className="mt-4 px-3 py-1 bg-zinc-50 rounded-lg border border-zinc-200 flex items-center gap-2">
            <input
              type="text"
              value={space.shareUrl}
              readOnly
              className="flex-1 text-sm bg-transparent border-none outline-none text-text-secondary"
            />
            <button
              onClick={() => handleCopyUrl(space.shareUrl)}
              className="p-2 hover:bg-zinc-200 rounded transition-colors"
              title="Copy URL"
            >
              <Copy className="size-4 text-text-secondary" />
            </button>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold text-text-secondary">{testimonials.length} testimonials in this space</h2>
              
              <p className="text-sm text-red-600 mt-2 italic text-red-400">
                Tip: Archive testimonials you don't want to embed
              </p>
            </div>
            <div className="flex items-center gap-3">
              
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
                onClick={() => setViewMode("block")}
                className={`p-2 rounded transition-colors ${
                  viewMode === "block"
                    ? "bg-white shadow-sm text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
                title="Block View"
              >
                <Grid className="size-4" />
              </button>
              </div>
            </div>
          </div>
          
          {testimonials.length > 0 ? (
            viewMode === "list" ? (
              // List View
              <div className="space-y-4">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="rounded-lg bg-white border border-zinc-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-medium text-text-primary">{testimonial.author}</h3>
                          <span className="text-sm text-text-secondary">{testimonial.role}</span>
                          <div className="flex items-center gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-text-secondary mb-2">{testimonial.text}</p>
                        <p className="text-xs text-text-secondary">{testimonial.date}</p>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        <button 
                          onClick={() => toggleFavorite(testimonial.id)}
                          className="p-2 hover:bg-zinc-100 rounded-lg transition-colors"
                          title="Add to favorites"
                        >
                          <Heart 
                            className={`size-4 transition-colors ${
                              favorites.has(testimonial.id)
                                ? "fill-red-500 text-red-500"
                                : "text-zinc-400 hover:text-red-500"
                            }`} 
                          />
                        </button>
                        <button 
                          onClick={() => handleArchiveClick(testimonial.id)}
                          className="p-2 hover:bg-zinc-100 rounded-lg transition-colors"
                          title="Archive testimonial"
                        >
                          <Archive className="size-4 text-zinc-400 hover:text-zinc-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Block/Card View
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="rounded-lg bg-white border border-zinc-200 p-6 hover:shadow-md transition-shadow"
                  >
                    {/* Top Row: Stars, Favorite, and Archive */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="size-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => toggleFavorite(testimonial.id)}
                          className="p-2 hover:bg-zinc-100 rounded-lg transition-colors"
                          title="Add to favorites"
                        >
                          <Heart 
                            className={`size-4 transition-colors ${
                              favorites.has(testimonial.id)
                                ? "fill-red-500 text-red-500"
                                : "text-zinc-400 hover:text-red-500"
                            }`} 
                          />
                        </button>
                        <button 
                          onClick={() => handleArchiveClick(testimonial.id)}
                          className="p-2 hover:bg-zinc-100 rounded-lg transition-colors"
                          title="Archive testimonial"
                        >
                          <Archive className="size-4 text-zinc-400 hover:text-zinc-600" />
                        </button>
                      </div>
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
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : (
            <div className="p-12 text-center">
              <p className="text-text-secondary mb-2">No testimonials yet</p>
              <p className="text-sm text-text-secondary">
                Share this space URL to start collecting testimonials
              </p>
            </div>
          )}
        </div>

        {/* Archive Confirmation Dialog */}
        <Dialog open={archiveDialogOpen} onOpenChange={setArchiveDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Archive Testimonial</DialogTitle>
              <DialogDescription>
                Are you sure you want to archive this testimonial? Archived testimonials won't be included in embeds.
              </DialogDescription>
            </DialogHeader>
            {testimonialToArchive && (
              <div className="py-2">
                <p className="text-sm text-zinc-600">
                  <span className="font-medium">{testimonialToArchive.author}</span>'s testimonial will be archived.
                </p>
              </div>
            )}
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => {
                  setArchiveDialogOpen(false);
                  setTestimonialToArchive(null);
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleArchiveConfirm}
                className="bg-zinc-900 hover:bg-zinc-800"
              >
                Archive
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Topbar>
    </div>
  );
}

