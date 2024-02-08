//import React from 'react'
//import { getImgUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.imgBg}>
        
        <h1 className={styles.title}>Contactanos</h1>     

        <form className={styles.form}>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" />
            <br/>
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message"></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </footer>
  );
}
