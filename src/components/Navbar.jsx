import React from "react";
import styles from "../styles/navbar.module.css"


export default function Navbar(){
    return(<div>
        <nav className={styles.N}>
            <div className={styles.home}>
                <img src="/icon.png" alt="Mi padre" />
                <div className={styles.tit}>
                    <h1>BoliMarce</h1>
                </div>
            </div>
            <div className={styles.items}>
                <div>
                    <ul className={styles.ul}>
                        <li><a>React.js</a></li>
                        <li><a>TailwindCSS</a></li>
                        <li>Bootstrap 5</li>
                        <li>Fleet</li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>);
}