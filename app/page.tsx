import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ProjectGallery } from "@/components/project-gallery";
import { featuredProjects } from "@/lib/projects";
import { ProfileFlip } from "@/components/profile-flip";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-center py-32 px-8 md:px-16 gap-20">

        {/* Hero */}
        <div className="flex flex-col items-center">
          <ProfileFlip />
          <h1 className="text-5xl font-display bg-clip-text text-transparent bg-linear-to-b from-white via-primary to-secondary to-86% uppercase tracking-tight text-center starting:opacity-0 opacity-1000 duration-500 delay-500 transition-opacity">
            Sabrina Giselle Gonzalez
          </h1>
          <p className="mt-6 text-lg text-center max-w-xl starting:opacity-0 opacity-1000 duration-500 delay-700 transition-opacity">
            
          </p>
          <div className="flex flex-row gap-3 mt-8 justify-center items-center starting:opacity-0 opacity-1000 duration-500 delay-[900ms] transition-opacity">
            <Button asChild variant="underline" size="lg" className="font-display uppercase text-xl pt-1">
              <Link href="https://www.linkedin.com/in/sabrina-giselle-gonzalez/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </Link>
            </Button>
          </div>
        </div>

        {/* Featured Works Section */}
        <section className="w-full flex flex-col items-center gap-8 starting:opacity-0 opacity-1000 duration-500 delay-[1100ms] transition-opacity">
          <h2 className="text-3xl font-display uppercase tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white via-primary to-secondary to-86%">
            Featured Work
          </h2>
          <ProjectGallery projects={featuredProjects} />
        </section>

      </main>
    </div>
  );
}
