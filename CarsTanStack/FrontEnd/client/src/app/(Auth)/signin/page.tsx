"use client"

import { useState } from "react"
import { useLogin } from "@/hooks/useAuth" // Assuming your hook is saved here
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignInPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const { mutate: login, isPending } = useLogin()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    login({ email, password } as any) 
  }

  return (
    <div className="flex min-h-screen flex-col container mx-auto">
      {/* Header */}
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <span className="text-xl">YOU CARS</span>
          <span className="text-primary">Collections</span>
        </Link>
      </div>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-6">
          
          {/* Left Image Side */}
          <div className="hidden lg:flex items-center justify-center relative rounded-xl overflow-hidden">
            <Image
              src={"/car9.jpg"}
              alt="Luxury car showcase"
              width={600}
              height={800}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 flex flex-col justify-end p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
              <p className="text-lg opacity-90">Sign in to access your personalized car collection</p>
            </div>
          </div>

          {/* Right Form Side */}
          <div className="flex items-center justify-center">
            <Card className="w-full max-w-md">
              <form onSubmit={handleSubmit}>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl font-bold">Sign in</CardTitle>
                  <CardDescription>Enter your credentials below to access your account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link href="#" className="text-sm text-primary underline underline-offset-4 hover:text-primary/90">
                        Forgot password?
                      </Link>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Button type="submit" className="w-full" disabled={isPending}>
                    {isPending ? "Signing in..." : "Sign In"}
                  </Button>
                  {/* Optional: Social login buttons */}
                  <div className="text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link href="/signup" className="text-primary underline underline-offset-4 hover:text-primary/90">
                      Sign up
                    </Link>
                  </div>
                </CardFooter>
              </form>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
