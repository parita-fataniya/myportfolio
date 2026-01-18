'use client';

import { FaServer, FaDatabase, FaCloud, FaLaptopCode } from 'react-icons/fa';
import { SiNodedotjs, SiNestjs, SiPostgresql, SiMongodb, SiRedis, SiAmazon, SiDocker, SiReact, SiNextdotjs } from 'react-icons/si';
import styles from './Skills.module.css';

export default function Skills() {
    return (
        <div id="skills" className={styles.skillsSection}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Technical Expertise</h2>

                <div className={styles.bentoGrid}>
                    {/* Main Block: Backend */}
                    <div className={`${styles.card} ${styles.backend}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconBox}><FaServer /></div>
                            <h3 className={styles.cardTitle}>Backend Engineering</h3>
                        </div>
                        <div className={styles.tagContainer}>
                            <span className={styles.techTag}><SiNodedotjs color="#339933" /> Node.js</span>
                            <span className={styles.techTag}>Express.js</span>
                            <span className={styles.techTag}><SiNestjs color="#E0234E" /> Nest.js</span>
                            <span className={styles.techTag}>Microservices</span>
                            <span className={styles.techTag}>REST API</span>
                            <span className={styles.techTag}>GraphQL</span>
                            <span className={styles.techTag}>Socket.io</span>
                            <span className={styles.techTag}>System Design</span>
                        </div>
                    </div>

                    {/* Tall Block: Databases */}
                    <div className={`${styles.card} ${styles.db}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconBox}><FaDatabase /></div>
                            <h3 className={styles.cardTitle}>Data & Storage</h3>
                        </div>
                        <div className={styles.tagContainer}>
                            <span className={styles.techTag}><SiPostgresql color="#336791" /> PostgreSQL</span>
                            <span className={styles.techTag}><SiMongodb color="#47A248" /> MongoDB</span>
                            <span className={styles.techTag}><SiRedis color="#DC382D" /> Redis</span>
                            <span className={styles.techTag}>MySQL</span>
                            <span className={styles.techTag}>Sequelize / TypeORM</span>
                        </div>
                    </div>

                    {/* Wide Block: Cloud */}
                    <div className={`${styles.card} ${styles.cloud}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconBox}><FaCloud /></div>
                            <h3 className={styles.cardTitle}>Cloud Infrastructure</h3>
                        </div>
                        <div className={styles.tagContainer}>
                            <span className={styles.techTag}><SiAmazon color="#FF9900" /> AWS (EC2, S3, RDS)</span>
                            <span className={styles.techTag}><SiDocker color="#2496ED" /> Docker</span>
                            <span className={styles.techTag}>CI/CD Pipelines</span>
                            <span className={styles.techTag}>Nginx</span>
                            <span className={styles.techTag}>Linux Ops</span>
                        </div>
                    </div>

                    {/* Standard Block: Frontend */}
                    <div className={`${styles.card} ${styles.frontend}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconBox}><FaLaptopCode /></div>
                            <h3 className={styles.cardTitle}>Frontend</h3>
                        </div>
                        <div className={styles.tagContainer}>
                            <span className={styles.techTag}><SiReact color="#61DAFB" /> React.js</span>
                            <span className={styles.techTag}><SiNextdotjs /> Next.js</span>
                            <span className={styles.techTag}>Tailwind</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
