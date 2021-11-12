import React from "react";
import Layout from "../Layout";
import TopSection from "../TopSection/TopSection";
import styles from "./Contact.module.css";
import mailIcon from "../../assets/icons/mail.png";

function Contact() {
  return (
    <Layout>
      <div className={styles.Contact}>
        <TopSection title="Contact us">
          Need to get in touch with us? You're in the right spot! We have a few
          different options to help you get the answers you're looking for.
          Whether you have a question, are looking to get invested or want to
          speak to someone about your options, we’re here to help you and it’s
          easy to get in touch with us!
        </TopSection>
        <div className={styles.ContactCall}>
          <h2>Get in touch with us!</h2>
          <p>
            We’d love to hear from you. Please get in touch with us in whatever
            way is most convenient for you. You can call us, email us, or
            schedule a call and one of our team members will reach out to you.
          </p>
        </div>

        <div className={styles.ContactInfo}>
          <img src={mailIcon} alt="" />
          <p>
            Email support at <br />{" "}
            <a href="mailto:Weinsteininvestment@gmail.com">
              Weinsteininvestment@gmail.com
            </a>
          </p>
          <div>
            <h2>Call or end us a message directly</h2>
            <p>Nest Wealth Asset Management Inc.</p>
            <p>+1-613-900-3735</p>
            <p>
              379 Adelaide St W 3rd Floor,
              <br />
              Toronto, ON M5V 1S5, Canada
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
