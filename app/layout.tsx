import type { Metadata } from "next";
import { Kumbh_Sans, Montserrat, Castoro, My_Soul } from "next/font/google";
import "./globals.css";
import StarField from "@/components/starfield"
import { Navbar } from "@/components/navbar";

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

const mySoul = My_Soul({
  variable: "--font-my-soul",
  subsets: ["latin"],
  weight: "400",
});

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
        className={`${kumbhSans.variable} ${montserrat.variable} ${castoro.variable} ${mySoul.variable} antialiased`}
      >
        <StarField />
        <Navbar />
        <div className="z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
