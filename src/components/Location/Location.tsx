//import React from 'react'
import { getImgUrl } from "../../utils";
import styles from "./Location.module.css";

export const Location = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.containerTxt}>
          <h2>Conoce Nassau</h2>
          <p>
            Anclado estratégicamente en el corazón histórico de Nassau, nuestro
            hotel se erige como la puerta de entrada a las fascinantes historias
            que esta vibrante isla tiene para contar. Embárcate en un viaje a
            través del tiempo explorando el pasado pirata de Nassau, donde
            sitios legendarios como el Fuerte Charlotte y el Museo Pirata de
            Nassau te sumergirán en la intrépida vida de los corsarios del
            Caribe. Recorre las callejuelas empedradas de la ciudad colonial,
            donde cada adoquín lleva impreso el eco de siglos pasados. Admira la
            majestuosa arquitectura colonial española y británica mientras
            deambulas por los barrios históricos de Nassau, donde las
            influencias culturales se entrelazan en un cautivador tapiz.
            Descubre los secretos de la Revolución Americana y la importancia de
            Nassau como refugio para los leales a la corona británica en el
            siglo XVIII. Con nuestro hotel como tu punto de partida, te
            invitamos a sumergirte en la rica historia y el encanto eterno de
            Nassau, donde cada esquina es un relato y cada rincón espera ansioso
            ser descubierto en el fascinante libro de la historia del Caribe.
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
