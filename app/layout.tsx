import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Timothy Portfolio",
  description: "Personal work portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} ${geistMono.className} bg-zinc-950 text-zinc-100 antialiased`}
      >
        <Toaster />
        <div className="min-h-screen flex">
          <Sidebar />
          <div className="flex-1 ml-10px md:ml-65">
            <main className="min-h-screen">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
