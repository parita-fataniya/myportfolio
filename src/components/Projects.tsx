'use client';

import Section from './Section';
import styles from './Projects.module.css';

const projects = [
    {
        title: "Cab Service Application",
        description: "Real-time booking and tracking system with complex fare calculation algorithms and driver matching logic.",
        tech: ["Node.js", "Socket.io", "Redis", "MongoDB"]
    },
    {
        title: "School Management System",
        description: "Comprehensive multi-tenant platform for managing academic operations, attendance, and fee collection across multiple schools.",
        tech: ["Express.js", "PostgreSQL", "Sequelize", "React.js"]
    },
    {
        title: "Mental Health Platform",
        description: "HIPAA-compliant platform featuring secure video consultations via WebRTC and automated appointment scheduling.",
        tech: ["Nest.js", "PostgreSQL", "WebRTC", "Docker"]
    },
    {
        title: "Astrology Consultation",
        description: "Marketplace for live astrologer consultations with pay-per-minute billing and ultra-low latency video streaming.",
        tech: ["Node.js", "MongoDB", "Agora SDK", "Stripe"]
    },
    {
        title: "Lawsuit Management",
        description: "Digital case file management system with RBAC for law firms, including document versioning and automated status updates.",
        tech: ["Express.js", "MySQL", "AWS S3", "Twilio"]
    },
    {
        title: "ERP Solutions",
        description: "Unified business management suite handling inventory synchronization, payroll processing, and finance modules.",
        tech: ["Node.js", "PostgreSQL", "Redis", "React Admin"]
    }
];

export default function Projects() {
    return (
        <Section id="projects">
            <h2 className={styles.heading}>Featured Projects</h2>
            <div className={styles.grid}>
                {projects.map((project, idx) => (
                    <div key={idx} className={styles.card}>
                        <h3 className={styles.title}>{project.title}</h3>
                        <p className={styles.description}>{project.description}</p>
                        <div className={styles.techStack}>
                            {project.tech.map((tag, tIdx) => (
                                <span key={tIdx} className={styles.tag}>{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
