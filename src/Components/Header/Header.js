import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/images/w-logo.webp";
import expandIcon from '../../assets/icons/expand.png';

function Header() {
  return (
    <div className={styles.Header}>
      <span className={styles.Logo}>
        <img src={logo} alt="" />
        <h2>Weinstein Investments</h2>
      </span>
      <ul className={styles.Menu}>
          <li>Solutions <img src={expandIcon} alt="" /></li>
          <li>Contact</li>
          <button>Request a Demo</button>
      </ul>
    </div>
  );
}

export default Header;
