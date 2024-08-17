import type { Metadata } from "next";
import { Mitr } from "next/font/google";
import "@/styles/globals.css";
import { Suspense } from "react";
import { Moul } from "next/font/google";
import Loading from "./loading";
const mitr = Moul({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "IT30 Code of Under World's Treasure",
  description: "Code of Under World's Treasure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mitr.className}>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
