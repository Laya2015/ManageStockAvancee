import style from "./ContactezNous.module.css";
import Image from "next/image";
import Link from "next/link";
import facebook from "@/public/facebook.svg";
import instagram from "@/public/instagram.svg";
import twitter from "@/public/twitter.svg";
import whatsapp from "@/public/whatsapp.svg";

export default function ContactezNous() {
  return (
    <div className={style.ContactezNous}>
      <h1>Contactez-Nous</h1>
      <div className={style.body}>
        <div className={style.bodyMessage}>
          <div className={style.nomEmail}>
            <div>
              <h4>
                Nom<span>*</span>
              </h4>
              <input type="Nom" />
            </div>
            <div>
              <h4>
                Email<span>*</span>
              </h4>
              <input type="Nom" />
            </div>
          </div>
          <div className={style.telNomEntreprise}>
            <div>
              <h4>
                Telephone<span>*</span>
              </h4>
              <input type="Nom" />
            </div>
            <div>
              <h4>Nom de l'entreprise</h4>
              <input type="Nom" />
            </div>
          </div>
          <div className={style.objet}>
            <h4>Objet</h4>
            <input type="Nom" />
          </div>
          <div className={style.message}>
            <h4>
              Votre Message<span>*</span>
            </h4>
            <input type="Nom" />
          </div>
        </div>
        <div className={style.bar}></div>
        <div className={style.info}>
          <div className={style.reseaux}>
            <Link href="#">
              <Image src={facebook} alt="logo facebook" />
            </Link>
            <Link href="#">
              <Image src={instagram} alt="logo instagram" />
            </Link>
            <Link href="#">
              <Image src={twitter} alt="logo twitter" />
            </Link>
            <Link href="#">
              <Image src={whatsapp} alt="logo whatsapp" />
            </Link>
          </div>
          <div className={style.adresse}>
            <div className={style.circle}></div>
            <div className={style.adresseText}>
              <h4>Adresse</h4>
              <p>801 Aviation Pkwy, Ottawa, ON K1J 1H2</p>
              <p>438 896 8181</p>
            </div>
          </div>
          <div className={style.contact}>
            <div className={style.circle}></div>
            <div className={style.contactText}>
              <h4>Information Pratique</h4>
              <p>contact@managestock.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
