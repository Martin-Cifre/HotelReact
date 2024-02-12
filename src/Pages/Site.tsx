//import styles from "./Site.module.css";
import Headder from "../components/Headder/Headder";
import Home from "../components/Home/Home";
import { About } from "../components/About/About";
import { Location } from "../components/Location/Location";
import { Rooms } from "../components/Rooms/Rooms";
import { Contact } from "../components/Contact/Contact"; 
import { Footer } from "../components/Footer/footer";

export const Site = () => {
  return (
    <main>
      <Headder />
      <Home />
      <About />
      <Location />
      <Rooms />
      <Contact />
      <Footer />
    </main>
  );
}
