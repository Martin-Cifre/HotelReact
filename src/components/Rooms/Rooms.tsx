//import React from 'react'
import styles from "./Rooms.module.css";
import { getImgUrl } from "../../utils.js";

export const Rooms = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Amenities</h2>
      <div className={styles.items}>
        <div className={styles.item}>
          <img src={getImgUrl("Rooms/WiFi.png")} alt="Icono WiFi" />
          <p>Wifi</p>
        </div>

        <div className={styles.item}>
          <img src={getImgUrl("Rooms/RoomS.png")} alt="Icono Room Service" />
          <p>Room Service</p>
        </div>

        <div className={styles.item}>
          <img
            src={getImgUrl("Rooms/Aire.png")}
            alt="Icono Aire Acondicionado"
          />
          <p>Aire Acondicionado</p>
        </div>

        <div className={styles.item}>
          <img src={getImgUrl("Rooms/AllInc.png")} alt="Icono All Inclusive" />
          <p>All Inclusive</p>
        </div>

        <div className={styles.item}>
          <img src={getImgUrl("Rooms/Gym.png")} alt="Icono Gimnasio" />
          <p>Gimnasio</p>
        </div>

        <div className={styles.item}>
          <img src={getImgUrl("Rooms/Show.png")} alt="Icono Shows" />
          <p>Shows exclusivos</p>
        </div>
      </div>
      <a className={styles.link}
        href="/habitaciones">
        <h4 className={styles.rooms}>Mira las habitaciones</h4>
      </a>
    </section>
  );
}
