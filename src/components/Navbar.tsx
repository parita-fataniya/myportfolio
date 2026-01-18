'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    Parita Fataniya
                </Link>

                {/* Desktop Nav */}
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li><Link href="#about" className={styles.navLink}>About</Link></li>
                        <li><Link href="#skills" className={styles.navLink}>Skills</Link></li>
                        <li><Link href="#projects" className={styles.navLink}>Projects</Link></li>
                        <li><Link href="#experience" className={styles.navLink}>Experience</Link></li>
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

                {/* Mobile Burger Icon */}
                <button
                    className={styles.mobileMenuBtn}
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Mobile Nav Overlay */}
                <div className={`${styles.mobileNav} ${isOpen ? styles.open : ''}`}>
                    <ul className={styles.mobileNavList}>
                        <li><Link href="#about" className={styles.mobileNavLink} onClick={closeMenu}>About</Link></li>
                        <li><Link href="#skills" className={styles.mobileNavLink} onClick={closeMenu}>Skills</Link></li>
                        <li><Link href="#projects" className={styles.mobileNavLink} onClick={closeMenu}>Projects</Link></li>
                        <li><Link href="#experience" className={styles.mobileNavLink} onClick={closeMenu}>Experience</Link></li>
                        <li><Link href="#contact" className={styles.mobileNavLink} onClick={closeMenu}>Contact</Link></li>
                        <li>
                            <a
                                href="/resume-parita-fataniya.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.resumeBtn} // Reusing the button style
                                onClick={closeMenu}
                                download
                            >
                                Download Resume
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </header>
    );
}
