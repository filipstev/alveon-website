import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Alveon AI",
  description: "A smarter hive for your workflows, agents, and automation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://unpkg.com" />
        <link rel="preload" href="/models/alvi-poster.webp" as="image" />
        <link
          rel="preload"
          href="/models/alvi.glb"
          as="fetch"
          type="model/gltf-binary"
        />
      </head>
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
