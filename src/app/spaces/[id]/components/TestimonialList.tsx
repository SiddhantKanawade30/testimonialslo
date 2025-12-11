"use client";

import React from "react";
import TestimonialCard from "./TestimonialCard";
import { Heart, Archive } from "lucide-react";
import { StarRating } from "./starRating";

export default function TestimonialList({
  testimonials,
  viewMode,
  favorites,
  toggleFavorite,
  onArchiveClick,
}: {
  testimonials: any[];
  viewMode: "list" | "block";
  favorites: Set<string>;
  toggleFavorite: (id: string) => void;
  onArchiveClick: (id: string) => void;
}) {
  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="p-12 text-center">
        <p className="text-text-secondary mb-2">No testimonials yet</p>
        <p className="text-sm text-text-secondary">Share this space URL to start collecting testimonials</p>
      </div>
    );
  }

  if (viewMode === "list") {
    return (
      <div className="space-y-4">
        {testimonials.map((testimonial: any) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            onArchiveClick={onArchiveClick}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial: any) => (
        <div
          key={testimonial.id}
          className="rounded-lg bg-white border border-zinc-200 p-6 hover:shadow-md transition-shadow flex flex-col"
        >
          {/* Video or Text Content */}
          {testimonial.testimonialType === "video" && testimonial.playbackId ? (
            <div className="mb-6 flex-1">
              <iframe
                src={`https://player.mux.com/${testimonial.playbackId}`}
                style={{ width: "100%", border: "none", aspectRatio: "4/3", borderRadius: "8px" }}
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="mb-6 text-text-secondary text-base leading-relaxed flex-1">
              <p className="break-words whitespace-pre-wrap">{testimonial.message && `"${testimonial.message}"`}</p>
              <div className="mt-3">
                <StarRating value={testimonial.rating || 0} onChange={() => {}} />
              </div>
            </div>
          )}

          {/* Border */}
          <div className="border-t border-zinc-200 mb-4 flex-shrink-0"></div>

          {/* Name and Position/Email */}
          <div className="flex-shrink-0 flex items-center justify-between  min-w-0">
            <div>
              <h3 className="font-semibold text-text-primary mb-1 truncate">{testimonial.name}</h3>
              {testimonial.position && (
                <p className="text-sm text-text-secondary truncate">{testimonial.position}</p>
              )}
              {testimonial.email && (
                <p className="text-xs text-text-secondary truncate">{testimonial.email}</p>
              )}
            </div>

            <div className="flex items-center justify-between mb-4 flex-shrink-0">
              <div className="flex items-center gap-1">
                <button
                  onClick={() => toggleFavorite(testimonial.id)}
                  className="p-2 hover:bg-zinc-100 rounded-lg transition-colors"
                  title="Add to favorites"
                >
                  <Heart
                    className={`size-4 transition-colors ${
                      favorites.has(testimonial.id) ? "fill-red-500 text-red-500" : "text-zinc-400 hover:text-red-500"
                    }`}
                  />
                </button>
                <button
                  onClick={() => onArchiveClick(testimonial.id)}
                  className="p-2 hover:bg-zinc-100 rounded-lg transition-colors"
                  title="Archive testimonial"
                >
                  <Archive className="size-4 text-zinc-400 hover:text-zinc-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
