import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavSidebar } from "./components/hive/nav-sidebar";
import { Header } from "./components/hive/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "H.I.V.E - Human Intelligence Virtual Ecosystem",
  description: "AI-powered CRM and automation system for home services and small business scalability",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
          <NavSidebar />
          <div className="flex-1 sm:pl-72">
            <Header />
            <main className="container py-6 px-4">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}