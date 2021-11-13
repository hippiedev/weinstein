import React from "react";
import styles from "./Contact.module.css";
import markerIcon from "../../assets/icons/marker.png";
import phoneIcon from "../../assets/icons/phone.png";

function Contact() {
  return (
    <div id={styles.Contact}>
      <h2>Have any questions?</h2>
      <p>Want to see a demo? Please let us know, we are here to help.</p>
      <div className={styles.ContactInfo}>
        <span>
          <img src={markerIcon} alt="" />
          <h3>Location</h3>
          <p>
            379 Adelaide St,
            <br /> Toronto, ON M5V 1S5, Canada
          </p>
        </span>
        <span>
          <img src={phoneIcon} alt="" />
          <h3>Call us</h3>
          <p>+1-613-900-3735</p>
        </span>
      </div>
    </div>
  );
}

export default Contact;
