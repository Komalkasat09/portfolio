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
    branch: 'infomatrix',
    role: 'Web Development Mentor',
    company: 'Infomatrix Student Chapter, DJ Sanghvi College',
    date: 'Aug 2025–Present',
    achievements: [
      '+ Mentored students in React, Next.js, and REST APIs through hands-on sessions',
      '+ Led technical planning for events and coding sprints',
      '+ Emphasized clean architecture and scalable UI design',
    ],
  },
  {
    hash: 'b9e1d4a',
    branch: 'nsdc',
    role: 'Creatives Head',
    company: 'NSDC Committee, DJ Sanghvi College',
    date: 'Aug 2025–Present',
    achievements: [
      '+ Headed design and development of digital assets and event pages',
      '+ Coordinated branding across teams',
      '+ Led creative direction for college events',
    ],
  },
  {
    hash: 'c4d8e1b',
    branch: 'sigai',
    role: 'Co-Committee Member',
    company: 'SigAI, DJ Sanghvi College',
    date: 'Aug 2024–Present',
    achievements: [
      '+ Organized AI/ML workshops and hackathons',
      '+ Supported content curation and technical logistics',
      '+ Built community engagement in AI/ML domain',
    ],
  },
  {
    hash: 'd2f5a9c',
    branch: 'research',
    role: 'Research Contributor',
    company: 'Interpretable Physics Reasoning in VLMs',
    date: 'Aug 2025–Oct 2025',
    achievements: [
      '+ Published on arXiv:2509.08270 & Hugging Face Papers',
      '+ Proposed taxonomy for physics reasoning performance',
      '+ Analyzed interpretability and failure modes in vision-language models',
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
