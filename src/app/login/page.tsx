"use client"
import React from 'react';

const DashboardSkeleton = () => {
  return (
    <div className="min-h-screen">
      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        {/* Total Testimonials Card */}
        <div className="rounded-md bg-white px-6 space-y-2 py-3 border border-gray-300 relative overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
          
          <div className="flex items-center gap-1 mb-2">
            <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-36 bg-gray-200 rounded animate-pulse"></div>
          </div>
          
          <div className="h-8 w-20 bg-gray-200 rounded animate-pulse"></div>
          
          <div className="flex items-center gap-1">
            <div className="h-4 w-6 bg-green-200 rounded animate-pulse"></div>
            <div className="h-4 w-40 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Total Spaces Card */}
        <div className="rounded-md bg-white px-6 space-y-2 py-3 border border-gray-300 relative overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
          
          <div className="flex items-center gap-1 mb-2">
            <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-28 bg-gray-200 rounded animate-pulse"></div>
          </div>
          
          <div className="h-8 w-16 bg-gray-200 rounded animate-pulse"></div>
          
          <div className="h-4 w-36 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Space Remaining Card */}
        <div className="rounded-md bg-white px-6 space-y-2 py-3 border border-gray-300 relative overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
          
          <div className="flex items-center gap-1 mb-2">
            <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
          </div>
          
          <div className="h-8 w-16 bg-gray-200 rounded animate-pulse"></div>
          
          <div className="flex items-center gap-1">
            <div className="h-4 w-28 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-20 bg-violet-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Chart and Testimonials Layout - 40% / 60% split */}
      <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-6 mb-8">
        {/* Graph Card - Left Side (40%) */}
        <div className="rounded-lg bg-white shadow-sm border border-zinc-200 relative overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
          
          {/* Chart content */}
          <div className="p-6">
            <div className="mb-6">
              <div className="h-5 w-56 bg-gray-200 rounded mb-2 animate-pulse"></div>
              <div className="h-3 w-40 bg-gray-200 rounded animate-pulse"></div>
            </div>
            
            {/* Chart visualization area */}
            <div className="space-y-4">
              <div className="h-48 bg-gray-100 rounded-lg animate-pulse relative">
                {/* Simulate chart lines */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-200 to-transparent rounded-lg"></div>
              </div>
              
              {/* X-axis labels */}
              <div className="flex justify-between pt-2">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="h-3 w-8 bg-gray-200 rounded animate-pulse"></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Best Testimonials Card - Right Side (60%) */}
        <div className="rounded-lg bg-white shadow-sm border border-zinc-200 relative overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
          
          {/* Header */}
          <div className="p-4 border-b border-zinc-200">
            <div className="h-5 w-40 bg-gray-200 rounded mb-1 animate-pulse"></div>
            <div className="h-3 w-36 bg-gray-200 rounded animate-pulse"></div>
          </div>

          {/* Testimonial Items - scrollable list */}
          <div className="divide-y divide-zinc-200 max-h-[400px] overflow-y-auto">
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <div key={item} className="p-4">
                <div className="flex items-start gap-2">
                  <div className="flex-1">
                    {/* Message text */}
                    <div className="py-2 space-y-2 mb-1">
                      <div className="h-3 bg-gray-200 rounded w-full animate-pulse"></div>
                      <div className="h-3 bg-gray-200 rounded w-11/12 animate-pulse"></div>
                      <div className="h-3 bg-gray-200 rounded w-4/5 animate-pulse"></div>
                    </div>
                    
                    {/* Name and stars row */}
                    <div className="flex items-center gap-1.5 mb-1">
                      <div className="h-4 w-28 bg-gray-200 rounded animate-pulse"></div>
                      <div className="flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <div key={star} className="h-3 w-3 bg-yellow-200 rounded-sm animate-pulse"></div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Date */}
                    <div className="h-3 w-24 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default DashboardSkeleton;