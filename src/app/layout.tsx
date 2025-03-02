import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Celeb-Seller",
  description:
    "Where sellers become celebs! Join the trendiest secondhand market.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
