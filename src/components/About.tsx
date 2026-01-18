'use client';

import Section from './Section';
import styles from './About.module.css';

export default function About() {
    return (
        <Section id="about">
            <div className={styles.content}>
                <h2 className={styles.heading}>About Me</h2>

                <p className={styles.text}>
                    I'm a dedicated Backend Developer with over <span className={styles.highlight}>3 years of experience</span> architecting scalable web applications. My expertise lies in building robust APIs, optimizing database performance, and ensuring system security in the Node.js ecosystem.
                </p>

                <p className={styles.text}>
                    Currently working at <span className={styles.highlight}>Codentic Software</span>, I lead the backend development for various client projects, handling everything from database design to cloud deployment.
                </p>

                <p className={styles.text}>
                    I am passionate about writing clean, maintainable code and solving complex engineering challenges. Whether it's a real-time chat service or a high-frequency trading platform, I focus on performance and reliability.
                </p>
            </div>
        </Section>
    );
}
