import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/BootScreen.module.css';
import MatrixRain from './MatrixRain';

const bootMessages = [
  'Initializing system...',
  'Loading credentials...',
  'Verifying access...',
  'Welcome, KOMAL.KASAT',
  'FULL-STACK_AI_ENGINEER',
  'Access Granted',
];

export default function BootScreen({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step < bootMessages.length) {
      const timer = setTimeout(() => setStep(step + 1), 900);
      return () => clearTimeout(timer);
    } else {
      setTimeout(onComplete, 1200);
    }
  }, [step, onComplete]);

  return (
    <div className={styles.bootContainer}>
      <MatrixRain />
      <motion.div
        className={styles.contentBox}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {bootMessages.slice(0, step).map((msg, idx) => (
          <div key={idx} className={styles.bootLine}>
            <span>{msg}</span>
            {msg === 'Access Granted' && (
              <motion.span
                className={styles.accessGranted}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                ░▒▓█ ACCESS GRANTED █▓▒░
              </motion.span>
            )}
          </div>
        ))}
      </motion.div>
      <div className={styles.progressBar}>
        <motion.div
          className={styles.progress}
          initial={{ width: 0 }}
          animate={{ width: `${(step / bootMessages.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
}
