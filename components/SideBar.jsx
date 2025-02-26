"use client";
import style from "./Sidebar.module.css";
import Image from "next/image";

import Link from "next/link";
import userLogo from "@/public/user.svg";
import inventoryLogo from "@/public/intentory.svg";
import deconexionLogo from "@/public/log-out.svg";
import receptionLogo from "@/public/reception.svg";
import retourLogo from "@/public/retour.svg";
import rechercheLogo from "@/public/search.svg";
import accueilLogo from "@/public/home.svg";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const url = usePathname();
  console.log("pathName : " + url);
  return (
    <div className={style.sideBar}>
      <nav>
        <ul>
          <li>
            {url === "/dashboard" ? (
              <div className={style.selection}>
                <span className={style.circleH}></span>
                <span className={style.circleB}></span>
                <Image src={accueilLogo} alt="logo Accueil" />
                <Link href="/dashboard">Accueil</Link>
              </div>
            ) : (
              <div>
                <Image src={accueilLogo} alt="logo Accueil" />
                <Link href="/dashboard">Accueil</Link>
              </div>
            )}
          </li>
          <li>
            {url === "/dashboard/recherche" ? (
              <div className={style.selection}>
                <span className={style.circleH}></span>
                <span className={style.circleB}></span>
                <Image src={rechercheLogo} alt="logo recherche" />
                <Link href="/dashboard/recherche">Recherche Article</Link>
              </div>
            ) : (
              <div>
                <Image src={rechercheLogo} alt="logo recherche" />
                <Link href="/dashboard/recherche">Recherche Article</Link>
              </div>
            )}
          </li>
          <li>
            {url === "/dashboard/receptions" ? (
              <div className={style.selection}>
                <span className={style.circleH}></span>
                <span className={style.circleB}></span>
                <Image src={receptionLogo} alt="logo reception" />
                <Link href="/dashboard/receptions">
                  Gestions des Réceptions
                </Link>
              </div>
            ) : (
              <div>
                <Image src={receptionLogo} alt="logo reception" />
                <Link href="/dashboard/receptions">
                  Gestions des Réceptions
                </Link>
              </div>
            )}
          </li>
          <li>
            {url === "/dashboard/retours" ? (
              <div className={style.selection}>
                <span className={style.circleH}></span>
                <span className={style.circleB}></span>
                <Image src={retourLogo} alt="logo retour" />
                <Link href="/dashboard/retours">Traitement des Retours</Link>
              </div>
            ) : (
              <div>
                <Image src={retourLogo} alt="logo retour" />
                <Link href="/dashboard/retours">Traitement des Retours</Link>
              </div>
            )}
          </li>
          <li>
            {url === "/dashboard/inventaire" ? (
              <div className={style.selection}>
                <span className={style.circleH}></span>
                <span className={style.circleB}></span>
                <Image src={inventoryLogo} alt="logo inventory" />
                <Link href="/dashboard/inventaire">Article & Inventaire</Link>
              </div>
            ) : (
              <div>
                <Image src={inventoryLogo} alt="logo inventory" />
                <Link href="/dashboard/inventaire">Article & Inventaire</Link>
              </div>
            )}
          </li>
          <li>
            {url === "/dashboard/utilisateurs" ? (
              <div className={style.selection}>
                <span className={style.circleH}></span>
                <span className={style.circleB}></span>
                <Image src={userLogo} alt="logo Utilisateur" />
                <Link href="/dashboard/utilisateurs">
                  Gestion des Utilisateurs
                </Link>
              </div>
            ) : (
              <div>
                <Image src={userLogo} alt="logo Utilisateur" />
                <Link href="/dashboard/utilisateurs">
                  Gestion des Utilisateurs
                </Link>
              </div>
            )}
          </li>
        </ul>
        <ul>
          <li>
            <div>
              <Image src={deconexionLogo} alt="logo deconixion" />
              <Link href="#">Déconnexion</Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
