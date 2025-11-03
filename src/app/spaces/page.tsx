"use client";

import { useEffect, useRef, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/ui/topbar";
import { Plus, Copy } from "lucide-react";
import Link from "next/link";
import { CreateSpaceDialog } from "@/components/ui/create-space-dialog";
import axios from "axios";
import { useRouter } from "next/navigation";



export default function SpacesPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [spaces, setSpaces] = useState([]);
  const router = useRouter();

  const handleCopyUrl = (url: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click when copying URL
    navigator.clipboard.writeText(url);
    // You can add a toast notification here
  };

  useEffect(()=>{
    const fetchSpaces = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("No token found");
        router.push("/login");
      }

      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
      if (!backendUrl) {
        console.log("No backend URL found");
        router.push("/login");
      }

      try{
      const res = await axios.get(`${backendUrl}/campaigns/get`,{
        headers : {
          "Authorization" : `Bearer ${localStorage.getItem("token")}`
        }
      })

      setSpaces(res.data)
      console.log(res.data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchSpaces();
  }, []);

  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans">
      <Sidebar />
      <Topbar>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-text-primary">All Spaces</h1>
            <p className="text-text-secondary mt-1">{spaces?.length} spaces created</p>
          </div>
          <button 
            onClick={() => setIsDialogOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-text-primary text-white rounded-lg hover:bg-zinc-800 transition-colors"
          >
            <Plus className="size-4" />
            Create New Space
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {spaces?.map((space: any) => (
            <Link
              key={space.id}
              href={`/spaces/${space.id}`}
              className="rounded-lg bg-white p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition-shadow cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text-primary mb-1">{space.title as string}</h3>
                  <p className="text-sm text-text-secondary">{space.description}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4 text-sm">
                <div>
                  <span className="text-text-secondary">Testimonials: </span>
                  {/* <span className="font-medium text-text-primary">{space.testimonialsCount}</span> */}
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
                    className="flex-1 text-xs bg-transparent border-none outline-none text-text-secondary cursor-text"
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
                  <span>Created: {space.createdAt}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {spaces?.length === 0 && (
          <div className="rounded-lg bg-white p-12 shadow-sm border border-zinc-200 text-center">
            <p className="text-text-secondary mb-4">No spaces created yet</p>
            <button 
              onClick={() => setIsDialogOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-text-primary text-white rounded-lg hover:bg-zinc-800 transition-colors mx-auto"
            >
              <Plus className="size-4" />
              Create Your First Space
            </button>
          </div>
        )}

        {/* Create Space Dialog */}
        <CreateSpaceDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} /> 
      </Topbar>
    </div>
  );
}

