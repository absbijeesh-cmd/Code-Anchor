import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "CodeAnchor | High-Tensile Technical Ropes & 10.2mm Static Adventure Rope",
  description:
    "Engineered for the extreme. CodeAnchor manufactures world-class static, dynamic, canyoneering, and marine ropes, featuring our flagship 10.2 mm Static Nylon Adventure Rope.",
  keywords: [
    "10.2 mm static nylon adventure rope",
    "climbing rope",
    "static rope",
    "Kernmantle rope",
    "rescue rope",
    "canyoneering rope",
    "marine rope",
    "arborist rope",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-brand-navy flex flex-col font-sans text-slate-100 selection:bg-secondary-400 selection:text-brand-navy">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
