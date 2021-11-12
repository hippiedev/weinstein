import React from "react";
import styles from "./MobileMenu.module.css";
import { Link } from "react-router-dom";

function MobileMenu(props) {
  return (
    <div style={{height: props.show ? '510px' : '0', zIndex: props.show ? 30 : -1}} className={styles.MobileMenu}>
      <ul>
        <li>
          <a href="/#">Solution</a>
        </li>
        <li>For Financial Institutions</li>
        <li>For Individual Investors</li>
        <li>For FInacial Advisors</li>
        <li>For Employers</li>
      </ul>
      <ul>
        <li>
          <a href="/#">Company</a>
        </li>
        <li>
          <Link to="/about-us"> About us</Link>
        </li>
        <li>
          <Link to="/contact"> Contact</Link>
        </li>
      </ul>
      <button>
        <a href="/contact">Request a Demo</a>
      </button>
    </div>
  );
}

export default MobileMenu;
