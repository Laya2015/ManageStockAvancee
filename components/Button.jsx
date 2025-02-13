import styles from "./Button.module.css";

export default function Button({ texte, className, active, type}) {
 return (
  <button
   className={`${styles.button} ${className} ${active ? styles.active : ""}`}
   type={type}>
   {texte}
  </button>
 );
}
