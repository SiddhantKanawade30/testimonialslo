"use client";

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/ui/topbar";
import axios from "axios";
import { Star, Archive, MessageCircle, List, Grid, Heart, Code } from "lucide-react";
import router from "next/router";
import { useEffect, useState } from "react";
import SpacesSkeletonLoader from "@/components/loader";



type ViewMode = "list" | "cards";

interface TestimonialData {
  success: boolean;
  count: number;
  data: [
    {
      id: string;
      name: string;
      email: string;
      message: string;
      favourite: boolean;
      archived: boolean;
      createdAt: string;
      campaignId: string;
      campaign: {
        id: string;
        title: string;
      }
    }
  ]
}

export default function AllTestimonialsPage() {
  const [viewMode, setViewMode] = useState<ViewMode>("cards");
  const [data, setData] = useState<TestimonialData>();
  const [loading, setLoading] = useState(true);

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {

    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/signin");
      return;
    }
    const fetchData = async () => {
      try {
        const res = await axios.get(`${backendUrl}/testimonials/get/all`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(res.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans">
      <Sidebar />
      <Topbar>
        {loading ? (
          <SpacesSkeletonLoader />
        ) : (
          <>
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
              <p className="text-text-secondary">{data?.count} testimonials</p>
            </div>

            {data?.success && data?.count && data?.count > 0 ? (
          <div>
            {viewMode === "list" ? (
              // List View
              <div className="space-y-4">
                {data?.data.map((testimonial) => (
                  <div key={testimonial.id} className="rounded-lg bg-white border border-zinc-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-3 flex-wrap">
                          <div className="flex items-center gap-2 min-w-0">
                            <h3 className="font-medium text-text-primary truncate">{testimonial.name}</h3>
                            {/* <span className="text-sm text-text-secondary">{testimonial.role}</span> */}
                            <div className="flex items-center gap-1 flex-shrink-0">
                              {/* {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
                              ))} */}
                            </div>
                          </div>
                          <span className="text-xs px-2 py-1 bg-zinc-100 text-zinc-600 rounded truncate max-w-[200px]">
                            {testimonial.campaign.title}
                          </span>
                        </div>
                        <p className="text-text-secondary mb-3 break-words whitespace-pre-wrap">{testimonial.message}</p>
                        <p className="text-xs text-text-secondary">{testimonial.createdAt}</p>
                      </div>
                      <div className="flex items-center gap-2 ml-4 flex-shrink-0">
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
                {data?.data.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="rounded-lg bg-white border border-zinc-200 p-6 hover:shadow-md transition-shadow flex flex-col"
                  >
                    

                    {/* Space Badge */}
                    <div className="mb-4 flex-shrink-0">
                      <span className="text-xs px-2 py-1 bg-zinc-100 text-zinc-600 rounded truncate max-w-[150px] inline-block">
                        {testimonial.campaign.title}
                      </span>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-text-secondary mb-6 text-base leading-relaxed break-words flex-1 whitespace-pre-wrap">
                      "{testimonial.message}"
                    </p>

                    {/* Border */}
                    <div className="border-t border-zinc-200 mb-4 flex-shrink-0"></div>

                    {/* Name and Role */}
                    <div className="flex-shrink-0 min-w-0">
                      <h3 className="font-semibold text-text-primary mb-1 truncate">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-text-secondary truncate">
                        {testimonial.email}
                      </p>
                      <p className="text-xs text-text-secondary mt-1">
                        {testimonial.createdAt}
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
          </>
        )}
      </Topbar>
    </div>
  );
}

