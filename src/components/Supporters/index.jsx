import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import NumFOCUS from '@site/static/img/supporters/numfocus.svg';

export default function Supporters() {
    return (
        <div className={[styles.supporters, styles.section_padding].join(' ')}>
            <div className={styles.supporters_conda_forge}>
                <h1>Supporters</h1>
                <p>If you like conda-forge and want to support our mission, please consider making a <Link to="https://numfocus.salsalabs.org/donate-to-conda-forge/index.html">donation</Link> to support our efforts.</p>
            </div>
            <div className={styles.fiscal_sponsor}>
                <div className={styles.numfocus_card}>
                    <NumFOCUS className={styles.image} />
                </div>
                <div className={styles.about_numfocus}>
                    <h3>conda-forge is a <span className="gradient_text">fiscally sponsored</span> project of NumFOCUS.</h3>
                    <p>A nonprofit dedicated to supporting the open source scientific computing community.</p>
                </div>
            </div>
        </div>
    );
}
