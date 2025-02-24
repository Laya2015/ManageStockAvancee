import style from "./layout.module.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "900", "700", "800", "500"],
  style: ["italic", "normal"],
  display: "swap",
  variable: "--font-inter",
});

export default function DashboardLayout({ children }) {
  return (
    <main>dashboard</main>
    // <html lang="fr" className={`${inter.variable}`}>
    //   <body>
    //     <div>dashboard layout</div>
    //     <main>{children}</main>
    //   </body>
    // </html>
  );
}
