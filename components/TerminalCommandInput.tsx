import React, { useState } from 'react';
import styles from '../styles/TerminalCommandInput.module.css';

export default function TerminalCommandInput({ onCommand }: { onCommand: (output: string) => void }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onCommand(input.trim()); // Forward command to parent (boot.tsx)
      setInput('');
    }
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
        style={{ color: '#00ff00', background: 'rgba(0,0,0,0.95)', fontSize: '1.1rem', fontFamily: 'JetBrains Mono, Fira Code, monospace', border: '2px solid #00ff00', padding: '0.6rem 1.2rem', borderRadius: '8px', width: '60%' }}
      />
    </form>
  );
}
