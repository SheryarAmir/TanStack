import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { PenTool, Twitter, Facebook, Instagram, Linkedin, Github, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <PenTool className="h-6 w-6" />
              <span className="text-xl font-bold">BlogSpace</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Discover amazing stories, insights, and ideas from writers around the world. Join our community of
              passionate readers and creators.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                All Posts
              </Link>
              <Link
                href="/categories"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Categories
              </Link>
              <Link href="/tags" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Tags
              </Link>
              <Link href="/archive" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Archive
              </Link>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Categories</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/category/technology"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Technology
              </Link>
              <Link
                href="/category/design"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Design
              </Link>
              <Link
                href="/category/lifestyle"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Lifestyle
              </Link>
              <Link
                href="/category/business"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Business
              </Link>
              <Link
                href="/category/travel"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Travel
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest articles and updates.
            </p>
            <div className="space-y-2">
              <Input type="email" placeholder="Enter your email" />
              <Button className="w-full">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} BlogSpace. All rights reserved.
            </p>
          </div>
          <nav className="flex items-center space-x-4">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
