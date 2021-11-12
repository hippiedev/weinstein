import { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/images/w-logo.webp";
import expandIcon from "../../assets/icons/expand.png";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu/MobileMenu";
import hamburgerIcon from '../../assets/icons/hamburger.svg';

function Header() {
  const [display, setDisplay] = useState(false);
  const [secondDisplay, setSecondDisplay] = useState(false);
  const [menu, setMenuDisplay] = useState(false);
  const handleMenu = () => {
      setMenuDisplay(!menu)
  }

  const handleDisplay = () => {
    setDisplay(!display);
  };
  return (
    <>
      <div className={styles.Header}>
        <span className={styles.Logo}>
          <img src={logo} alt="" />
          <h2>Weinstein Investment</h2>
        </span>
        <ul className={styles.Menu}>
          <li
            id={styles.NavItem}
            onMouseOver={handleDisplay}
            onMouseLeave={handleDisplay}
          >
            Solutions <img src={expandIcon} alt="" />
          </li>
          <div
            onMouseOver={() => setDisplay(true)}
            onMouseLeave={() => setDisplay(false)}
            style={{ opacity: display ? 1 : 0, zIndex: display ? 20 : -1 }}
            className={styles.Overlay}
          >
            <li>For Financial Institutions</li>
            <li>For Individual Investors</li>
            <li>For FInacial Advisors</li>
            <li>For Employers</li>
          </div>

          <li
            id={styles.NavItem}
            onMouseOver={() => setSecondDisplay(!secondDisplay)}
            onMouseLeave={() => setSecondDisplay(!secondDisplay)}
          >
            Company <img src={expandIcon} alt="" />
          </li>
          <div
            onMouseOver={() => setSecondDisplay(true)}
            onMouseLeave={() => setSecondDisplay(false)}
            style={{
              opacity: secondDisplay ? 1 : 0,
              zIndex: secondDisplay ? 20 : -1,
            }}
            className={styles.Overlay}
          >
            <li>
              <Link to="/about-us"> About us</Link>
            </li>
            <li>
              <Link to="/contact"> Contact</Link>
            </li>
          </div>
          <button>
            <a href="/contact">Request a Demo</a>
          </button>
        </ul>
        <img onClick={handleMenu} id={styles.burger} src={hamburgerIcon} alt="" />
      </div>
      <MobileMenu show={menu} />
    </>
  );
}

export default Header;
