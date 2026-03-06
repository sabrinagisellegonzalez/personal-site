import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ProjectGallery } from "@/components/project-gallery";
import { featuredProjects } from "@/lib/projects";
import { ProfileFlip } from "@/components/profile-flip";
import { TitleScatter } from "@/components/title-scatter";
import { branding } from "@/lib/self";
import { ExploreMoreArrows } from "@/components/custom/explore-more-arrows";
import { ScrollToSection } from "@/components/custom/scroll-to-section";
import { LinkedinIcon } from "@/components/icons/linkedin";
import { InstagramIcon } from "@/components/icons/instagram";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-center py-32 px-8 md:px-16 gap-4">

        {/* Hero */}
        <div className="flex flex-col items-center pt-2 sm:pt-20 min-h-screen">
          <ProfileFlip />
          <br />
          <h1 className="font-display uppercase tracking-tight text-center text-4xl md:text-5xl starting:opacity-0 opacity-1000 duration-500 delay-500 transition-opacity bg-clip-text text-transparent bg-linear-to-b from-white via-primary to-secondary to-86%">
            Sabrina Giselle Gonzalez
          </h1>
          <h2 className="font-Montserrat text-center text-lg sm:text-xl mt-1 text-[#E5B7FF] starting:opacity-0 opacity-1000 duration-500 delay-700">
            {branding.oneLiner}
          </h2>
          <p className="mt-3 sm:text-lg text-center max-w-xl starting:opacity-0 opacity-1000 duration-500 delay-[900ms] transition-opacity">
            {branding.aboutMe}
          </p>
          <div className="flex flex-row gap-3 mt-8 justify-center items-center starting:opacity-0 opacity-1000 duration-500 delay-[1100ms] transition-opacity">
            <Button asChild variant="leaf" size="xl_square" className="font-display uppercase text-xl">
              <Link href={branding.linkedInUrl} target="_blank" rel="noopener noreferrer">
                <LinkedinIcon size={30} />
              </Link>
            </Button>
            <Button asChild variant="leaf" size="xl_square" className="font-display uppercase text-xl">
              <Link href={branding.instagramUrl} target="_blank" rel="noopener noreferrer">
                <InstagramIcon size={30} />
              </Link>
            </Button>
          </div>
          <ScrollToSection targetId="featured-work" className="starting:opacity-0 opacity-1000 duration-500 delay-[3100ms] transition-opacity">
            <ExploreMoreArrows className="mt-8" />
          </ScrollToSection>
        </div>


        {/* Featured Works Section */}
        <section className="w-full flex flex-col items-center gap-8 starting:opacity-0 opacity-1000 duration-500 delay-[1100ms] transition-opacity">
          <h2 id="featured-work" className="text-3xl font-display uppercase tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white via-primary to-secondary to-86%">
            Featured Work
          </h2>
          <ProjectGallery projects={featuredProjects} />
        </section>

      </main>
    </div>
  );
}
