import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "INDIWEAR",
  description: "Fardamentos profissionais personalizados em Moçambique. Uniformes corporativos, escolares, hospitalares e muito mais.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Removida a fonte do HTML
    <html lang="en" className="h-full antialiased">
      {/* Fonte aplicada diretamente no BODY */}
      <body className={`${plusJakartaSans.className} min-h-full flex flex-col`}>
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}