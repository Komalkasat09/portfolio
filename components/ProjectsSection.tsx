import React, { useState } from 'react';
import styles from '../styles/ProjectsSection.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import MatrixRain from './MatrixRain';

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
    name: 'SkillSphere',
    status: 'completed',
    cpu: '95%',
    description: 'AI-powered career platform with resume generation, real-time previews, PDF export, and interview preparation. Multi-step forms, customizable templates, progress saving, and AI-driven interview feedback.',
    techStack: ['Next.js', 'FastAPI', 'MongoDB', 'AI/ML'],
    demoLink: 'https://github.com/Komalkasat09',
  },
  {
    pid: 102,
    name: 'AI Internship Finder',
    status: 'completed',
    cpu: '88%',
    description: 'Internship recommendation system using skill-based matching, resume analysis, and AI ranking. Integrated external APIs with dashboards for tracking and filtering real-time opportunities.',
    techStack: ['Next.js', 'ML', 'Tailwind', 'APIs'],
    demoLink: 'https://github.com/Komalkasat09',
  },
  {
    pid: 103,
    name: 'Misinformation Detector',
    status: 'active',
    cpu: '92%',
    description: '20+ agent pipeline for fake news and deepfake detection with trend analysis and credibility scoring. WhatsApp fact-checking bot and real-time global visualization using 3D globe interface.',
    techStack: ['Agentic AI', 'FastAPI', 'MongoDB', 'Next.js'],
    demoLink: 'https://github.com/Komalkasat09',
  },
  {
    pid: 104,
    name: 'Sign Language Translator',
    status: 'completed',
    cpu: '90%',
    description: 'Real-time sign-to-text, text-to-sign, and speech-to-sign translation with live transcripts. AI calling agent, learning modules, and quizzes for inclusive communication.',
    techStack: ['Next.js', 'FastAPI', 'ML', 'Computer Vision'],
    demoLink: 'https://github.com/Komalkasat09',
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className={styles.projectsContainer}>
      <h3 className={styles.sectionTitle}>$ ps aux | grep projects</h3>
      <div className={styles.tableWrapper}>
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
                <button 
                  className={styles.execButton}
                  onClick={() => setSelectedProject(project)}
                >
                  Execute
                </button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className={styles.projectDetails}>
        <p className={styles.detailsPrompt}>
          Click "Execute" or use 'cat project_[PID].json' for details
        </p>
        <p className={styles.mobileHint}>
          📱 Swipe table left to see all columns →
        </p>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <MatrixRain />
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.modalHeader}>
                <h2>📦 PROJECT: {selectedProject.name}</h2>
                <button className={styles.closeButton} onClick={() => setSelectedProject(null)}>
                  ✕
                </button>
              </div>
              
              <div className={styles.modalBody}>
                <div className={styles.infoRow}>
                  <span className={styles.label}>PID:</span>
                  <span className={styles.value}>{selectedProject.pid}</span>
                </div>
                
                <div className={styles.infoRow}>
                  <span className={styles.label}>STATUS:</span>
                  <span className={`${styles.value} ${selectedProject.status === 'active' ? styles.statusActive : styles.statusCompleted}`}>
                    {selectedProject.status.toUpperCase()}
                  </span>
                </div>
                
                <div className={styles.infoRow}>
                  <span className={styles.label}>COMPLEXITY:</span>
                  <span className={styles.value}>{selectedProject.cpu}</span>
                </div>

                <div className={styles.section}>
                  <h3>🎯 DESCRIPTION:</h3>
                  <p>{selectedProject.description}</p>
                </div>

                <div className={styles.section}>
                  <h3>💻 TECH STACK:</h3>
                  <div className={styles.techStack}>
                    {selectedProject.techStack.map((tech) => (
                      <span key={tech} className={styles.techBadge}>{tech}</span>
                    ))}
                  </div>
                </div>

                {selectedProject.demoLink && (
                  <div className={styles.section}>
                    <a 
                      href={selectedProject.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.demoButton}
                    >
                      🔗 View on GitHub →
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
