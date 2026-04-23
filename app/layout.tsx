import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import localFont from "next/font/local";

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-red-hat",
});

// Local font (Tan Mon Cheri) loaded at module scope
const tanMonCheri = localFont({
  src: [
    {
      path: "../public/fonts/TanMonCheri-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-tan-mon-cheri",
});

export const metadata: Metadata = {
  title: "Vista Suites",
  description: "A modern hotel management system built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${redHat.variable} ${tanMonCheri.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
