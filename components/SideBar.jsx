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

export default function SideBar() {
  return (
    <div className={style.sideBar}>
      <nav>
        <ul>
          <li>
            <div className={style.selection}>
              <span className={style.circleH}></span>
              <span className={style.circleB}></span>
              <Image src={accueilLogo} alt="logo Accueil" />
              <Link href="#">Accueil</Link>
            </div>
          </li>
          <li>
            <div>
              <Image src={rechercheLogo} alt="logo recherche" />
              <Link href="#">Recherche Article</Link>
            </div>
          </li>
          <li>
            <div>
              <Image src={receptionLogo} alt="logo reception" />
              <Link href="#">Gestions des Réceptions</Link>
            </div>
          </li>
          <li>
            <div>
              <Image src={retourLogo} alt="logo retour" />
              <Link href="#">Traitement des Retours</Link>
            </div>
          </li>
          <li>
            <div>
              <Image src={inventoryLogo} alt="logo inventory" />
              <Link href="#">Article & Inventaire</Link>
            </div>
          </li>
          <li>
            <div>
              <Image src={userLogo} alt="logo Utilisateur" />
              <Link href="#">Gestion des Utilisateurs</Link>
            </div>
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
