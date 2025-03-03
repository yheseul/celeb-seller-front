import type { Metadata } from "next";
import "./globals.css";
import Layout from "../commons/layouts/layout/Layout";

export const metadata: Metadata = {
  title: "Celeb-Seller",
  description:
    "Where sellers become celebs! Join the trendiest secondhand market.",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="flexColCenter px-3 min-w-80 lg:px-28">
        {modal}
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
