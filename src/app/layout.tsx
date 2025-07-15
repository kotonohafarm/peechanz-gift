import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ことのはファーム - 元気玉LP",
  description: "ことのはファームのにんにく卵黄「元気玉」のLPです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
