import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { NextAuthProvider } from "@/components/providers/NextAuthProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Binance-Inspired Trading Platform",
  description:
    "Buy, trade, and earn crypto with low fees. The world's leading cryptocurrency exchange.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative bg-canvas-dark text-body">
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
