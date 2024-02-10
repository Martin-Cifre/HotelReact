//import React from 'react'
import { getImgUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.imgBg}>
        <h1 className={styles.title}>Contactanos</h1>

        <form className={styles.form}>
          <input type="text" id="name" name="name" placeholder="Nombre" />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Correo electronico"
          />
          <br />

          <textarea
            id="message"
            name="message"
            placeholder="Mensaje"
          ></textarea>
          <br />

          <button type="button">Enviar</button>
        </form>

        <div className={styles.linea} />

        
        <div className={styles.redes}>
          <div>
            <img src={getImgUrl("/Contact/instagram.png")} alt="" />
            <p>@usuariohotel</p>
          </div>
          <div>
            <img src={getImgUrl("/Contact/facebbok.png")} alt="" />
            <p>@usuariohotel</p>
          </div>
          <div>
            <img src={getImgUrl("/Contact/mail.png")} alt="" />
            <p>info@usuariohotel.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
