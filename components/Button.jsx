import styles from "./Button.module.css";

export default function Button({ texte, className, active }) {
 return (
  <button
   className={`${styles.button} ${className} ${active ? styles.active : ""}`}>
   {texte}
  </button>
 );
}
