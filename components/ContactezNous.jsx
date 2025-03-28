"use client";
import style from "./ContactezNous.module.css";
import Image from "next/image";
import Link from "next/link";
import facebook from "@/public/facebook.svg";
import instagram from "@/public/instagram.svg";
import twitter from "@/public/twitter.svg";
import whatsapp from "@/public/whatsapp.svg";
import Button from "@/components/Button";
import { useActionState, useState } from "react";

export default function ContactezNous({ className }) {
  /**
   * Fonction de validation du formulaire de contact.
   * Vérifie si tous les champs du formulaire (nom, courriel, téléphone, message, etc.)
   * sont remplis correctement et renvoie l'état mis à jour avec les erreurs correspondantes.
   *
   * - Si un champ est vide ou mal renseigné, un message d'erreur est ajouté.
   * - Si tous les champs sont valides, l'état mis à jour sera renvoyé avec les valeurs saisies.
   *
   * Cette fonction prend en entrée l'état précédent du formulaire et les données soumises via `formData`.
   * Elle met à jour l'état avec les erreurs ou les valeurs des champs.
   * Enfin, elle vide le champ de téléphone après soumission du formulaire.
   *
   * @param {object} previeousState - L'état précédent du formulaire.
   * @param {FormData} formData - Les données soumises via le formulaire.
   * @returns {object} - Un objet représentant l'état mis à jour du formulaire avec les erreurs.
   */
  
  const contactez = (previeousState, formData) => {
    const nom = formData.get("nom");
    const courriel = formData.get("courriel");
    const telephone = formData.get("telephone");
    const nomentreprise = formData.get("nomEntreprise");
    const objet = formData.get("objet");
    const message = formData.get("message");

    let newState = {
      nom: { valeur: "", erreur: null },
      courriel: { valeur: "", erreur: null },
      telephone: { valeur: "", erreur: null },
      nomentreprise: { valeur: "", erreur: null },
      objet: { valeur: "", erreur: null },
      message: { valeur: "", erreur: null },
    };
    let erreur = false;

    if (!nom) {
      erreur = true;
      newState.nom.erreur = "Veuillez entrer votre nom";
    }
    if (!courriel) {
      erreur = true;
      newState.courriel.erreur = "Veuillez entrer une adresse courriel";
    } else if (
      !courriel.match(
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
      )
    ) {
      erreur = true;
      newState.courriel.erreur = "Veuillez entrer une adresse courriel valide";
    }

    if (!telephone) {
      erreur = true;
      newState.telephone.erreur = "Veuillez entrer un numero de telephone";
    } else if (telephone.length < 6 || telephone.length > 10) {
      erreur = true;
      newState.telephone.erreur =
        "Veuillez entrer un numéro de téléphone valide entre 6 à 10 chiffres.";
    }

    if (!message) {
      erreur = true;
      newState.message.erreur = "Veuillez entrer un message ";
    }
    if (message < 10 || message > 200) {
      erreur = true;
      newState.message.erreur =
        "Veuillez entrer un message entre 10 a 200 caracter ";
    }

    if (erreur) {
      newState.nom.valeur = nom;
      newState.courriel.valeur = courriel;
      newState.telephone.valeur = telephone;
      newState.nomentreprise.valeur = nomentreprise;
      newState.objet.valeur = objet;
      newState.message.valeur = message;
    }

    // Vide le champ de téléphone après la soumission du formulaire,
    // uniquement lorsque le formulaire est prêt à être soumis (sans erreur)
    if (!erreur) {
      setPhone("");
    }

    return newState;
  };

  const [formState, formAction] = useActionState(contactez, {
    nom: { valeur: "", erreur: null },
    courriel: { valeur: "", erreur: null },
    telephone: { valeur: "", erreur: null },
    nomentreprise: { valeur: "", erreur: null },
    objet: { valeur: "", erreur: null },
    message: { valeur: "", erreur: null },
  });

  const [phone, setPhone] = useState("");
  /**
   * Fonction pour empêcher l'entrée de lettres dans le champ téléphone
   * À chaque changement dans le texte, cette fonction est appelée pour vérifier
   * si des lettres sont présentes. Si c'est le cas, elle remplace la lettre par ""
   * @param {Event} event
   */
  const handleChange = (event) => {
    // Si l'entrée contient un caractère qui n'est pas un chiffre, on remplace
    const value = event.target.value.replace(/\D/g, "");
    setPhone(value);
  };

  return (
    <div className={`${style.ContactezNous} ${className}`}>
      <h1>Contactez-Nous</h1>
      <div className={style.body}>
        <form action={formAction} className={style.form} noValidate>
          <div className={style.nomEmail}>
            <label>
              Nom <span>*</span>
              <input
                type="text"
                name="nom"
                defaultValue={formState.nom.valeur}
                required
              />
              <div className={style.erreur}>{formState.nom.erreur}</div>
            </label>
            <label>
              Email <span>*</span>
              <input
                type="email"
                name="courriel"
                defaultValue={formState.courriel.valeur}
                required
              />
              <div className={style.erreur}>{formState.courriel.erreur}</div>
            </label>
          </div>
          <div className={style.telNomEntreprise}>
            <label>
              Telephone <span>*</span>
              <input
                type="tel"
                name="telephone"
                value={phone}
                onChange={handleChange}
                maxLength={10}
                minLength={6}
                defaultValue={!phone ? formState.telephone.valeur : phone}
                required
              />
              <div className={style.erreur}>{formState.telephone.erreur}</div>
            </label>
            <label>
              Nom de l'entreprise
              <input
                type="text"
                name="nomEntreprise"
                defaultValue={formState.nomentreprise.valeur}
              />
            </label>
          </div>
          <div className={style.objet}>
            <label>
              Objet
              <input
                type="text"
                name="objet"
                defaultValue={formState.objet.valeur}
              />
            </label>
          </div>
          <div className={style.message}>
            <label>
              Votre Message <span>*</span>
              <textarea
                name="message"
                minLength={10}
                maxLength={200}
                defaultValue={formState.message.valeur}
                required
              />
              <div className={style.erreur}>{formState.message.erreur}</div>
            </label>
          </div>
          <Button
            texte={"Envoyer"}
            active={true}
            className={style.buttonEnvoyer}
            type={"submit"}
          />
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
