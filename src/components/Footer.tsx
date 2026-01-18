'use client';

import Link from 'next/link';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useActiveSection } from '@/hooks/useActiveSection';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const activeSection = useActiveSection();

    const getLinkClass = (section: string) =>
        `${styles.link} ${activeSection === section ? styles.active : ''}`;

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Top Section */}
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <span className={styles.logo}>Parita Fataniya</span>
                        <p className={styles.tagline}>
                            Building scalable backend systems with Node.js.
                        </p>
                    </div>

                    <div className={styles.linksColumn}>
                        <h4 className={styles.columnTitle}>Quick Links</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="#about" className={getLinkClass('about')}>About</Link></li>
                            <li><Link href="#skills" className={getLinkClass('skills')}>Skills</Link></li>
                            <li><Link href="#projects" className={getLinkClass('projects')}>Projects</Link></li>
                            <li><Link href="#experience" className={getLinkClass('experience')}>Experience</Link></li>
                        </ul>
                    </div>

                    <div className={styles.linksColumn}>
                        <h4 className={styles.columnTitle}>Connect</h4>
                        <div className={styles.socials}>

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialIcon}
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="mailto:parita.fataniya@example.com"
                                className={styles.socialIcon}
                                aria-label="Email"
                            >
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        &copy; {currentYear} Parita Fataniya. All rights reserved.
                    </p>
                    <p className={styles.copyright}>
                        Designed & Built with Next.js
                    </p>
                </div>
            </div>
        </footer>
    );
}
