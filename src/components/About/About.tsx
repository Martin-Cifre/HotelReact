//import React from 'react';
import { getImgUrl } from "../../utils.js";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section id="About">
      <div className={styles.container}>
        <img
          className={styles.img}
          src={getImgUrl("About/About.png")}
          alt="About Hotel Paraiso"
        />
        <div className={styles.containerTxt}>
          <h2>Hotel Paraiso</h2>
          <p>
            Ubicado en una isla paradisiaca de ensueño, el Hotel Paraíso emerge
            como un oasis de fantasía para los viajeros exigentes. Con una
            apertura prevista para el 2023, nuestras instalaciones representarán
            la máxima expresión del lujo y la comodidad. Ofreceremos una
            experiencia única e incomparable a precios que desafiarán cualquier
            estándar de la competencia en la región. Estratégicamente ubicado a
            solo 20 minutos en coche del Aeropuerto Internacional Lynden
            Pindling y a 15 minutos de los centros turísticos más vibrantes de
            Nassau. Sumérjase en la exuberancia tropical de nuestras
            instalaciones mientras exploramos juntos los misterios y maravillas
            de este paraíso terrenal.
          </p>
        </div>

        <div className={styles.line}></div>
      </div>
    </section>
  );
}
