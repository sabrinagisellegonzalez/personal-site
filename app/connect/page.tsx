import { ProfileFlip } from "@/components/profile-flip";
import { Button } from "@/components/ui/button";
import { branding } from "@/lib/self";
import Link from "next/link";

export default function ConnectPage() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-8 md:px-16 gap-4">
            <ProfileFlip className="w-36 h-36 xs:w-48 xs:h-48 sm:w-64 sm:h-64" />
            <h1 className="font-display uppercase tracking-tight text-center text-4xl sm:text-5xl starting:opacity-0 opacity-1000 duration-500 delay-500 transition-opacity bg-clip-text text-transparent bg-linear-to-b from-white via-primary to-secondary to-86%">
                Sabrina Giselle Gonzalez
            </h1>
            <p className="mt-2 text-base text-center max-w-xl starting:opacity-0 opacity-1000 duration-500 delay-700 transition-opacity">
                {branding.aboutMe}
            </p>
            <div className="flex flex-col gap-4 mt-10 justify-center items-center w-full max-w-lg starting:opacity-0 opacity-1000 duration-500 delay-[900ms] transition-opacity">
                <Button asChild variant="underline" size="lg" className="font-display uppercase text-xl pt-1 w-full">
                    <Link href={branding.linkedInUrl} target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </Link>
                </Button>
                <Button asChild variant="underline" size="lg" className="font-display uppercase text-xl pt-1 w-full">
                    <Link href={branding.instagramUrl} target="_blank" rel="noopener noreferrer">
                        Instagram
                    </Link>
                </Button>
            </div>
        </main>
    </div>
  );
}