import React from 'react';
import styles from '../styles/TerminalUI.module.css';

export default function TerminalUI({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.terminalContainer}>
      <div className={styles.terminalHeader}>
        <span className={styles.prompt}>komal@portfolio:~$</span>
      </div>
      <div className={styles.terminalBody}>{children}</div>
    </div>
  );
}
