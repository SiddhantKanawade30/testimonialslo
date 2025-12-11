"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function ArchiveDialog({
  open,
  onOpenChange,
  testimonialToArchive,
  onConfirm,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  testimonialToArchive: { id: string; author: string } | null;
  onConfirm: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
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
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={onConfirm} className="bg-zinc-900 hover:bg-zinc-800">
            Archive
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
