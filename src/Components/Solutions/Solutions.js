import React from 'react';
import Solution from './Solution/Solution';
import styles from './Solutions.module.css';

function Solutions() {
    return (
        <div className={styles.Solutions}>
            <div className={styles.SolutionSelection}>
                <li>For Financial Institutions</li>
                <li>For Individual investors</li>
                <li>For Financial Advisors</li>
                <li>For employers</li>
            </div>
            <Solution solution="institutions" />
        </div>
    )
}

export default Solutions
