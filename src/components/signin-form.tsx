"use client"

import { GalleryVerticalEnd, Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { GoogleAuthButton } from "@/components/googleAuthButton"
import axios from "axios"
import { useRouter } from "next/navigation"
import { rateLimitHandlers } from "@/lib/rateLimitHandler"
import { toast } from "sonner"
import { useUser } from "@/context/UserContext"
import { useState } from "react"

export function SigninForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const router = useRouter();
  const { refreshUser } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    
    try {
      setIsLoading(true);

      const backendHost = process.env.NEXT_PUBLIC_BACKEND_URL?.replace(/\/$/, "");
      if (!backendHost) {
        toast.error("Backend URL is not configured. Please set NEXT_PUBLIC_BACKEND_URL.");
        return;
      }

      const backendUrl = backendHost.endsWith("/api/v1") ? backendHost : `${backendHost}/api/v1`;

      const res = await axios.post(`${backendUrl}/auth/signin`, {
        email,
        password,
      });

      if (res.status === 200 && res.data?.token) {
        toast.success("Login successful! Redirecting...");
        localStorage.removeItem("token");
        localStorage.setItem("token", res.data.token);
        await refreshUser();
        router.push("/overview");
      } else {
        toast.error(res.data?.message || "Login failed");
      }
    } catch (error: any) {
      const message = error?.response?.data?.message;
      if (message) {
        toast.error(message);
      } else {
        rateLimitHandlers.auth.handleError(error);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form onSubmit={handleSubmit}>
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <a
              href="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
             
              <span className="sr-only">TestimonialsLo</span>
            </a>
            <h1 className="text-xl font-bold">Welcome back</h1>
            <FieldDescription>
              Don't have an account? <a href="/signup">Sign up</a>
            </FieldDescription>
          </div>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </Field>
          <Field>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing In...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </Field>
          <FieldSeparator>Or</FieldSeparator>
          <Field className="flex justify-center">
            <GoogleAuthButton />
          </Field>
        </FieldGroup>
      </form>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}
