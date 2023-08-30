"use client";
import Providers from "@/src/app/Providers";
import "./globals.css";
import type { Metadata } from "next";
import NavBar from "@/src/components/Navbar";

export const metadata: Metadata = {
  title: "Fitness Tracking",
  description: "Free to use Fitness Tracking Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar>{children}</NavBar>
        </Providers>
      </body>
    </html>
  );
}
