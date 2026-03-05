import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-center py-32 px-8 md:px-16">
        <Image
          src="/SGG.svg"
          alt="Sabrina Giselle Gonzalez Logo"
          width={200}
          height={200}
          className="mb-8 w-36 h-36 md:w-48 md:h-48 starting:opacity-0 opacity-1000 duration-500 delay-300 transition-opacity"
        />
        <h1 className="text-4xl font-display bg-clip-text text-transparent bg-linear-to-b from-white via-primary to-secondary to-86% uppercase tracking-tight text-center starting:opacity-0 opacity-1000 duration-500 delay-500 transition-opacity">
            Page not found
        </h1>
        <p className="mt-6 text-lg text-center max-w-xl starting:opacity-0 opacity-1000 duration-500 delay-700 transition-opacity">
          Sorry, but this page does not exist yet, or you clicked a broken link. Please check back in soon.
        </p>
        <div className="flex flex-row gap-3 mt-8 justify-center items-center starting:opacity-0 opacity-1000 duration-500 delay-[900ms] transition-opacity">
          <Button asChild variant="underline" size="lg" className="font-display uppercase text-xl pt-1">
            <Link href="/">
              Return Home
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
