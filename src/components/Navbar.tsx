'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <header className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Parita Fataniya
                </Link>

                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li><Link href="#about" className={styles.navLink}>About</Link></li>
                        <li><Link href="#skills" className={styles.navLink}>Skills</Link></li>
                        <li><Link href="#projects" className={styles.navLink}>Projects</Link></li>
                        <li><Link href="#contact" className={styles.navLink}>Contact</Link></li>
                    </ul>

                    <a
                        href="/resume-parita-fataniya.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.resumeBtn}
                        download
                    >
                        Resume
                    </a>
                </nav>
            </div>
        </header>
    );
}
