"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import style from "@/app/layout.module.css";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function MainLayout({ children }) {
  const [isDashboard, setIsDashboard] = useState(false);
  const pathname = usePathname();

  // L'effet s'exécute côté client pour surveiller l'URL et ajuster l'état
  useEffect(() => {
    // Vérifier si on est sur la route du dashboard
    setIsDashboard(pathname.startsWith("/dashboard"));
  }, [pathname]);
  return (
    <>
      {!isDashboard && <Header />}
      <main className={style.main}>{children}</main>;
      {!isDashboard && <Footer />}
    </>
  );
}
