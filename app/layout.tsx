import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import WorkLink from "./components/WorkLink";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Etienne Lee",
  description: "National Tennis player turned software developer",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="flex justify-between items-center p-5 border-b">
          <Link href="/" style={{ fontWeight: 400, fontSize: "0.95rem" }}>
            Etienne Lee
          </Link>
          <div className="flex gap-8" style={{ fontSize: "0.95rem" }}>
            <WorkLink />
            <Link href="/about">about</Link>
            <a href="/resume.pdf" target="_blank">
              resume
            </a>
          </div>
        </nav>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
