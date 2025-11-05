"use client";

import Link from "next/link";
import { Copy } from "lucide-react";
import { SpaceCardMenu } from "./SpaceCardMenu";
import { toast } from "sonner";

interface Space {
  id: string;
  title: string;
  description: string;
  shareLink: string;
  createdAt: string;
  _count?: {
    testimonials: number;
  };
}

interface SpaceCardProps {
  space: Space;
  onDeleteClick: (space: Space, e: React.MouseEvent) => void;
}

export function SpaceCard({ space, onDeleteClick }: SpaceCardProps) {
  const handleCopyUrl = (url: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(url);
    toast.success("URL copied to clipboard");
  };

  return (
    <div className="rounded-lg bg-white p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition-shadow relative overflow-visible">
      <Link href={`/spaces/${space.id}`} className="block relative z-0">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-text-primary mb-2 truncate">
              {space.title}
            </h3>
            <p className="text-sm text-text-secondary line-clamp-2 break-words leading-relaxed">
              {space.description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4 text-sm">
          <div>
            <span className="text-text-secondary">Testimonials: {space?._count?.testimonials}</span>
          </div>
        </div>

        <div className="space-y-2">
          <div
            className="flex items-center gap-2 p-2 bg-zinc-50 rounded border border-zinc-200"
            onClick={(e) => handleCopyUrl(space.shareLink, e)}
          >
            <input
              type="text"
              value={space.shareLink}
              readOnly
              className="flex-1 min-w-0 text-xs bg-transparent border-none outline-none text-text-secondary cursor-text truncate"
            />
            <button
              onClick={(e) => handleCopyUrl(space.shareLink, e)}
              className="p-1 hover:bg-zinc-200 rounded transition-colors"
              title="Copy URL"
            >
              <Copy className="size-4 text-text-secondary" />
            </button>
          </div>
          <div className="flex items-center gap-2 text-xs text-text-secondary">
            <span>Created : {space.createdAt.split("T")[0]}</span>
          </div>
        </div>
      </Link>

      <SpaceCardMenu
        onDeleteClick={(e) => onDeleteClick(space, e)}
      />
    </div>
  );
}

