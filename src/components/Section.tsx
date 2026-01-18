'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    id?: string;
    className?: string;
    delay?: number;
}

export default function Section({ children, id, className = '', delay = 0 }: SectionProps) {
    return (
        <section id={id} className={`section ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </section>
    );
}
