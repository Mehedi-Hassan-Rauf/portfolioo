import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import NavBar from "@/components/NavBar";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mehedi Hassan Rauf",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col gap-10 min-h-screen justify-center items-center dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative`}
        suppressHydrationWarning={true}
      >
        <div className="absolute pointer-events-none inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>
        <NavBar />
        <Cursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}
