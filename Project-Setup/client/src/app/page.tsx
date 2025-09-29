"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingHero() {
  return (
    <section className="bg-background  container mx-auto h-full">
      <div className="flex-col gap-8 px-4 py-16 text-center sm:py-20">
        <div className="flex flex-col gap-4">
          <span className="mx-auto rounded-full bg-secondary px-4 py-1 text-xs font-medium text-secondary-foreground">
            Plan better todos
          </span>
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Stay on top of your tasks with TodoFlow
          </h1>
          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Create new todos instantly, track everything in one place, and
            visualize your progress with a tidy, distraction-free experience.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link href={"/addTodo"}>
            {" "}
            <Button size="lg">Add Todo</Button>
          </Link>

          <Button size="lg" variant="outline">
            See All Todos
          </Button>
        </div>
      </div>
    </section>
  );
}
