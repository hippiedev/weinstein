import React from 'react';
import Layout from '../Layout';
import Solutions from '../Solutions/Solutions';
import TopSection from '../TopSection/TopSection';
import styles from './Home.module.css';

function Home() {
    return (
        <Layout>
        <div className={styles.Home}>
            <TopSection top title="Digital Wealth Solutions for Everyone">
            Using innovative technology chosen by some of Canada’s largest institutions, Nest Wealth’s digital wealth solutions empower investors to receive access to sophisticated and personalized wealth advice tailored to their unique goals and objectives.
            </TopSection>
            <Solutions />
        </div>
        </Layout>
    )
}

export default Home
