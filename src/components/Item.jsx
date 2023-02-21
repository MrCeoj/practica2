import styles from "../styles/Item.module.css";

function Item() {
  return (
    <div className={styles.item}>
      <div className={styles.item_container}>
        <div className={styles.logo_content}>
          <img src="https://www.jetbrains.com/_assets/www/fleet/inc/overview-content/img/fleet-logo.65f4a04c59fc3ba93bb5e181050891c5.png" alt="" className={styles.logo_image}>
          </img>
          <div className={styles.logo_label}>
            <h1>Fleet</h1>
          </div>
        </div>
        <div className={styles.item_info_container}>
          <div className={styles.item_info}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, eos itaque animi vel debitis blanditiis ea corporis quas perferendis quos distinctio alias architecto sunt ullam corrupti quibusdam deserunt laudantium aspernatur quia nobis cum iste? Nostrum deleniti quidem adipisci nulla vitae repellat vero, mollitia laboriosam voluptas distinctio perferendis cupiditate dolorem quo?
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
