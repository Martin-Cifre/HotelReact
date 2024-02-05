import React, { useState } from "react";
import styles from "./ReservationForm.module.css";

const ReservationForm: React.FC = () => {
  const [fechaIngreso, setFechaIngreso] = useState<string>("");
  const [fechaSalida, setFechaSalida] = useState<string>("");
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <section className={styles.formulario}>
      <form onSubmit={handleSubmit}>
        <div className={styles.items}>
          <label htmlFor="fechaIngreso">Entrada:</label>
          <input
            type="date"
            id="fechaIngreso"
            name="fechaIngreso"
            value={fechaIngreso}
            onChange={(e) => setFechaIngreso(e.target.value)}
            required
          />
        </div>

        <div className={styles.items}>
          <label htmlFor="fechaSalida">Salida:</label>
          <input
            type="date"
            id="fechaSalida"
            name="fechaSalida"
            value={fechaSalida}
            onChange={(e) => setFechaSalida(e.target.value)}
            required
          />
        </div>

        <button className={styles.button} type="submit">
          Reservar
        </button>
      </form>

      {modalVisible && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <p>Habitación reservada</p>
            <button className={styles.button} onClick={closeModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ReservationForm;
