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
              Una acogedora guarida de comodidad, perfecta para escapadas
              rápidas y momentos íntimos en el paraíso tropical de Nasau.
              Equipada con todo lo esencial para una estancia confortable y
              placentera.
            </p>
            <p className={styles.precio}> USD 80-</p>
            <div className={styles.buttonLocation}>
              <button className={styles.button}>Reservar</button>
            </div>
          </div>
        </div>

        <div className={styles.roomContainer}>
          <img
            className={styles.roomImg}
            src={getImgUrl("RoomSite/miniClasic.jpg")}
            alt="imagen Mini Clasic"
          />
          <div className={styles.detail}>
            <h3>Mini Clasic</h3>
            <p className={styles.parrafo}>
              Una acogedora guarida de comodidad, perfecta para escapadas
              rápidas y momentos íntimos en el paraíso tropical de Nasau.
              Equipada con todo lo esencial para una estancia confortable y
              placentera.
            </p>
            <p className={styles.precio}> USD 80-</p>
            <div className={styles.buttonLocation}>
              <button className={styles.button}>Reservar</button>
            </div>
          </div>
        </div>

        <div className={styles.roomContainer}>
          <img
            className={styles.roomImg}
            src={getImgUrl("RoomSite/miniClasic.jpg")}
            alt="imagen Mini Clasic"
          />
          <div className={styles.detail}>
            <h3>Mini Clasic</h3>
            <p className={styles.parrafo}>
              Una acogedora guarida de comodidad, perfecta para escapadas
              rápidas y momentos íntimos en el paraíso tropical de Nasau.
              Equipada con todo lo esencial para una estancia confortable y
              placentera.
            </p>
            <p className={styles.precio}> USD 80-</p>
            <div className={styles.buttonLocation}>
              <button className={styles.button}>Reservar</button>
            </div>
          </div>
        </div>

        <div className={styles.roomContainer}>
          <img
            className={styles.roomImg}
            src={getImgUrl("RoomSite/miniClasic.jpg")}
            alt="imagen Mini Clasic"
          />
          <div className={styles.detail}>
            <h3>Mini Clasic</h3>
            <p className={styles.parrafo}>
              Una acogedora guarida de comodidad, perfecta para escapadas
              rápidas y momentos íntimos en el paraíso tropical de Nasau.
              Equipada con todo lo esencial para una estancia confortable y
              placentera.
            </p>
            <p className={styles.precio}> USD 80-</p>
            <div className={styles.buttonLocation}>
              <button className={styles.button}>Reservar</button>
            </div>
          </div>
        </div>

        <div className={styles.roomContainer}>
          <img
            className={styles.roomImg}
            src={getImgUrl("RoomSite/miniClasic.jpg")}
            alt="imagen Mini Clasic"
          />
          <div className={styles.detail}>
            <h3>Mini Clasic</h3>
            <p className={styles.parrafo}>
              Una acogedora guarida de comodidad, perfecta para escapadas
              rápidas y momentos íntimos en el paraíso tropical de Nasau.
              Equipada con todo lo esencial para una estancia confortable y
              placentera.
            </p>
            <p className={styles.precio}> USD 80-</p>
            <div className={styles.buttonLocation}>
              <button className={styles.button}>Reservar</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
