import {useState} from 'react';
import Solution from './Solution/Solution';
import styles from './Solutions.module.css';

function Solutions() {
    const [solution, setSolution] = useState('institutions');

    return (
        <div className={styles.Solutions}>
            <div className={styles.SolutionSelection}>
                <li style={{borderBottom: solution === 'institutions' ? '3px solid rgb(52, 24, 230)' : null}} onClick={() => setSolution('institutions')}>For Financial Institutions</li>
                <li style={{borderBottom: solution === 'individuals' ? '3px solid #000' : null}} onClick={() => setSolution('individuals')}>For Individual investors</li>
                <li onClick={() => setSolution('institutions')}>For Financial Advisors</li>
                <li onClick={() => setSolution('institutions')}>For employers</li>
            </div>
            <Solution solution={solution} />
        </div>
    )
}

export default Solutions
