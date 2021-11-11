import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        <div className={styles.Footer}>
            <div className={styles.Content}>
                <ul id={styles.Solutions}>
                    <h3>Solution</h3>
                    <li>For Financial Institutions</li>
                    <li>For Individual Investors</li>
                    <li>For Financial Advisors</li>
                    <li>For Employers</li>
                </ul>
                <ul id={styles.Company}>
                    <h3>Company</h3>
                    <li>About us</li>
                    <li>Contact</li>
                </ul>
                <ul id={styles.Legal}>
                    <h3>Legal</h3>
                    <li>Privacy Policy</li>
                    <li>Security</li>
                    <li>Complaints</li>
                    <li>Terms & Conditions</li>
                    <li>Investment management Agreement</li>
                </ul>
            </div>
            <p>&copy; Weinstein Investment Bank</p>
        </div>
    )
}

export default Footer
