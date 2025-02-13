import style from "./ContactezNous.module.css";
import Image from "next/image";
import Link from "next/link";
import facebook from "@/public/facebook.svg";
import instagram from "@/public/instagram.svg";
import twitter from "@/public/twitter.svg";
import whatsapp from "@/public/whatsapp.svg";
import Button from "@/components/Button";

export default function ContactezNous() {
  return (
    <div className={style.ContactezNous}>
      <h1>Contactez-Nous</h1>
      <div className={style.body}>
        <form className={style.form}>
          <div className={style.nomEmail}>
            <label>
              Nom <span>*</span>
              <input type="text" name="nom" />
            </label>
            <label>
              Email <span>*</span>
              <input type="email" name="courriel" />
            </label>
          </div>
          <div className={style.telNomEntreprise}>
            <label>
              Telephone <span>*</span>
              <input type="tel" name="telephone" />
            </label>
            <label>
              Nom de l'entreprise <span>*</span>
              <input type="text" name="nomEntreprise" />
            </label>
          </div>
          <div className={style.objet}>
            <label>
              Objet <span>*</span>
              <input type="text" name="objet" />
            </label>
          </div>
          <div className={style.message}>
            <label>
              Votre Message <span>*</span>
              <input type="text" name="message" />
            </label>
          </div>
          <Button texte={"Envoyer"} active={true} className={style.button} />
        </form>
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
