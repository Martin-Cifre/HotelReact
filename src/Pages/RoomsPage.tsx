//import React from 'react'
import Headder from "../components/Headder/Headder"
import styles from "./Rooms.module.css";

export const RoomsPage = () => {
  return (
    <main>
      <Headder />

      <section className={styles.container}>
        <h2 className={styles.title}>Nuestras Habitaciones</h2>
        <div className={styles.division}></div>
      </section>
    </main>
  );
}
