import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-center py-32 px-8 md:px-16">
        <Image
          src="/SGG.svg"
          alt="Sabrina Giselle Gonzalez Logo"
          width={200}
          height={200}
          className="mb-8 w-36 h-36 md:w-64 md:h-64"
        />
        <h1 className="text-5xl font-display bg-clip-text text-transparent bg-linear-to-b from-white via-primary to-secondary to-86% uppercase tracking-tight text-center">
          Sabrina Giselle Gonzalez
        </h1>
        <p className="mt-6 text-lg text-center max-w-xl">
          My portfolio is currently work in progress. Please check back in soon. In the meantime, connect with me on LinkedIn below.
        </p>
        <div className="flex flex-row gap-3 mt-8 justify-center items-center">
          <Button asChild variant="underline" size="lg" className="font-display uppercase text-xl pt-1">
            <Link href="https://www.linkedin.com/in/sabrina-giselle-gonzalez/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
