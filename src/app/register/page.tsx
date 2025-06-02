'use client';

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-muted px-4">
      <div className="bg-background rounded-2xl shadow-lg border p-8 w-full max-w-md animate-in fade-in slide-in-from-bottom-4">
        <h1 className="text-3xl font-bold text-center mb-2">
          Create an account
        </h1>
        <p className="text-sm text-muted-foreground text-center mb-6">
          Enter your email and password to create an account
        </p>
        <form className="space-y-4">
          <div>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="your_name"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
            />
            </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              required
            />
            </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="••••••••"
              required
            />
            </div>
          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </form>
        <p className="text-sm text-muted-foreground text-center mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
        <p className="text-sm text-muted-foreground text-center mt-4">
          By signing up, you agree to our{" "}
          <Link href="/terms" className="text-blue-500 hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-blue-500 hover:underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
