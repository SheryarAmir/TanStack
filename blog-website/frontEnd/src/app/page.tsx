import { Header } from "./components/Header"
import { Footer } from "./components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col mx-auto container">
      <Header />

      <main className="flex-1">
        <div className="container px-4 py-16">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Welcome to BlogSpace</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover amazing stories, insights, and ideas from writers around the world. Join our community of
              passionate readers and creators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                Start Reading
              </button>
              <button className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                Write Your Story
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
