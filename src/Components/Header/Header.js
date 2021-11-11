import {useState} from "react";
import styles from "./Header.module.css";
import logo from "../../assets/images/w-logo.webp";
import expandIcon from "../../assets/icons/expand.png";

function Header() {
    const [display, setDisplay] = useState(false);

    const handleDisplay = () => {
        setDisplay(!display)
    }
  return (
    <div className={styles.Header}>
      <span className={styles.Logo}>
        <img src={logo} alt="" />
        <h2>Weinstein Investments</h2>
      </span>
      <ul className={styles.Menu}>
        <li onMouseOver={handleDisplay} onMouseLeave={handleDisplay}>
          Solutions <img src={expandIcon} alt="" />
        </li>
        <div onMouseOver={() => setDisplay(true)} onMouseLeave={handleDisplay} style={{opacity: display ? 1 : 0, zIndex: display ? 20 : -1}} className={styles.Overlay}>
            <li>For Financial Institutions</li>
            <li>For Individual Investors</li>
            <li>For FInacial Advisors</li>
            <li>For Employers</li>
        </div>

        <li onMouseOver={handleDisplay} onMouseLeave={handleDisplay}>
          Company <img src={expandIcon} alt="" />
        </li>
        <div onMouseOver={() => setDisplay(true)} onMouseLeave={handleDisplay} style={{opacity: display ? 1 : 0, zIndex: display ? 20 : -1}} className={styles.Overlay}>
            <li>About us</li>
            <li>Contact</li>
        </div>
        <button>Request a Demo</button>
      </ul>
    </div>
  );
}

export default Header;
