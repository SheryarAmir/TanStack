"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRegister } from "@/hooks/useAuth";

import {
  Button,
} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const { mutate: register, isPending } = useRegister();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

 const handleSubmit = async () => {
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  try {
    await register(
      { fullName, email, password ,confirmPassword },
      {
        onSuccess: () => {
          alert("sign up susscess full")
          router.push("/signin");
        },
        onError: (error: any) => {

          alert("user allready exist please can you email and password");

        },
      }
    );
  } catch (error) {
    console.error("Registration error:", error);
  }
};

  const router=useRouter()

  return (
    <div className="flex min-h-screen flex-col container mx-auto">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <span className="text-xl">YOU CARS</span>
          <span className="text-primary">Collections</span>
        </Link>
      </div>
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-6">
          <div className="hidden lg:flex items-center justify-center relative rounded-xl overflow-hidden">
            <Image
              src={"/car9.jpg"}
              alt="Luxury cars collection"
              width={600}
              height={800}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 flex flex-col justify-end p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Join Our Exclusive Car Community</h2>
              <p className="text-lg opacity-90">Get access to premium car collections and exclusive events</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Card className="w-full max-w-md">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
                <CardDescription>
                  Enter your details below to create your account and join our car enthusiast community
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button
                  className="w-full"
                  onClick={handleSubmit}
                  disabled={isPending}
                >
                  {isPending ? "Creating..." : "Create Account"}
                </Button>
                <div className="text-center text-sm">
                  Already have an account?{" "}
                  <Link

                    href="/signin"
                    className="text-primary underline underline-offset-4 hover:text-primary/90"
                  >
                    Sign in
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <footer className="border-t py-4">
        <div className="container flex justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2025 YOU CARS Collections</p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
