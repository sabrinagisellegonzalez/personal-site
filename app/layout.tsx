import type { Metadata, Viewport } from "next";
import { Kumbh_Sans, Montserrat, Castoro } from "next/font/google";
import "./globals.css";
import StarField from "@/components/starfield";

const kumbhSans = Kumbh_Sans({
  variable: "--font-kumbh-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const castoro = Castoro({
  variable: "--font-castoro",
  subsets: ["latin"],
  weight: "400",
});

export const viewport: Viewport = {
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Sabrina Giselle Gonzalez",
  description: "Portfolio of Sabrina Giselle Gonzalez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.variable} ${montserrat.variable} ${castoro.variable} antialiased`}
      >
        <StarField />
        <div className="scroll-container relative z-10 h-full min-h-screen overflow-y-auto">
        {children}
        </div>
      </body>
    </html>
  );
}
