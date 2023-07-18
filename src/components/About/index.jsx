import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const stats1 = [
    {
        number: '236M',
        content: 'Monthly Downloads',
    },
    {
        number: '11.3B',
        content: 'Overall Downloads',
    },
    {
        number: '19.6K',
        content: 'Feedstocks',
    },
    {
        number: '21.9K',
        content: 'Packages',
    },
];
const stats2 = [
    {
        number: '33',
        content: 'Core Developers',
    },
    {
        number: '1.4M',
        content: 'Artifacts',
    },
    {
        number: '5.0K',
        content: 'Feedstock Maintainers',
    },
    {
        number: '329.7K',
        content: 'Issues + PRs',
    },
];

export default function About() {
    return (
        <div className={[styles.about, styles.section_padding].join(' ')}>
            <div className={styles.about_description}>
                <h1>About conda-forge</h1>
                <p><Link to="https://github.com/conda-forge">conda-forge</Link> is a GitHub organization containing repositories of conda recipes.</p>
            </div>
            <div className={styles.stats_container}>
                <div className={styles.stats1_card}>
                    {stats1.map(({ number, content }, index) => (
                        <div className={styles.card} key={index}>
                            <h1 className="gradient_text">{number}</h1>
                            <h3>{content}</h3>
                        </div >
                    ))
                    }
                </div>
                <div className={styles.stats2_card}>
                    {stats2.map(({ number, content }, index) => (
                        <div className={styles.card} key={index}>
                            <h1 className="gradient_text">{number}</h1>
                            <h3>{content}</h3>
                        </div >
                    ))
                    }
                </div>
            </div>
        </div>
    );
}
