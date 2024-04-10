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
        className={`${inter.className} flex flex-col gap-10 min-h-screen max-w-screen justify-center items-center dark:bg-black bg-black bg-grid-white/[0.08]`}
        suppressHydrationWarning={true}
      >
        {/* <div className="absolute pointer-events-none inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div> */}
        {/* <div className="absolute inset-0 w-screen pointer-events-none backdrop-sepia-0 bg-black/40"></div> */}
        <NavBar />
        <Cursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}
