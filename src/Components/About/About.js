import React from "react";
import Layout from "../Layout";
import Solutions from "../Solutions/Solutions";
import TopSection from "../TopSection/TopSection";
import styles from "./About.module.css";

function About() {
  return (
    <Layout>
      <div className={styles.About}>
        <TopSection title="About us">
          Weinstein Investment Bank makes it easy for you to obtain
          sophisticated wealth management focused on your long-term goals
          without high fees, large minimums or lack of transparency.
        </TopSection>
        <div className={styles.Content}>
        <h2>Who We Are</h2>
        <p>
          Weinstein investment created one of Canada’s first Software as a
          Service (SaaS) based digital wealth management platform with the goal
          of increasing investor access to sophisticated wealth management
          advice.
          <br />
          <br />
          Weinstein investment digital wealth solutions also empower wealth management
          firms and individual advisors to provide and manage virtually any
          investment for any investor through any distribution channel. Today,
          Weinstein investment digital solutions are used by well-established financial
          institutions across North America, including the National Bank of
          Canada, to deliver superior investment experiences to clients.
          <br />
          <br />
          Weinstein investment also offers an automated, low-fee and transparent
          direct-to-investor wealth management solution that makes it easier for
          thousands of Canadians to reach their financial goals.
        </p>
        </div>
        <Solutions />
      </div>
    </Layout>
  );
}

export default About;
