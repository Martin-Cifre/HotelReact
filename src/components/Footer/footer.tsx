import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.disclaimer}>
            <p>© 2024 Hotel Paraiso. Todos los derechos reservados.</p>
            <p>
              Las tarifas están sujetas a cambios sin previo aviso. Los precios
              pueden variar según la temporada y la disponibilidad. Por favor,
              consulta directamente con el hotel para obtener la información más
              actualizada.
            </p>
          </div>
          <div className={styles.contactInfo}>
            <p>Dirección: <i>callefalsa 123</i>, Nasau, Bahamas</p>
            <p>Teléfono: <i>12-1234-5678</i></p>
            <p>Email: info@usuariohotel.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
