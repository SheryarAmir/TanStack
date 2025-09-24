"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Header({ className }: { className?: string }) {
  return (
    <header className={cn("bg-card text-card-foreground border-b", className)}>
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="font-semibold text-lg tracking-tight text-balance"
        >
          TodoFlow
        </Link>
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <Link
                href="#features"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="#roadmap"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Roadmap
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
