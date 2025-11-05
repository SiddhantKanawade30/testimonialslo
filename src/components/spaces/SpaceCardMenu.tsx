"use client";

import { useState } from "react";
import { MoreVertical, Trash2 } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface SpaceCardMenuProps {
  onDeleteClick: (e: React.MouseEvent) => void;
}

export function SpaceCardMenu({ onDeleteClick }: SpaceCardMenuProps) {
  const [open, setOpen] = useState(false);

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(false);
    onDeleteClick(e);
  };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            className="absolute top-3 right-3 p-1.5 rounded-md hover:bg-zinc-100 transition-colors z-10"
            title="More options"
            type="button"
          >
            <MoreVertical className="size-4 text-text-secondary" />
          </button>
        </PopoverTrigger>
        <PopoverContent 
          className="w-40 p-1 z-[100]" 
          align="end"
          sideOffset={4}
        >
          <button
            onClick={handleDelete}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors text-left"
          >
            <Trash2 className="size-4" />
            Delete
          </button>
        </PopoverContent>
      </Popover>
    </div>
  );
}

