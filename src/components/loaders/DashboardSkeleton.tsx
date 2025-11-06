import React from 'react';

const DashboardSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="rounded-md bg-white px-6 space-y-2 py-3 border border-gray-300 relative overflow-hidden"
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
            
            <div className="h-4 w-32 bg-gray-200 rounded mb-2 animate-pulse"></div>
            <div className="h-8 w-16 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-48 bg-gray-200 rounded animate-pulse"></div>
          </div>
        ))}
      </div>

      {/* Chart and Testimonials Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-6 mb-8">
        {/* Graph Skeleton - Left Side */}
        <div className="rounded-lg bg-white border border-gray-200 p-6 relative overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
          
          {/* Header */}
          <div className="mb-4">
            <div className="h-6 w-48 bg-gray-200 rounded mb-2 animate-pulse"></div>
            <div className="h-4 w-64 bg-gray-200 rounded animate-pulse"></div>
          </div>
          
          {/* Chart Area */}
          <div className="h-[300px] bg-gray-100 rounded-lg animate-pulse"></div>
        </div>

        {/* Best Testimonials List Skeleton - Right Side */}
        <div className="rounded-lg bg-white shadow-sm border border-zinc-200 relative overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
          
          {/* Header */}
          <div className="p-4 border-b border-zinc-200">
            <div className="h-5 w-40 bg-gray-200 rounded mb-1 animate-pulse"></div>
            <div className="h-3 w-56 bg-gray-200 rounded animate-pulse"></div>
          </div>

          {/* Testimonials List */}
          <div className="divide-y divide-zinc-200">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="p-4">
                <div className="h-4 bg-gray-200 rounded w-full mb-3 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-3 animate-pulse"></div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div key={star} className="h-3 w-3 bg-gray-200 rounded animate-pulse"></div>
                    ))}
                  </div>
                </div>
                <div className="h-3 w-32 bg-gray-200 rounded animate-pulse"></div>
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

