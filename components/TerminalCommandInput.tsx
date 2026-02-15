import React, { useState } from 'react';
import styles from '../styles/TerminalCommandInput.module.css';

const commandMap: Record<string, string> = {
  'ls projects': 'Listing projects...\n[PID: 101] AI Chatbot\n[PID: 102] Portfolio Site\n[PID: 103] Data Visualizer',
  'cd experience': 'Navigating to experience...\n[Branch: Full-Stack]\n[Branch: AI Research]',
  'cat skills.txt': 'Skills:\n- JavaScript\n- Python\n- React\n- Next.js\n- AI/ML',
  './run_portfolio.sh': 'Executing portfolio...\nWelcome to Komal Kasat\'s interactive portfolio!',
  'sudo makeawesome': 'Achievement unlocked: Portfolio is now awesome!',
  'whoami': 'komal.kasat',
  'history': 'Command history:\nls projects\ncd experience\ncat skills.txt',
};

export default function TerminalCommandInput({ onCommand }: { onCommand: (output: string) => void }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const output = commandMap[input.trim()] || `Command not found: ${input}`;
    onCommand(output);
    setInput('');
  };

  return (
    <form className={styles.commandForm} onSubmit={handleSubmit}>
      <span className={styles.prompt}>komal@portfolio:~$</span>
      <input
        className={styles.commandInput}
        type="text"
        value={input}
        autoFocus
        onChange={e => setInput(e.target.value)}
        placeholder="Type a command..."
      />
    </form>
  );
}
