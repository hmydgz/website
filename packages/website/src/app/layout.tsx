import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { Root } from "@/components/layout/root/Root";

export const metadata: Metadata = {
  title: "hmydgz",
  description: "hmydgz's website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative z-0 min-h-screen">
        <Root>{ children }</Root>
      </body>
    </html>
  );
}
