import "./globals.css";
import { Heebo, Inter } from "next/font/google";
import React from "react";
import Sidebar from "./components/Sidebar";

const headFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-head",
});

const bodyFont = Heebo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang='en'>
      <body className={`${bodyFont.variable} ${headFont.variable}`}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
