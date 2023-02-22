import styles from "../styles/Item.module.css";

function TCSS() {
  return(
    <div>
      <div className={styles.item}>
        <div className={styles.item_container}>
          <div className={styles.logo_content}>
            <img
              src="https://th.bing.com/th/id/OIP.KTAstxDm8yEG17u94avrXwHaHa?pid=ImgDet&rs=1"
              alt="TailWindCSS"
              className={styles.logo_image}
            ></img>
            <div className={styles.logo_label}>
              <h1>TailWind CSS</h1>
            </div>
          </div>
          <div className={styles.item_info_container}>
            <div className={styles.item_info}>
            Tailwind CSS es un framework de CSS de código abierto para el diseño de páginas web. La principal característica de esta biblioteca es que, a diferencia de otras como Bootstrap, no genera una serie de clases predefinidas para elementos como botones o tablas. En su lugar, crea una lista de clases CSS 'de utilidad' que se pueden usar para dar estilos individuales a cada elemento.",
        "Debido a la diferencia de conceptos básicos en relación con otros sistemas de diseño tradicionales como Bootstrap, es importante conocer la filosofía a partir de la que se creó Tailwind, así como su funcionamiento básico.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TCSS;
