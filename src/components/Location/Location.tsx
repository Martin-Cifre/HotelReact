//import React from 'react'
import { getImgUrl } from "../../utils";
import styles from "./Location.module.css";

export const Location = () => {
  return (
    <section id="Location">
      <div className={styles.container}>
        <div className={styles.containerTxt}>
          <h2>Conoce Nassau</h2>
          <p>
            En Nassau, nuestro hotel es la puerta a su historia pirata y
            colonial. Descubre calles empedradas, arquitectura majestuosa y
            secretos. Sumérgete en la rica historia de Nassau. Disfruta de la
            vibrante vida nocturna y las playas de ensueño que esta isla
            caribeña tiene para ofrecer, todo desde la comodidad de nuestro
            alojamiento.
          </p>
        </div>
        <img
          className={styles.img}
          src={getImgUrl("Location/Nassau.jpg")}
          alt="About Hotel Paraiso"
        />
      </div>
    </section>
  );
}
