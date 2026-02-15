import React from 'react';
import styles from '../styles/SkillsMatrix.module.css';
import { motion } from 'framer-motion';

interface Skill {
  category: string;
  items: { name: string; level: number }[];
}

const skills: Skill[] = [
  {
    category: '/languages',
    items: [
      { name: 'JavaScript/TypeScript', level: 95 },
      { name: 'Python', level: 90 },
      { name: 'Java', level: 75 },
    ],
  },
  {
    category: '/frameworks',
    items: [
      { name: 'React/Next.js', level: 92 },
      { name: 'Node.js', level: 88 },
      { name: 'TensorFlow', level: 80 },
    ],
  },
  {
    category: '/tools',
    items: [
      { name: 'Git/GitHub', level: 93 },
      { name: 'Docker', level: 85 },
      { name: 'AWS', level: 78 },
    ],
  },
  {
    category: '/soft_skills',
    items: [
      { name: 'Problem Solving', level: 95 },
      { name: 'Team Leadership', level: 87 },
      { name: 'Communication', level: 90 },
    ],
  },
];

export default function SkillsMatrix() {
  return (
    <div className={styles.skillsContainer}>
      <h3 className={styles.sectionTitle}>$ tree /skills --depth 2</h3>
      {skills.map((skillGroup, idx) => (
        <motion.div
          key={skillGroup.category}
          className={styles.skillGroup}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.15 }}
        >
          <div className={styles.categoryName}>{skillGroup.category}</div>
          {skillGroup.items.map((skill) => (
            <div key={skill.name} className={styles.skillItem}>
              <span className={styles.skillName}>{skill.name}</span>
              <div className={styles.progressBar}>
                <motion.div
                  className={styles.progressFill}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: idx * 0.15 }}
                />
              </div>
              <span className={styles.skillLevel}>{skill.level}%</span>
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
}
