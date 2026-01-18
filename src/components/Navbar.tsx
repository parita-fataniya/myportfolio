'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useActiveSection } from '@/hooks/useActiveSection';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const activeSection = useActiveSection();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    // Helper to get class name
    const getLinkClass = (section: string) =>
        `${styles.navLink} ${activeSection === section ? styles.active : ''}`;

    const getMobileLinkClass = (section: string) =>
        `${styles.mobileNavLink} ${activeSection === section ? styles.active : ''}`;

    return (
        <header className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    Parita Fataniya
                </Link>

                {/* Desktop Nav */}
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li><Link href="#about" className={getLinkClass('about')}>About</Link></li>
                        <li><Link href="#skills" className={getLinkClass('skills')}>Skills</Link></li>
                        <li><Link href="#projects" className={getLinkClass('projects')}>Projects</Link></li>
                        <li><Link href="#experience" className={getLinkClass('experience')}>Experience</Link></li>
                        <li><Link href="#contact" className={getLinkClass('contact')}>Contact</Link></li>
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
                        <li><Link href="#about" className={getMobileLinkClass('about')} onClick={closeMenu}>About</Link></li>
                        <li><Link href="#skills" className={getMobileLinkClass('skills')} onClick={closeMenu}>Skills</Link></li>
                        <li><Link href="#projects" className={getMobileLinkClass('projects')} onClick={closeMenu}>Projects</Link></li>
                        <li><Link href="#experience" className={getMobileLinkClass('experience')} onClick={closeMenu}>Experience</Link></li>
                        <li><Link href="#contact" className={getMobileLinkClass('contact')} onClick={closeMenu}>Contact</Link></li>
                        <li>
                            <a
                                href="/resume-parita-fataniya.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.resumeBtn}
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
