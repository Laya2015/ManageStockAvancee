
import MainLayout from "@/components/MainLayout";

import style from "./layout.module.css";
import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "900", "700", "800", "500"],
  style: ["italic", "normal"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "ManageStock",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable}`}>
      <body className={style.body}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
