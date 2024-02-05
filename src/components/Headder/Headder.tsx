import { getImgUrl } from "../../utils.js";
import "./Headder.module.css";
import styles from "./Headder.module.css";


export function Headder() {
  return (
    <header>
      <div>
        <div>
          <img
            className={styles.bgHeader}
            src={getImgUrl("headder/blur.jpeg")}
            alt="imagen del hotel borrosa"
          />
        </div>

        <div className={styles.header}>
          <div className={styles.logo}>
            <a href="/">
              <p className={styles.logoHotel}>Hotel</p>
              <p className={styles.logoParaiso}>Paraiso</p>
            </a>
          </div>

          <div className={styles.links}>
            <ul>
              <li>Quienes Somos</li>
              <li>Habitaciones</li>
              <li>Contacto</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Headder;
