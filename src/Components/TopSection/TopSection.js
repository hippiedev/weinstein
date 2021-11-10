import React from 'react';
import styles from './TopSection.module.css';

function TopSection(props) {
    return (
        <div className={styles.TopSection}>
            <h1>{props.title}</h1>
            <p style={{paddingBottom: props.top ? '150px': 0}}>{props.children}</p>
        </div>
    )
}

export default TopSection
