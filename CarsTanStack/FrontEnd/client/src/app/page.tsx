import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col container mx-auto">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <span className="text-xl">YOU CARS</span>
            <span className="text-primary">Collections</span>
          </div>
          {/* <nav className="hidden md:flex gap-6">
            <Link href="/" className="font-medium">
              Home
            </Link>
            <Link href="#featured" className="font-medium">
              Featured
            </Link>
            <Link href="#popular" className="font-medium">
              Popular
            </Link>
            <Link href="#new-arrivals" className="font-medium">
              New Arrivals
            </Link>
          </nav> */}
          <div className="flex items-center gap-4">
            <Link href="/signin">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Discover Your Dream Car Collection
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Explore our exclusive collection of luxury, vintage, and sports cars. Join our community of car
                  enthusiasts today.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#featured">
                    <Button size="lg" className="w-full min-[400px]:w-auto">
                      Explore Collection
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                      Join Now
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl">
                <Image
                  src={"/car1.jpg"}
                  alt="Luxury car showcase"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="featured" className="py-12 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter">Featured Cars</h2>
              <Link href="#" className="text-primary font-medium flex items-center">
                View all
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={`/car${i}.jpg`}
                      alt={`Featured car ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Premium Luxury Car {i}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      A stunning example of automotive excellence with premium features and exceptional performance.
                    </p>
                    <div className="flex items-center mt-2">
                      {Array(5)
                        .fill(0)
                        .map((_, j) => (
                          <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      <span className="ml-2 text-sm">5.0 (24 reviews)</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">View Details</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

 


        <section id="new-arrivals" className="py-12 bg-muted/50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter mb-8">New Arrivals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row gap-4 bg-background rounded-lg overflow-hidden shadow-sm"
                >
                  <div className="relative w-full md:w-2/5 h-48 md:h-auto">
                    <Image
                      src={`/car${i}.jpg`}
                      alt={`new collections`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-6 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-xl font-bold mb-2">New Arrival Model {i}</h3>
                      <p className="text-muted-foreground mb-4">
                        Just added to our exclusive collection. Limited availability.
                      </p>
                    </div>
                    <Button>Reserve Now</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 font-bold">
              <span className="text-xl">YOU CARS</span>
              <span className="text-primary">Collections</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">© 2025 YOU CARS Collections. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Link href="/signin" className="text-sm font-medium">
              Sign In
            </Link>
            <Link href="/signup" className="text-sm font-medium">
              Sign Up
            </Link>
            <Link href="#" className="text-sm font-medium">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm font-medium">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
