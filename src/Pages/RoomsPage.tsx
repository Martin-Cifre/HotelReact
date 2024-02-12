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
            src={getImgUrl("RoomSite/Clasic.jpg")}
            alt="imagen Clasic"
          />
          <div className={styles.detail}>
            <h3>Clasic</h3>
            <p className={styles.parrafo}>
              Experimenta la elegancia atemporal y el confort refinado en
              nuestras habitaciones clásicas. Un oasis de tranquilidad diseñado
              para tu disfrute, con vistas a las cristalinas aguas de Nasau.
            </p>
            <p className={styles.precio}> USD 120-</p>
            <div className={styles.buttonLocation}>
              <button className={styles.button}>Reservar</button>
            </div>
          </div>
        </div>

        <div className={styles.roomContainer}>
          <img
            className={styles.roomImg}
            src={getImgUrl("RoomSite/Family.jpg")}
            alt="imagen Family"
          />
          <div className={styles.detail}>
            <h3>Family</h3>
            <p className={styles.parrafo}>
              Espaciosa y acogedora, nuestra habitación familiar es el refugio
              perfecto para explorar las maravillas de Nasau. Disfruta de
              momentos inolvidables juntos, a pasos de la playa.
            </p>
            <p className={styles.precio}> USD 180-</p>
            <div className={styles.buttonLocation}>
              <button className={styles.button}>Reservar</button>
            </div>
          </div>
        </div>

        <div className={styles.roomContainer}>
          <img
            className={styles.roomImg}
            src={getImgUrl("RoomSite/SuiteEmpresaial.jpg")}
            alt="imagen Suite Empresarial"
          />
          <div className={styles.detail}>
            <h3>Suite Empresarial</h3>
            <p className={styles.parrafo}>
              Un santuario de lujo y funcionalidad en el corazón de Nasau para
              viajeros de negocios exigentes. Equipada con todas las comodidades
              necesarias para trabajar en estilo y confort.
            </p>
            <p className={styles.precio}> USD 220-</p>
            <div className={styles.buttonLocation}>
              <button className={styles.button}>Reservar</button>
            </div>
          </div>
        </div>

        <div className={styles.roomContainer}>
          <img
            className={styles.roomImg}
            src={getImgUrl("RoomSite/SuiteClub.jpg")}
            alt="imagen Suite Club"
          />
          <div className={styles.detail}>
            <h3>Suite Club</h3>
            <p className={styles.parrafo}>
              Sumérgete en un mundo de lujo en nuestra suite club, diseñada para
              una experiencia inolvidable en Nasau. Amplios espacios, servicios
              VIP y vistas impresionantes te harán sentir como la realeza en
              este paraíso caribeño
            </p>
            <p className={styles.precio}> USD 300-</p>
            <div className={styles.buttonLocation}>
              <button className={styles.button}>Reservar</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
