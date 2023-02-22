import styles from "../styles/Item.module.css";

function Fleet() {
  return (
    <div>
      <div className={styles.item}>
        <div className={styles.item_container}>
          <div className={styles.logo_content}>
            <img
              src="https://www.jetbrains.com/_assets/www/fleet/inc/overview-content/img/fleet-logo.65f4a04c59fc3ba93bb5e181050891c5.png"
              alt="Fleet"
              className={styles.logo_image}
            ></img>
            <div className={styles.logo_label}>
              <h1>Fleet</h1>
            </div>
          </div>
          <div className={styles.item_info_container}>
            <div className={styles.item_info}>
              JetBrains Fleet es un nuevo editor de programación multilingüe y
              un entorno de desarrollo integrado que refleja el intento de
              JetBrains de reinventar el entorno de desarrollo integrado. Fleet
              es distinto del trabajo en curso de JetBrains para rediseñar las
              interfaces de usuario y las experiencias de usuario de sus IDE
              existentes, como IntelliJ IDEA, sin alterar las capacidades e
              integraciones centradas en el código de los IDE.", "Fleet utiliza
              el motor de procesamiento de código IntelliJ para Java. En lugar
              de usar el motor de IntelliJ, Fleet usa un servidor de varios
              idiomas, similar a Visual Studio Code.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fleet;
