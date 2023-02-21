import React from "react";
import styles from "../styles/Navbar.module.css";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.home}>
          <img src="/icon.png" alt="Mi padre" />
          <div className={styles.title}>
            <Link to="/" className={styles.link}>
              <h1>Development Tools for Front-end</h1>
            </Link>
          </div>
        </div>
        <div className={styles.items}>
            <ul className={styles.ul}>
              <li>
                <Link to="/rjs" className={styles.link_items}>React.js</Link>
              </li>
              <li>
                <Link to="/tcss" className={styles.link_items}>TailwindCSS</Link>
              </li>
              <li>
                <Link to="/bs" className={styles.link_items}>Bootstrap 5</Link>
              </li>
              <li>
                <Link to="/fleet" className={styles.link_items}>Fleet</Link>
              </li>
            </ul>
        </div>
      </nav>
    </div>
  );
}
