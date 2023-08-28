import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./nav";
import { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michael Allen Elguira",
  description: "Michael Allen Elguira's portfolio",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Nav />
          <main className="relative">{children}</main>
        </div>
      </body>
    </html>
  );
}
