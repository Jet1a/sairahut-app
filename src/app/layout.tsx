import type { Metadata } from "next";
import { Mitr } from "next/font/google";
import "@/styles/globals.css";
import { Suspense } from "react";

const mitr = Mitr({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
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
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  );
}
