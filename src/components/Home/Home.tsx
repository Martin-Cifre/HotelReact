//import { getImgUrl } from "../../utils.js";
import "./Home.module.css";
import ReservationForm from "./ReservationForm";
import styles from "./Home.module.css";

export function Home() {
  return (
    <main className={styles.home}>
      <p className={styles.text}>
        Vive <i>experiencias</i><br/>inolvidables
    </p>
      <div className={styles.form}>
        <ReservationForm />
      </div>
    </main>
  );
}

export default Home;
