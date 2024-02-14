import { useState } from "react";
import { getImgUrl } from "../../utils.js";
import styles from "./Headder.module.css";

export function Headder() {
  const [menuOpen, setMenuOpen] = useState(false);
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
            <img
              className={styles.menuBtn}
              src={
                menuOpen
                  ? getImgUrl("headder/close.png")
                  : getImgUrl("headder/desplegable.png")
              }
              alt="boton menu"
              onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul
              className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
              onClick={() => setMenuOpen(false)}
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
