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
      { name: 'JavaScript/TypeScript', level: 92 },
      { name: 'Python', level: 95 },
      { name: 'C', level: 85 },
      { name: 'SQL', level: 88 },
    ],
  },
  {
    category: '/web_backend',
    items: [
      { name: 'React.js', level: 93 },
      { name: 'Next.js', level: 95 },
      { name: 'Node.js', level: 88 },
      { name: 'FastAPI', level: 90 },
      { name: 'REST APIs', level: 92 },
    ],
  },
  {
    category: '/ai_ml',
    items: [
      { name: 'Machine Learning', level: 90 },
      { name: 'Deep Learning', level: 88 },
      { name: 'Generative AI', level: 92 },
      { name: 'Agentic AI', level: 87 },
    ],
  },
  {
    category: '/databases_tools',
    items: [
      { name: 'MongoDB', level: 90 },
      { name: 'MySQL', level: 85 },
      { name: 'Git/GitHub', level: 95 },
      { name: 'Figma', level: 88 },
      { name: 'Tailwind CSS', level: 93 },
      { name: 'shadcn/ui', level: 90 },
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
