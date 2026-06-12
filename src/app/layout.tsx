import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/shared/CustomCursor";
import { LoadingScreen } from "@/components/animations/LoadingScreen";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: "Reza Kusuma | Full-Stack Web Developer",
  description: "Portfolio of Reza Kusuma, a creative Full-Stack Web Developer specializing in modern web experiences.",
  metadataBase: new URL("https://hirezakusuma.net"),
  openGraph: {
    title: "Reza Kusuma | Full-Stack Web Developer",
    description: "Building immersive digital experiences with Next.js and React.",
    url: "https://hirezakusuma.net",
    siteName: "Reza Kusuma Portfolio",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reza Kusuma | Full-Stack Web Developer",
    description: "Building immersive digital experiences with Next.js and React.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="font-sans bg-background text-white antialiased selection:bg-cyan-primary/30 selection:text-white">
        <LoadingScreen />
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
