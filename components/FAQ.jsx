"use client";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { IoPlay } from "react-icons/io5";
import styles from "@/components/FAQ.module.css";

export default function FAQ({ question, response }) {
 const [isResponse, setResponse] = useState(false);

 const toggleResponse = () => {
  setResponse(!isResponse);
 };

 return (
  <div className={styles.faqContainer}>
   {/* Question */}
   <div className={styles.faqHead} onClick={toggleResponse}>
    <IoPlay className={styles.iconPlay} />
    <p className={styles.faqQuestion}>{question}</p>
    <FaAngleDown
     className={`${styles.iconArrow} ${isResponse ? styles.rotated : ""}`}
    />
   </div>

   {/* Réponse */}
   {isResponse && (
    <div className={styles.faqResponse}>
     <p>{response}</p>
    </div>
   )}
  </div>
 );
}
