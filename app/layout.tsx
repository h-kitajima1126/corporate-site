import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { company } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-en" });
const noto = Noto_Sans_JP({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-ja", preload: false });

export const metadata: Metadata = {
  title: company.name,
  description: `${company.name}は、ホームページ制作とドメイン・サーバー運用をワンストップで提供します。`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${inter.variable} ${noto.variable}`}>
      <body>{children}</body>
    </html>
  );
}
