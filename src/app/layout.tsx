import type { Metadata } from "next";
import { Mitr } from "next/font/google";
import "@/styles/globals.css"


const mitr = Mitr({
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700']
})

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
      <body className={mitr.className}>{children}</body>
    </html>
  );
}
