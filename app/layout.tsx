import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michael Allen Elguira",
  description: "Michael Allen Elguira's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-6xl flex flex-col gap-8 mx-auto">
          <nav className="flex justify-between">
            <h1 className="px-3 py-2 font-bold">MICHAEL ALLEN ELGUIRA</h1>
            <div className="flex gap-2">
              <Link href="/about" className="px-3 py-2">
                About
              </Link>
              <Link href="/experiences" className="px-3 py-2">
                Experiences
              </Link>
              <Link href="/contact" className="px-3 py-2">
                Contact
              </Link>
            </div>
          </nav>
          <>{children}</>
        </main>
      </body>
    </html>
  );
}
