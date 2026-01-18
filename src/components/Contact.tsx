'use client';

import Section from './Section';
import styles from './Contact.module.css';

export default function Contact() {
    return (
        <Section id="contact" className={styles.contactSection}>
            <h2 className={styles.heading}>Get In Touch</h2>
            <p className={styles.text}>
                Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>

            <div className={styles.links}>
                <a href="mailto:parita.fataniya@example.com" className={styles.link}>
                    parita.fataniya@example.com
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    LinkedIn
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    GitHub
                </a>
            </div>
        </Section>
    );
}
