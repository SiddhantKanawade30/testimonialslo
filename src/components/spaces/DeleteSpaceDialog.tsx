"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface DeleteSpaceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  spaceTitle?: string;
  onConfirm: () => void;
}

export function DeleteSpaceDialog({
  open,
  onOpenChange,
  spaceTitle,
  onConfirm,
}: DeleteSpaceDialogProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-[calc(100vw-2rem)] sm:max-w-lg w-full">
        <AlertDialogHeader className="min-w-0 space-y-2">
          <AlertDialogTitle className="break-words pr-2">Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription 
            className="break-words whitespace-pre-wrap min-w-0 text-sm"
            style={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}
          >
            This action cannot be undone. This will permanently delete the space
            <span className="font-semibold break-all"> "{spaceTitle}"</span> and remove all associated testimonials from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-shrink-0 mt-4">
          <AlertDialogCancel onClick={() => onOpenChange(false)} className="whitespace-nowrap">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            className="bg-red-600 hover:bg-red-700 whitespace-nowrap"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

