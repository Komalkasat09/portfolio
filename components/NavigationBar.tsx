'use client';
import React from 'react';
import styles from '../styles/NavigationBar.module.css';

interface NavigationBarProps {
  currentSection: 'home' | 'projects' | 'experience' | 'skills' | 'contact';
  onNavigate: (section: 'home' | 'projects' | 'experience' | 'skills' | 'contact') => void;
  terminalMode: boolean;
  onToggleMode: () => void;
}

export default function NavigationBar({ currentSection, onNavigate, terminalMode, onToggleMode }: NavigationBarProps) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.logoIcon}>►</span>
        <span className={styles.logoText}>KOMAL.KASAT</span>
      </div>
      
      <div className={styles.navLinks}>
        <button 
          className={`${styles.navButton} ${currentSection === 'home' ? styles.active : ''}`}
          onClick={() => onNavigate('home')}
        >
          <span className={styles.icon}>~</span> Home
        </button>
        <button 
          className={`${styles.navButton} ${currentSection === 'projects' ? styles.active : ''}`}
          onClick={() => onNavigate('projects')}
        >
          <span className={styles.icon}>📁</span> Projects
        </button>
        <button 
          className={`${styles.navButton} ${currentSection === 'experience' ? styles.active : ''}`}
          onClick={() => onNavigate('experience')}
        >
          <span className={styles.icon}>⚡</span> Experience
        </button>
        <button 
          className={`${styles.navButton} ${currentSection === 'skills' ? styles.active : ''}`}
          onClick={() => onNavigate('skills')}
        >
          <span className={styles.icon}>⚙️</span> Skills
        </button>
        <button 
          className={`${styles.navButton} ${currentSection === 'contact' ? styles.active : ''}`}
          onClick={() => onNavigate('contact')}
        >
          <span className={styles.icon}>📡</span> Contact
        </button>
      </div>

      <button className={styles.modeToggle} onClick={onToggleMode} title={terminalMode ? "Switch to GUI Mode" : "Switch to Terminal Mode"}>
        <span className={styles.toggleIcon}>{terminalMode ? '🖥️' : '⌨️'}</span>
        <span className={styles.toggleText}>{terminalMode ? 'GUI' : 'CLI'}</span>
      </button>
    </nav>
  );
}
