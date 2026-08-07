import Image from "next/image"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ResumePage() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-8 md:px-16 gap-6">
        <h1 className="font-display uppercase tracking-tight text-center text-4xl sm:text-5xl starting:opacity-0 opacity-1000 duration-500 delay-500 transition-opacity bg-clip-text text-transparent bg-linear-to-b from-white via-primary to-secondary to-86%">
          Resume
        </h1>
        <p className="text-sm text-muted-foreground starting:opacity-0 opacity-1000 duration-500 delay-700 transition-opacity">
          Updated August 2026
        </p>

        <div className="mt-6 w-full max-w-2xl starting:opacity-0 opacity-1000 duration-500 delay-[900ms] transition-opacity">
          <div className="overflow-hidden rounded-lg border border-primary/30 shadow-glow-card">
            <Image
              src="/resume/resume.jpg"
              alt="Sabrina Giselle Gonzalez resume preview"
              width={1700}
              height={2200}
              className="w-full h-auto"
              priority
            />
          </div>

          <div className="mt-8 flex justify-center">
            <Button asChild variant="leaf" size="xl" className="font-display uppercase text-xl">
              <a href="/resume/resume.pdf" download="Sabrina-Giselle-Gonzalez-Resume.pdf">
                <Download size={24} />
                Download PDF
              </a>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}