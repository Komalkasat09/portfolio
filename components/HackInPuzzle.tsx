import React, { useState } from 'react';
import styles from '../styles/HackInPuzzle.module.css';

const cipher = 'KOMAL.KASAT';
const scrambled = 'KMLAO.ASKAT';

export default function HackInPuzzle({ onSolved }: { onSolved: () => void }) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [solved, setSolved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim().toUpperCase() === cipher) {
      setSolved(true);
      setError('');
      setTimeout(onSolved, 800);
    } else {
      setError('Access Denied: Incorrect solution!');
    }
  };

  const handleAbort = () => {
    setSolved(true);
    setError('');
    setTimeout(onSolved, 300);
  };

  return (
    <div className={styles.puzzleContainer}>
      <h2 className={styles.puzzleTitle}>Hack In :: Entry Challenge</h2>
      <p className={styles.puzzlePrompt}>Unscramble the cipher to gain access:</p>
      <div className={styles.cipherBox}>{scrambled}</div>
      <form onSubmit={handleSubmit} className={styles.puzzleForm}>
        <input
          className={styles.puzzleInput}
          type="text"
          value={input}
          autoFocus
          onChange={e => setInput(e.target.value)}
          placeholder="Enter solution..."
        />
        <button className={styles.puzzleButton} type="submit">Hack In</button>
      </form>
      <button className={styles.abortButton} onClick={handleAbort}>
        Abort Mission → Skip to Portfolio
      </button>
      {error && <div className={styles.puzzleError}>{error}</div>}
      {solved && <div className={styles.puzzleSuccess}>Access Granted!</div>}
    </div>
  );
}
