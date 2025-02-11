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
        <div className={style.info}>
          <div>
            <div>
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
            <div>
              <h4>Adresse</h4>
              <p>801 Aviation Pkwy, Ottawa, ON K1J 1H2</p>
            </div>
            <div>
              <h4>Information Pratique</h4>
              <p>contact@managestock.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
