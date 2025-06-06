"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search, Moon, Sun, PenTool } from "lucide-react"

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    // In a real app, you'd implement actual theme switching here
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <PenTool className="h-6 w-6" />
          <span className="text-xl font-bold">BlogSpace</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
            Blog
          </Link>
          <Link href="/categories" className="text-sm font-medium hover:text-primary transition-colors">
            Categories
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-2">
          {/* Search */}
          <div className="hidden sm:flex items-center">
            {isSearchOpen ? (
              <div className="flex items-center space-x-2">
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="w-64"
                  autoFocus
                  onBlur={() => setIsSearchOpen(false)}
                />
              </div>
            ) : (
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                <Search className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Theme toggle */}
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          {/* Write button */}
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/write">Write</Link>
          </Button>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-center space-x-2 pb-4 border-b">
                  <Input type="search" placeholder="Search articles..." />
                  <Button size="icon" variant="ghost">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
                <nav className="flex flex-col space-y-4">
                  <Link href="/" className="text-lg font-medium hover:text-primary transition-colors">
                    Home
                  </Link>
                  <Link href="/blog" className="text-lg font-medium hover:text-primary transition-colors">
                    Blog
                  </Link>
                  <Link href="/categories" className="text-lg font-medium hover:text-primary transition-colors">
                    Categories
                  </Link>
                  <Link href="/about" className="text-lg font-medium hover:text-primary transition-colors">
                    About
                  </Link>
                  <Link href="/contact" className="text-lg font-medium hover:text-primary transition-colors">
                    Contact
                  </Link>
                </nav>
                <Button asChild className="w-full">
                  <Link href="/write">Write Article</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
