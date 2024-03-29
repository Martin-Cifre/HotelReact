import { getImgUrl } from "../../utils.js";
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
            
            <ul
              className={`${styles.menuItems} `}
              
            >
              <li>
                <a href="/#About">Quienes Somos</a>
              </li>
              <a href="/#Location">
                <li>Ubicacion</li>
              </a>
              <a href="/Habitaciones">
                <li>Habitaciones</li>
              </a>
              <a href="/#Contact">
                <li>Contacto</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Headder;
