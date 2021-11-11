import {useState} from 'react';
import Solution from './Solution/Solution';
import styles from './Solutions.module.css';

function Solutions() {
    const [solution, setSolution] = useState('institutions');

    return (
        <div className={styles.Solutions}>
            <div className={styles.SolutionSelection}>
                <li style={{borderBottom: solution === 'institutions' ? '4px solid rgb(52, 24, 230)' : null}} onClick={() => setSolution('institutions')}>For Financial Institutions</li>
                <li style={{borderBottom: solution === 'individuals' ? '4px solid #000' : null}} onClick={() => setSolution('individuals')}>For Individual investors</li>
                <li style={{borderBottom: solution === 'advisors' ? '4px solid #212F5F' : null}} onClick={() => setSolution('advisors')}>For Financial Advisors</li>
                <li style={{borderBottom: solution === 'employers' ? '4px solid rgb(80, 80, 80)' : null}} onClick={() => setSolution('employers')}>For employers</li>
            </div>
            <Solution solution={solution} />
        </div>
    )
}

export default Solutions
