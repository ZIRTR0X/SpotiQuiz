"use client";

import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Header from "~/components/header";
import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <NextUIProvider>
          <SessionProvider>
            <Header />
            {children}
          </SessionProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
