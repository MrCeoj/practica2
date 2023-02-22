import styles from "../styles/Item.module.css";

function RJS() {
  return (
    <div>
      <div className={styles.item}>
        <div className={styles.item_container}>
          <div className={styles.logo_content}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="Reactjs"
              className={styles.logo_image}
            ></img>
            <div className={styles.logo_label}>
              <h1>React.js</h1>
            </div>
          </div>
          <div className={styles.item_info_container}>
            <div className={styles.item_info}>
              React (también llamada React.js o ReactJS) es una biblioteca
              Javascript de código abierto diseñada para crear interfaces de
              usuario con el objetivo de facilitar el desarrollo de aplicaciones
              en una sola página.", "Es mantenido por Facebook y la comunidad de
              software libre. En el proyecto hay más de mil desarrolladores
              libres. React intenta ayudar a los desarrolladores a construir
              aplicaciones que usan datos que cambian todo el tiempo.", "Su
              objetivo es ser sencillo, declarativo y fácil de combinar. React
              sólo maneja la interfaz de usuario en una aplicación; React es la
              Vista en un contexto en el que se use el patrón MVC
              (Modelo-Vista-Controlador) o MVVM (Modelo-vista-modelo de vista).
              También puede ser utilizado con las extensiones de React-based que
              se encargan de las partes no-UI (que no forman parte de la
              interfaz de usuario) de una aplicación web.", "Según el servicio
              de análisis JavaScript (en inglés 'JavaScript analytics service'),
              Libscore, React actualmente está siendo utilizado en las páginas
              principales de Imgur, Bleacher Informe, Feedly, Airbnb, SeatGeek,
              HelloSign, entre otras.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RJS;
