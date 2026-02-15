import React from 'react';
import styles from '../styles/ExperienceTimeline.module.css';
import { motion } from 'framer-motion';

interface Experience {
  hash: string;
  branch: string;
  role: string;
  company: string;
  date: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    hash: 'a7f3c2e',
    branch: 'main',
    role: 'Full-Stack Engineer',
    company: 'Tech Company',
    date: '2024-Present',
    achievements: [
      '+ Built scalable microservices architecture',
      '+ Improved API performance by 40%',
      '+ Led team of 5 developers',
    ],
  },
  {
    hash: 'b9e1d4a',
    branch: 'ai-research',
    role: 'AI Research Engineer',
    company: 'AI Lab',
    date: '2023-2024',
    achievements: [
      '+ Developed NLP models for chatbot',
      '+ Published research paper',
      '+ Trained ML models achieving 92% accuracy',
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <div className={styles.timelineContainer}>
      <h3 className={styles.sectionTitle}>$ git log --graph --oneline</h3>
      <div className={styles.gitGraph}>
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.hash}
            className={styles.commitBlock}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <div className={styles.commitHeader}>
              <span className={styles.commitHash}>{exp.hash}</span>
              <span className={styles.commitBranch}>({exp.branch})</span>
              <span className={styles.commitRole}>{exp.role}</span>
            </div>
            <div className={styles.commitCompany}>{exp.company}</div>
            <div className={styles.commitDate}>{exp.date}</div>
            <div className={styles.commitDiff}>
              {exp.achievements.map((achievement, i) => (
                <div key={i} className={styles.diffLine}>{achievement}</div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
