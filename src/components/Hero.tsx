'use client';

import Section from './Section';
import styles from './Hero.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <Section id="hero" className={styles.hero}>
            <motion.p
                className={styles.intro}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Hi, I'm Parita Fataniya
            </motion.p>

            <motion.h1
                className={styles.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                Building secure, scalable, and high-performance backend systems.
            </motion.h1>

            <motion.h2
                className={styles.headline}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Node.js Backend Developer with 3+ years of experience designing APIs, databases, and cloud-ready solutions.
            </motion.h2>

            <motion.div
                className={styles.ctaGroup}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <a
                    href="/resume-parita-fataniya.pdf"
                    download
                    className={styles.primaryBtn}
                >
                    Download Resume
                </a>
                <Link href="#contact" className={styles.secondaryBtn}>
                    Contact Me
                </Link>
            </motion.div>
        </Section>
    );
}
