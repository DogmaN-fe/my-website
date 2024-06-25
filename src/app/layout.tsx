import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./ui/Header/Header";
import styles from "./layout.module.sass"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MY.SITE",
  description: "Сайт-визитка",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ru">
      <body className={`${styles.body} ${inter.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
