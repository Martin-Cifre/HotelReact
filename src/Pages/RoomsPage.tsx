//import React from 'react'
import Headder from "../components/Headder/Headder"
import styles from "./Rooms.module.css";
import { getImgUrl } from "../utils";

export const RoomsPage = () => {
  return (
    <main>
      <Headder />

      <section className={styles.container}>
        <h2 className={styles.title}>Nuestras Habitaciones</h2>
        <div className={styles.division}></div>

        <div className={styles.roomContainer}>
          <img
            className={styles.roomImg}
            src={getImgUrl("RoomSite/miniClasic.jpg")}
            alt="imagen Mini Clasic"
          />
          <div className={styles.detail}>
            <h3>Mini Clasic</h3>
            <p className={styles.parrafo}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestiae recusandae facilis eum distinctio, natus consequatur nisi aliquam alias, modi atque voluptatem adipisci est. Numquam eveniet molestias ipsa veritatis reiciendis?
            </p>
            <p className={styles.precio}> USD 70-</p>
            <button className={styles.button}>Reservar</button>
          </div>
        </div>

      </section>
    </main>
  );
}
