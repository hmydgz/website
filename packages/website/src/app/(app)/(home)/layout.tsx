import type { Metadata } from "next";
// import "../../globals.css";
import { Header } from "@/components/layout/header";
import { Content } from "@/components/layout/content";
import { Footer } from "@/components/layout/footer";

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
    <html lang="zh">
      <body className="relative z-0 min-h-screen">
        <Header />
        <Content>{ children }</Content>
        <Footer />
      </body>
    </html>
  );
}
