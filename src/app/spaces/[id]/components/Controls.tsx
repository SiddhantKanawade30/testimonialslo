"use client";

import React from "react";
import { List, Grid } from "lucide-react";

export default function Controls({
  viewMode,
  setViewMode,
  count,
}: {
  viewMode: "list" | "block";
  setViewMode: (m: "list" | "block") => void;
  count?: number;
}) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div>
        <h2 className="text-lg font-semibold text-text-secondary">{count ?? 0} testimonials in this space</h2>
        <p className="text-sm text-red-600 mt-2 italic text-red-400">Tip: Archive testimonials you don't want to embed</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 p-1 bg-zinc-100 rounded-lg">
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded transition-colors ${
              viewMode === "list" ? "bg-white shadow-sm text-text-primary" : "text-text-secondary hover:text-text-primary"
            }`}
            title="List View"
          >
            <List className="size-4" />
          </button>
          <button
            onClick={() => setViewMode("block")}
            className={`p-2 rounded transition-colors ${
              viewMode === "block" ? "bg-white shadow-sm text-text-primary" : "text-text-secondary hover:text-text-primary"
            }`}
            title="Block View"
          >
            <Grid className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
