import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import { NextAuthProvider } from "@/components/providers/NextAuthProvider";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TradeBuddy - AI Powered Trading Terminal",
  description: "Institutional-grade AI analytics and real-time execution for modern traders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${spaceGrotesk.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col relative selection:bg-accent selection:text-black bg-background text-foreground dark:bg-[#050505] dark:text-white">
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
