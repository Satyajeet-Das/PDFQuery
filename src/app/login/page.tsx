'use client'

import { useState, FormEvent } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { toast } from "sonner"


const LoginPage : React.FC = () => {
  const router = useRouter()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // TODO: Add Supabase login logic
    setTimeout(() => {
      setLoading(false)
      router.push('/chat') // Simulated success
    }, 1500)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted px-4">
      <div className="bg-background rounded-2xl shadow-lg border p-8 w-full max-w-md animate-in fade-in slide-in-from-bottom-4">
        <h1 className="text-3xl font-bold text-center mb-2">Welcome back</h1>
        <p className="text-sm text-muted-foreground text-center mb-6">
          Enter your credentials to access your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <div className="flex justify-end text-sm">
            <a href="#" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </Button>
          <p className="text-sm text-center text-muted-foreground">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default LoginPage;