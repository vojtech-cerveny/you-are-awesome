import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Are you the best QA?",
  description: "Let's find out!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen justify-center flex-col p-24">
          <div className="z-10 w-full max-w-5xl items-center justify-center mx-auto flex font-mono text-sm lg:flex">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
