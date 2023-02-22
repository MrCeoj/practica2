import styles from "../styles/Item.module.css";

function BS() {
  return (
    <div>
      <div className={styles.item}>
        <div className={styles.item_container}>
          <div className={styles.logo_content}>
            <img
              src="https://disenowebakus.net/imagenes/bootstrap-tecnologia-en-proyectos-web.jpg"
              alt="Fleet"
              className={styles.logo_image}
            ></img>
            <div className={styles.logo_label}>
              <h1>Bootstrap 5</h1>
            </div>
          </div>
          <div className={styles.item_info_container}>
            <div className={styles.item_info}>
              Bootstrap es una biblioteca multiplataforma o conjunto de
              herramientas de código abierto para diseño de sitios y
              aplicaciones web. Contiene plantillas de diseño con tipografía,
              formularios, botones, cuadros, menús de navegación y otros
              elementos de diseño basado en HTML y CSS, así como extensiones de
              JavaScript adicionales.", "A diferencia de muchos frameworks web,
              solo se ocupa del desarrollo front-end. Bootstrap es el segundo
              proyecto más destacado en GitHub y es usado por la NASA y la
              MSNBC, entre otras organizaciones.", "Tiene un soporte
              relativamente incompleto para HTML5 y CSS3, pero es compatible con
              la mayoría de los navegadores web. La información básica de
              compatibilidad de sitios web o aplicaciones está disponible para
              todos los dispositivos y navegadores.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BS;
