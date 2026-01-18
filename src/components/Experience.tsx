'use client';

import Section from './Section';
import styles from './Experience.module.css';

export default function Experience() {
    return (
        <Section id="experience">
            <h2 className={styles.heading}>Professional Experience</h2>

            <div className={styles.item}>
                <h3 className={styles.role}>Node.js Backend Developer</h3>
                <span className={styles.company}>Codentic Software</span>
                <span className={styles.duration}>Jul 2022 – Present</span>

                <ul className={styles.list}>
                    <li className={styles.listItem}>Leading backend architecture for scalable client applications.</li>
                    <li className={styles.listItem}>Optimizing SQL/NoSQL database schemas for high-performance queries.</li>
                    <li className={styles.listItem}>Implementing industry-standard security protocols (OAuth, JWT).</li>
                    <li className={styles.listItem}>Managing CI/CD pipelines and cloud infrastructure on AWS.</li>
                    <li className={styles.listItem}>Collaborating with frontend teams for seamless API integration.</li>
                </ul>
            </div>
        </Section>
    );
}
