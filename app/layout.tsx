import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import InteractiveBackground from "./components/landing/InteractiveBackground";
import { LanguageProvider } from "./components/landing/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MELBET MENA | Global partner network",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-hidden bg-black text-white antialiased">
        <LanguageProvider>
          <InteractiveBackground />
          <div className="relative z-10">{children}</div>
        </LanguageProvider>
      </body>
    </html>
  );
}
