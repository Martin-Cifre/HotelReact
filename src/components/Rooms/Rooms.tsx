//import React from 'react'
import styles from "./Rooms.module.css";
import { getImgUrl } from "../../utils.js";

export const Rooms = () => {
  return (
    <section className={styles.tata}>
      <h2>Habitaciones</h2>
      <div>
        <div>
          <img src={getImgUrl("Rooms/WiFi.png")} alt="Icono WiFi" />
          <p>Wifi Gratuito</p>
        </div>

        <div>
          <img src={getImgUrl("Rooms/WiFi.png")} alt="Icono Room Service" />
          <p>Room Service</p>
        </div>

        <div>
          <img
            src={getImgUrl("Rooms/WiFi.png")}
            alt="Icono Aire Acondicionado"
          />
          <p>Aire Acondicionado</p>
        </div>

        <div>
          <img src={getImgUrl("Rooms/WiFi.png")} alt="Icono All Inclusive" />
          <p>All Inclusive</p>
        </div>

        <div>
          <img src={getImgUrl("Rooms/WiFi.png")} alt="Icono Gimnasio" />
          <p>Gimnasio</p>
        </div>

        <div>
          <img src={getImgUrl("Rooms/WiFi.png")} alt="Icono Shows" />
          <p>Shows exclusivos</p>
        </div>
      </div>

      <h4>Mira las habitaciones</h4>
    </section>
  );
}
