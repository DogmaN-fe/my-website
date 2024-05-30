import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from './layout.module.sass'
import Navigation from "./ui/navigation/naviagtion";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={styles.header}>
          <Navigation />
        </header>
        {children}
      </body>
    </html>
  );
}
