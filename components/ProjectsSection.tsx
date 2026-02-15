import React from 'react';
import styles from '../styles/ProjectsSection.module.css';
import { motion } from 'framer-motion';

interface Project {
  pid: number;
  name: string;
  status: 'active' | 'completed';
  cpu: string;
  description: string;
  techStack: string[];
  demoLink?: string;
}

const projects: Project[] = [
  {
    pid: 101,
    name: 'AI Chatbot System',
    status: 'active',
    cpu: '95%',
    description: 'Intelligent conversational AI with NLP capabilities',
    techStack: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    demoLink: '#',
  },
  {
    pid: 102,
    name: 'Portfolio Terminal',
    status: 'active',
    cpu: '88%',
    description: 'Hacker-themed interactive portfolio with terminal UI',
    techStack: ['Next.js', 'TypeScript', 'Framer Motion', 'Three.js'],
    demoLink: '#',
  },
  {
    pid: 103,
    name: 'Data Visualizer',
    status: 'completed',
    cpu: '75%',
    description: 'Real-time data visualization dashboard',
    techStack: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    demoLink: '#',
  },
];

export default function ProjectsSection() {
  return (
    <div className={styles.projectsContainer}>
      <h3 className={styles.sectionTitle}>$ ps aux | grep projects</h3>
      <table className={styles.processTable}>
        <thead>
          <tr>
            <th>PID</th>
            <th>NAME</th>
            <th>STATUS</th>
            <th>CPU</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, idx) => (
            <motion.tr
              key={project.pid}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={styles.projectRow}
            >
              <td className={styles.pid}>{project.pid}</td>
              <td className={styles.name}>{project.name}</td>
              <td className={project.status === 'active' ? styles.statusActive : styles.statusCompleted}>
                {project.status.toUpperCase()}
              </td>
              <td className={styles.cpu}>{project.cpu}</td>
              <td>
                <button className={styles.execButton}>Execute</button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
      <div className={styles.projectDetails}>
        <p className={styles.detailsPrompt}>Use 'cat project_[PID].json' for details</p>
      </div>
    </div>
  );
}
