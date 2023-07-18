import React from 'react';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

export default function Header() {
    return (
        <div className={[styles.header, styles.section_padding].join(' ')}>
            <div className={styles.header_image}>
                <ThemedImage
                    alt="Anvil"
                    sources={{
                        light: useBaseUrl('/img/anvil-light.svg'),
                        dark: useBaseUrl('/img/anvil-dark.svg'),
                    }}
                />
            </div>
            <div className={styles.header_content}>
                <h1>Community-led <span className="gradient_text">recipes</span>, <span className="gradient_text">infrastructure</span> and <span className="gradient_text">distributions</span> for Conda.</h1>
                <div className={styles.header_content_input}>
                    <Link to="/docs/getting-started" className='button button--secondary button--lg'>Explore conda-forge</Link>
                </div>
            </div>
        </div>
    );
}
