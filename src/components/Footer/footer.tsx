import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.disclaimer}>
            <p>© 2024 Nombre del Hotel. Todos los derechos reservados.</p>
            <p>
              Las tarifas están sujetas a cambios sin previo aviso. Los precios
              pueden variar según la temporada y la disponibilidad. Por favor,
              consulta directamente con el hotel para obtener la información más
              actualizada.
            </p>
          </div>
          <div className={styles.contactInfo}>
            <p>Dirección: [Dirección del Hotel], Nasau, Bahamas</p>
            <p>Teléfono: [Número de Teléfono]</p>
            <p>Email: info@hotel.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
